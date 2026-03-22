/**
 * ATTP - Animated Text to Sticker
 * Sistema de fallback com múltiplas APIs gratuitas (sem chave)
 * Adaptado de MAY0LPHI/TOM para CommonJS
 */

const axios = require('axios');

const TIMEOUT = 30000;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

function isWebp(buf) {
  return (
    buf.length > 12 &&
    buf.slice(0, 4).toString() === 'RIFF' &&
    buf.slice(8, 12).toString() === 'WEBP'
  );
}

async function tryProvider(name, fn) {
  try {
    const result = await fn();
    if (result && result.length > 2000 && isWebp(result)) {
      console.log(`[attp][${name}] OK (${result.length} bytes)`);
      return result;
    }
    console.log(`[attp][${name}] resposta inválida ou pequena demais`);
    return null;
  } catch (e) {
    console.log(`[attp][${name}] falhou: ${e.message}`);
    return null;
  }
}

async function providerSiputzx(text) {
  return tryProvider('siputzx', async () => {
    const res = await axios.get(`https://api.siputzx.my.id/api/m/attp`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerBk9(text) {
  return tryProvider('bk9', async () => {
    const res = await axios.get(`https://bk9.fun/sticker/attp`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerAgatz(text) {
  return tryProvider('agatz', async () => {
    const res = await axios.get(`https://api.agatz.xyz/api/attp`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerVreden(text) {
  return tryProvider('vreden', async () => {
    const res = await axios.get(`https://api.vreden.my.id/api/v1/maker/attp`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerLolhuman(text) {
  return tryProvider('lolhuman', async () => {
    const res = await axios.get(`https://api.lolhuman.xyz/api/attp`, {
      params: { text, apikey: 'hiudy' },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerNazuApi(text) {
  return tryProvider('nazuapi', async () => {
    const res = await axios.get(`https://hiudy.vercel.app/api/attp`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

async function providerSiputzxBiru(text) {
  return tryProvider('siputzx-biru', async () => {
    const res = await axios.get(`https://api.siputzx.my.id/api/m/brat`, {
      params: { text },
      responseType: 'arraybuffer',
      timeout: TIMEOUT,
      headers: { 'User-Agent': UA }
    });
    return Buffer.from(res.data);
  });
}

/**
 * Gera sticker ATTP animado (padrão - azul/colorido)
 * @param {string} text - texto para o sticker
 * @returns {Promise<Buffer|null>} Buffer webp ou null
 */
async function attp(text) {
  const providers = [
    () => providerSiputzx(text),
    () => providerBk9(text),
    () => providerVreden(text),
    () => providerAgatz(text),
    () => providerLolhuman(text),
    () => providerNazuApi(text)
  ];

  for (const provider of providers) {
    const result = await provider();
    if (result) return result;
  }

  return null;
}

/**
 * Gera sticker ATTP versão 2 (fonte diferente / cor diferente)
 * @param {string} text - texto para o sticker
 * @returns {Promise<Buffer|null>} Buffer webp ou null
 */
async function attp2(text) {
  const providers = [
    () => providerBk9(text),
    () => providerVreden(text),
    () => providerSiputzx(text),
    () => providerAgatz(text),
    () => providerNazuApi(text)
  ];

  for (const provider of providers) {
    const result = await provider();
    if (result) return result;
  }

  return null;
}

/**
 * Gera sticker ATTP versão 3 (estilo brat / branco)
 * @param {string} text - texto para o sticker
 * @returns {Promise<Buffer|null>} Buffer webp ou null
 */
async function attp3(text) {
  const providers = [
    () => providerSiputzxBiru(text),
    () => providerAgatz(text),
    () => providerBk9(text),
    () => providerSiputzx(text)
  ];

  for (const provider of providers) {
    const result = await provider();
    if (result) return result;
  }

  return null;
}

module.exports = { attp, attp2, attp3 };
