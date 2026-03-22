/**
 * YouTube Download - Sistema de Fallback com Múltiplas APIs
 * Adaptado de MAY0LPHI/TOM para CommonJS
 * Providers: Nayan → Adonix → OceanSaver → Y2mate → SaveTube
 */

const axios = require('axios');
const { createDecipheriv } = require('crypto');
const { spawn } = require('child_process');
const { Readable } = require('stream');

const CONFIG = {
  TIMEOUT: 60000,
  DOWNLOAD_TIMEOUT: 180000,
  USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  SAVETUBE_SECRET_KEY: 'C5D58EF67A7584E4A29F6C35BBC4EB12',
  SAVETUBE_ALGORITHM: 'aes-128-cbc'
};

function getYouTubeVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|embed\/|(?:watch\?(?:.*&)?v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function hexcode(hex) {
  return Buffer.from(hex, 'hex');
}

function decodeSavetube(enc) {
  const key = hexcode(CONFIG.SAVETUBE_SECRET_KEY);
  const data = Buffer.from(enc, 'base64');
  const iv = data.slice(0, 16);
  const content = data.slice(16);
  const decipher = createDecipheriv(CONFIG.SAVETUBE_ALGORITHM, key, iv);
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);
  return JSON.parse(decrypted.toString());
}

async function downloadWithNayan(url, format = 'mp3') {
  try {
    console.log(`[Nayan] Baixando ${format}...`);
    const response = await axios.get('https://nayan-video-downloader.vercel.app/ytdown', {
      params: { url },
      timeout: CONFIG.TIMEOUT,
      headers: { 'User-Agent': CONFIG.USER_AGENT }
    });

    const raw = response.data;
    const body = (raw && raw.data) ? raw.data : raw;
    if (!body || body.status === false) throw new Error('Resposta inválida da API Nayan');

    const media = (body.data && (body.data.title || body.data.video || body.data.audio)) ? body.data : body;
    const downloadUrl = format === 'mp3' ? media.audio : (media.video_hd || media.video);
    if (!downloadUrl) throw new Error(`URL de ${format} não disponível`);

    const fileResponse = await axios.get(downloadUrl, {
      responseType: 'arraybuffer',
      timeout: CONFIG.DOWNLOAD_TIMEOUT,
      headers: { 'User-Agent': CONFIG.USER_AGENT, 'Referer': 'https://nayan-video-downloader.vercel.app/' }
    });

    const buffer = Buffer.from(fileResponse.data);
    console.log(`[Nayan] OK: ${media.title || 'sem título'}`);
    return { success: true, buffer, title: media.title || 'Audio', thumbnail: media.thumb, ext: format === 'mp3' ? 'mp3' : 'mp4', source: 'nayan' };
  } catch (error) {
    console.log(`[Nayan] Falhou: ${error.message}`);
    return { success: false, error: error.message, source: 'nayan' };
  }
}

async function downloadWithAdonix(url) {
  try {
    console.log(`[Adonix] Baixando mp3...`);
    const headers = {
      "accept": "*/*",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://id.ytmp3.mobi/",
      "User-Agent": CONFIG.USER_AGENT
    };

    const initialResponse = await axios.get(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers, timeout: CONFIG.TIMEOUT });
    const init = initialResponse.data;

    const videoId = getYouTubeVideoId(url);
    if (!videoId) throw new Error('ID do vídeo não encontrado');

    const mp3Url = init.convertURL + `&v=${videoId}&f=mp3&_=${Math.random()}`;
    const mp3Response = await axios.get(mp3Url, { headers, timeout: CONFIG.TIMEOUT });
    const mp3Data = mp3Response.data;

    let info = {};
    for (let i = 0; i < 30; i++) {
      const progressResponse = await axios.get(mp3Data.progressURL, { headers, timeout: CONFIG.TIMEOUT });
      info = progressResponse.data;
      if (info.progress === 3) break;
      await new Promise(r => setTimeout(r, 2000));
    }
    if (info.progress !== 3) throw new Error('Timeout no processamento');

    const fileResponse = await axios.get(mp3Data.downloadURL, { responseType: 'arraybuffer', timeout: CONFIG.DOWNLOAD_TIMEOUT });
    const buffer = Buffer.from(fileResponse.data);
    console.log(`[Adonix] OK: ${info.title}`);
    return { success: true, buffer, title: info.title || 'Audio', ext: 'mp3', source: 'adonix' };
  } catch (error) {
    console.log(`[Adonix] Falhou: ${error.message}`);
    return { success: false, error: error.message, source: 'adonix' };
  }
}

async function downloadWithOceanSaver(url, format = 'mp3') {
  try {
    console.log(`[OceanSaver] Baixando ${format}...`);
    const fmt = format === 'mp4' ? '360' : 'mp3';
    const encodedUrl = encodeURIComponent(url);

    const requestResponse = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?format=${fmt}&url=${encodedUrl}`,
      { timeout: CONFIG.TIMEOUT }
    );

    const requestData = requestResponse.data;
    if (!requestData.success || !requestData.id) throw new Error('Falha ao obter task ID');

    for (let i = 0; i < 20; i++) {
      const progressResponse = await axios.get(
        `https://p.oceansaver.in/api/progress?id=${requestData.id}`,
        { timeout: CONFIG.TIMEOUT }
      );
      const progressData = progressResponse.data;

      if (progressData && progressData.download_url) {
        const fileResponse = await axios.get(progressData.download_url, { responseType: 'arraybuffer', timeout: CONFIG.DOWNLOAD_TIMEOUT });
        const buffer = Buffer.from(fileResponse.data);
        console.log(`[OceanSaver] OK: ${progressData.title}`);
        return { success: true, buffer, title: progressData.title || 'Media', ext: format === 'mp4' ? 'mp4' : 'mp3', source: 'oceansaver' };
      }
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error('Timeout aguardando conversão');
  } catch (error) {
    console.log(`[OceanSaver] Falhou: ${error.message}`);
    return { success: false, error: error.message, source: 'oceansaver' };
  }
}

async function downloadWithSavetube(url, format = 'mp3') {
  try {
    console.log(`[SaveTube] Baixando ${format}...`);
    const quality = format === 'mp4' ? '360' : '128';
    const id = getYouTubeVideoId(url);
    if (!id) throw new Error('ID do vídeo não encontrado');

    const cdnRes = await axios.get(`https://savetube.su/api/info?url=https://youtube.com/watch?v=${id}`, {
      headers: { 'User-Agent': CONFIG.USER_AGENT },
      timeout: CONFIG.TIMEOUT
    });

    if (!cdnRes.data?.data) throw new Error('Info inválido');
    const cdn = cdnRes.data.data.cdn;

    const dlRes = await axios.post(`https://${cdn}/api/download`, {
      quality,
      key: cdnRes.data.data.key,
      title: cdnRes.data.data.title,
      downloadType: format === 'mp4' ? 'video' : 'audio'
    }, {
      headers: { 'User-Agent': CONFIG.USER_AGENT, 'Content-Type': 'application/json', Referer: 'https://savetube.su/' },
      timeout: CONFIG.TIMEOUT
    });

    const enc = dlRes.data?.data?.downloadUrl;
    if (!enc) throw new Error('URL de download não encontrada');

    let downloadUrl = enc;
    try { downloadUrl = decodeSavetube(enc); } catch {}

    const fileResponse = await axios.get(typeof downloadUrl === 'string' ? downloadUrl : downloadUrl.url || enc, {
      responseType: 'arraybuffer', timeout: CONFIG.DOWNLOAD_TIMEOUT,
      headers: { 'User-Agent': CONFIG.USER_AGENT }
    });
    const buffer = Buffer.from(fileResponse.data);
    console.log(`[SaveTube] OK`);
    return { success: true, buffer, title: cdnRes.data.data.title || 'Media', ext: format === 'mp4' ? 'mp4' : 'mp3', source: 'savetube' };
  } catch (error) {
    console.log(`[SaveTube] Falhou: ${error.message}`);
    return { success: false, error: error.message, source: 'savetube' };
  }
}

function converterParaMp3(inputBuffer) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const ffmpeg = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-vn',
      '-ar', '44100',
      '-ac', '2',
      '-ab', '128k',
      '-f', 'mp3',
      'pipe:1'
    ]);

    ffmpeg.stdout.on('data', chunk => chunks.push(chunk));
    ffmpeg.stdout.on('end', () => resolve(Buffer.concat(chunks)));
    ffmpeg.stderr.on('data', () => {});
    ffmpeg.on('error', reject);
    ffmpeg.on('close', code => {
      if (code !== 0 && chunks.length === 0) reject(new Error(`ffmpeg saiu com código ${code}`));
    });

    const readable = Readable.from(inputBuffer);
    readable.pipe(ffmpeg.stdin);
    readable.on('error', reject);
    ffmpeg.stdin.on('error', () => {});
  });
}

async function downloadWithFallbacks(url, format = 'mp3') {
  const providers = [
    () => downloadWithNayan(url, format),
    () => downloadWithOceanSaver(url, format),
    () => downloadWithAdonix(url),
    () => downloadWithSavetube(url, format)
  ];

  for (const provider of providers) {
    const result = await provider();
    if (result.success && result.buffer && result.buffer.length > 10000) {
      return result;
    }
    console.log(`[fallback] tentando próximo provider...`);
  }

  return { success: false, error: 'Todos os providers falharam. Tente novamente mais tarde.' };
}

async function ytmp3(url) {
  const id = getYouTubeVideoId(url);
  const videoUrl = id ? `https://youtube.com/watch?v=${id}` : url;
  const result = await downloadWithFallbacks(videoUrl, 'mp3');
  if (!result.success) return { ok: false, msg: result.error };

  let buffer = result.buffer;
  try {
    console.log(`[ffmpeg] Convertendo para MP3 válido... (${Math.round(buffer.length / 1024)}KB)`);
    buffer = await converterParaMp3(buffer);
    console.log(`[ffmpeg] Conversão OK: ${Math.round(buffer.length / 1024)}KB`);
  } catch (e) {
    console.log(`[ffmpeg] Falhou na conversão, usando buffer original: ${e.message}`);
  }

  return { ok: true, buffer, title: result.title, thumbnail: result.thumbnail, source: result.source };
}

async function ytmp4(url) {
  const id = getYouTubeVideoId(url);
  const videoUrl = id ? `https://youtube.com/watch?v=${id}` : url;
  const result = await downloadWithFallbacks(videoUrl, 'mp4');
  if (!result.success) return { ok: false, msg: result.error };
  return { ok: true, buffer: result.buffer, title: result.title, thumbnail: result.thumbnail, source: result.source };
}

module.exports = { ytmp3, ytmp4, getYouTubeVideoId };
