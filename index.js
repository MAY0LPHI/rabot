//Base 100% Editable creditos a Naufrabot 

//Página oficial naufrabot.com

//Sígueme en todas mis redes para estar informados con las novedades de la base 

//Modulos
const { default: makeWASocket,
  DisconnectReason, JulsBotIncConnect, getAggregateVotesInPollMessage, delay, makeCacheableSignalKeyStore, useMultiFileAuthState,
 fetchLatestBaileysVersion, 
 generateForwardMessageContent,
 prepareWAMessageMedia, 
 generateWAMessageFromContent, 
 generateMessageID,
  downloadContentFromMessage, 
  jidDecode,
   proto } = require("baileys")
const fs = require('fs')
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const fetch = require('node-fetch')
const pino = require('pino')
const util = require("util")
const speed = require("performance-now");
const mimetype = require('mime-types')
const { exec, spawn, execSync } = require("child_process")
let phoneNumber = "5533982993174"; // número do bot

const _originalConsoleError = console.error.bind(console);
console.error = (...args) => {
  const msg = args.join(' ');
  if (
    msg.includes('Bad MAC') ||
    msg.includes('MessageCounterError') ||
    msg.includes('Failed to decrypt') ||
    msg.includes('session_cipher') ||
    msg.includes('Bad MAC Error')
  ) return;
  _originalConsoleError(...args);
};

process.on('uncaughtException', (err) => {
  if (
    err && err.message && (
      err.message.includes('Bad MAC') ||
      err.message.includes('MessageCounterError') ||
      err.message.includes('Failed to decrypt') ||
      err.message.includes('readline was closed') ||
      err.message.includes('readline')
    )
  ) return;
  console.log('Erro não capturado:', err.message || err);
});

process.on('unhandledRejection', (reason) => {
  if (
    reason && reason.message && (
      reason.message.includes('Bad MAC') ||
      reason.message.includes('MessageCounterError') ||
      reason.message.includes('Failed to decrypt') ||
      reason.message.includes('readline was closed') ||
      reason.message.includes('readline')
    )
  ) return;
  console.log('Rejeição não tratada:', reason?.message || reason);
});

const axios = require("axios")
 const ffmpeg = require('fluent-ffmpeg')
 
 //color
const chalk = require('chalk')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
 
 //baner
const banner = cfonts.render("Knowxly| Bot| Base", {
  font: 'pallet',
  align: 'center',
  gradient: ["green","blue"]
})
      // FUNCIONES DESCARGA 
const { fetchJson , getBuffer ,fetchBuffer } = require('./fuction/download/gets.js')


const {getExtension, getRandom } =require('./fuction/settings/fuctions.js')

 //Stickers
const { sendVideoAsSticker, sendImageAsSticker } = require('./fuction/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./fuction/sticker/rename2.js');
 
 //Grupos js
const { MoneyOfSender, addkoin, delkoin, AddReg, checkOfReg , addLevel, addXp,levelOfsender , xpOfsender ,checkOfRegM ,addkoinM , delkoinM , MoneyOfM,Rxp, addRxp ,addRep , delRep , repUser  } = require('./settings/Grupo/Js/reg.js')
     
           // GAMES
const  { addClaim , checkClaim , timeClaim ,expiredClaim } = require('./Games/Js/claim.js')
const { checkCasino,checkAttp,checkEmoji,checkEve, addClaimTraga, checkClaimTraga, timeClaimTraga, checkRuleta,checkMinar,addCasino,addAttp,addEmoji,addEve,addRuleta ,addMinar,expiredCasino,expiredMinar,expiredAttp,expiredEmoji,expiredEve,expiredRuleta,timeAttp,timeEmoji,timeEve,timeRuleta,timeMinar,timeCasino,expiredDayli,JsonDayli,addDayli,timeDayli,checkDayli,checkPescar,timePescar,addPescar,expiredPescar}
 = require('./Games/Js/mining.js')



  


      
    // Menu bot js
const Menu = require ('./settings/Bot/Js/menu.js')

 //configurar ggrupos
const welkom = JSON.parse(fs.readFileSync('./settings/Grupo/Json/welkom.json')) 
const antilink = JSON.parse(fs.readFileSync('./settings/Grupo/Json/antilink.json'))
const bngp = JSON.parse(fs.readFileSync('./settings/Grupo/Json/grupo.json'))
const Antipv = JSON.parse(fs.readFileSync('./settings/Grupo/Json/chat.json'))
const registro = JSON.parse(fs.readFileSync('./settings/Grupo/Json/registros.json')) 
const Exportion = JSON.parse(fs.readFileSync('./Games/Json/exportion.json'))
const Exportion1 = JSON.parse(fs.readFileSync('./Games/Json/Exportion1.json'))
const Cuestions = JSON.parse(fs.readFileSync('./Games/Json/cuestions.json'))
              
   // 𝚃𝙸𝙼𝙴
const moment = require("moment-timezone") 
const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
const horap = moment().format('HH')
var timeFt ='𝑶𝒍𝒂́ 🙋'
if (horap >= '01' && horap <= '05') {
  timeFt = '𝑩𝒐𝒎 𝒅𝒊𝒂 ✨'
} else if (horap >= '05' && horap <= '12') {
  timeFt = '𝑩𝒐𝒎 𝒅𝒊𝒂 ☀️'
} else if (horap >= '12' && horap <= '18') {
  timeFt = '𝑩𝒐𝒂 𝒕𝒂𝒓𝒅𝒆 ⛅'
} else if (horap >= '18' && horap <= '23') {
  timeFt = '𝑩𝒐𝒂 𝒏𝒐𝒊𝒕𝒆 🌑'
} 



 //Configuraciones 
var { creador, owner, Bot, JpgBot, API_KEY_NAUFRA } = require("./settings/settings.json");
const bannerImg = fs.readFileSync('./media/banner.png');
const prefixo = ['#','/','•','.','!','?','*']// @ Prefijos



const pairingCode = true;

const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

async function startProo() {
  console.clear();
  console.log(banner.string);
  console.log(chalk.cyanBright("🔥 Knowxly"));

  // Estado de sesión
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  // Crear socket
  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false, // Desactivado para no mostrar QR
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }))
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    syncFullHistory: false,
  });

  // 🟢 Si no hay sesión registrada, generar el código de vinculación automáticamente
  if (!sock.authState.creds.registered) {
    try { if (!rl.closed) rl.close(); } catch(_) {}

    const number = phoneNumber.replace(/[^0-9]/g, "");
    console.log(chalk.cyan(`📱 Número configurado: ${number}`));
    console.log(chalk.yellow("⌛ Aguardando conexão para solicitar código..."));

    await new Promise(r => setTimeout(r, 3000));

    let tentativas = 0;
    const gerarCodigo = async () => {
      tentativas++;
      try {
        const code = await sock.requestPairingCode(number);
        console.log(chalk.bgGreen.black("✅ CÓDIGO DE VINCULAÇÃO:"), chalk.white(code));
        console.log(chalk.cyan("👉 WhatsApp > Configurações > Aparelhos conectados > Conectar aparelho > Digite o código"));
      } catch (err) {
        if (tentativas < 3) {
          console.log(chalk.yellow(`⚠️ Tentativa ${tentativas} falhou. Tentando novamente em 5s...`));
          await new Promise(r => setTimeout(r, 5000));
          await gerarCodigo();
        } else {
          console.log(chalk.red("❌ Não foi possível gerar o código. O bot aguarda conexão..."));
        }
      }
    };
    await gerarCodigo();
  }

  // 🔄 Monitorear el estado de conexión
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("❌ Sessão encerrada. Apague a pasta 'session' e vincule novamente."));
      } else {
        console.log(chalk.yellow("⚠️ Conexão encerrada, reconectando..."));
        startProo();
      }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ Conectado com sucesso"));
      exec("rm -rf tmp && mkdir tmp");
      try { if (!rl.closed) rl.close(); } catch(_) {}
    }
  });

  // Guardar credenciales cuando se actualicen
  sock.ev.on("creds.update", saveCreds);



    
               // 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 
        // 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚈 𝙳𝙴𝚂𝙿𝙴𝙳𝙸𝙳𝙰 
sock.ev.on("group-participants.update", async (anu) => {
if(!welkom.includes(anu.id)) return
try {
const metadata = await sock.groupMetadata(anu.id)
  participants = anu.participants
  for (let num of participants){
 
if(anu.action == 'add') {
const grup = metadata.subject
const num = anu.participants[0]
const mem = metadata.participants.length
const descr = metadata.desc
const sol = `
✦━─⌬༓༒༓⌬─━✦
*✧༺ 𝑩𝒆𝒎-𝒗𝒊𝒏𝒅𝒐(𝒂) ✦༻✧*

💌 「 Olá @${num.split('@')[0]} 🌟 e bem-vindo(a) ao reino de *${grup}* 」
🥂 Que sua estadia seja repleta de risadas, boa conversa 🗨 e uma boa taça de hidromel 🍯🍺

📜 Lembre-se de conferir as nossas regras para não despertar os dragões 🐉🔥
 
『 👥 Membros atuais: ${mem} 』
✦━─⌬༓༒༓⌬─━✦
`

await sock.sendMessage(anu.id, {
  image: { url: "https://i.ibb.co/HDf3hw9J/20250702-214923.jpg" },
  caption: sol,
  mentions: [num]  // 👈 Aquí haces la mención real
})
}
if (anu.action == 'promote') {
    num = anu.participants[0]    
    teks = `
✦━─┈༓༒༓┈─━✦

     *✧༺ 𝓝𝓸𝓿𝓸 𝓐𝓭𝓶𝓲𝓷 ༻✧*

🪪 𝗡𝗼𝗺𝗲: @${num.split('@')[0]}
🌐 𝗚𝗿𝘂𝗽𝗼: ${metadata.subject}
💌 「 Parabéns! 🎉 Você foi promovido à mesa dos administradores 🪄 」

✦━─┈༓༒༓┈─━✦
`
  await sock.sendMessage(anu.id,{image : { url : "https://i.postimg.cc/0ygy14nq/20251017-152852.jpg" }, caption : teks})
    }

} 
}catch(e) {
console.log('Error: %s', color(e, "red"))
}
})

//Bienvenida y despedidas

sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const numerodono = [
  `${owner}`,
  "5527992318815@s.whatsapp.net",
  "5533982993174@s.whatsapp.net"
];


const verificarN = async(sla) => {
const [result] = await sock.onWhatsApp(sla)
if(result == undefined) {
enviar("Este usuário no existe en WhatsApp")
} else {
enviar(`${sla} Número existente en WhatsApp con  id: ${result.jid}`)
}
}
    
// Constantes is
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant: from
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants || [] : [];
const nome = info.pushName ? info.pushName : ''
const groupAdmins = groupMembers.filter(p => p.admin);
const Sadm = isGroup ? getGroupAdmins(groupAdmins) :''
const messagesC = (pes || '').slice(0).trim().split(/ +/).shift().toLowerCase()
const args = (body || '').trim().split(/ +/).slice(1)
const q = args.join(' ')
const text = args.join(' ')
const isCmd = (body || '').startsWith(prefixo)
              
  // MULTIPREFIJO 
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const prefixes = prefixo ? prefixo.map(prefix => prefix.toLowerCase()) : [];
const lowerBudy = budy.toLowerCase();
const hasPrefix = prefixes.some(prefix => lowerBudy.startsWith(prefix));
const commandArgs = hasPrefix ? lowerBudy.slice(prefixes.find(prefix => lowerBudy.startsWith(prefix)).length).trim().split(' ') : lowerBudy.trim().split(' ');
const comando = removeAccents(commandArgs[0]);
  // MULTIPREFIJO
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const senderNumber = sender.split("@")[0]
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isOwner =  numerodono.includes(sender)


const isGroupAdmins = groupAdmins.some(admin => admin.id?.includes(sender));
const isBotGroupAdmins = esAdminFlexible(sock, groupAdmins.map(p => p.id));

function esAdminFlexible(sock, listaDeAdmins = []) {
  if (!sock?.authState?.creds?.me) return false;

  const botId = sock.authState.creds.me.id;   // ej: 51916525000:26@lid
  const botLid = sock.authState.creds.me.lid; // ej: 51916525000@lid

  const clean = (jid) => jid?.split(':')[0]; // elimina el ":26" si existe

  return listaDeAdmins.some(adminJid => {
    const adminBase = clean(adminJid);
    return (
      adminJid === botId ||
      adminJid === botLid ||
      adminJid === botId.replace(/:\d+/, '') || // compara sin ":xx"
      adminJid === botLid.replace(/:\d+/, '') ||
      adminBase === clean(botId) ||
      adminBase === clean(botLid)
    );
  });
}

const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 

           // Constantes if nuevas
  const iswelkom = isGroup ? welkom.includes(from) : false
const isBanGp = isGroup ? bngp.includes(from) : false
const isAntipv = Antipv.includes('activo')
const isReg = checkOfReg(sender)
 const isAntiLink = isGroup ? antilink.includes(from) : false 
const coins = MoneyOfSender(sender)
 
 // 🟢 Sistema de encendido/apagado global del bot

const estadoPath = './settings/estadoBot.json'


if (!fs.existsSync(estadoPath)) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: true }, null, 2))
}
let botActivo = JSON.parse(fs.readFileSync(estadoPath)).activo
function guardarEstadoBot(estado) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: estado }, null, 2))
  botActivo = estado
}

//

//MODO ADMIN 

const modoAdminPath = './settings/Grupo/Json/modo_admin.json';
const modoAdminList = fs.existsSync(modoAdminPath) ? JSON.parse(fs.readFileSync(modoAdminPath)) : [];
const isModoAdmin = isGroup ? modoAdminList.includes(from) : false;



 //Funciones nuevas
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
} 
function DLT_FL(file) {
        try {
            fs.unlinkSync(file);
        } catch (error) {
            return;
        }
    }
    
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
 //rangos
const rangos = JSON.parse(fs.readFileSync('./settings/rangos.json'))
const YouN = levelOfsender(sender)
const Mlevel = rangos[YouN] || '🎖️𝐒𝐢𝐧 𝐑𝐚𝐧𝐠𝐨🎖️'

 
 

 
 const Rrxp = Rxp(sender)
 const Crxp = xpOfsender(sender)
 var Mrxp ;
 if(Crxp <= Rrxp + 50){
 var Mrxp = '*▒▒▒▒▒▒▒▒▒▒ 0%*'
 }else if(Crxp <= Rrxp + 100){
 var Mrxp = '*█▒▒▒▒▒▒▒▒▒ 10%*'
 }else if(Crxp <= Rrxp + 200){
 var Mrxp = '*██▒▒▒▒▒▒▒▒ 20%*'
 }else if(Crxp <= Rrxp + 300){
 var Mrxp = '*███▒▒▒▒▒▒▒ 30%*'
 } else if(Crxp <= Rrxp + 400){
 var Mrxp = '*████▒▒▒▒▒▒ 40%*'
 }else if(Crxp <= Rrxp + 500){
 var Mrxp = '*█████▒▒▒▒▒ 50%*'
 }else if(Crxp <= Rrxp + 600){
 var Mrxp = '*██████▒▒▒▒ 60%*'
 }else if(Crxp <= Rrxp + 700){
 var Mrxp = '*███████▒▒▒ 70%*'
 }else if(Crxp <= Rrxp + 800){
 var Mrxp = '*████████▒▒ 80%*'
 }else if(Crxp <= Rrxp + 999){
 var Mrxp = '*█████████▒ 90%*'
 } else if(Crxp >= Rrxp + 1000){
 var Mrxp = '*██████████ 100%*'
 }
 
             // 𝙽iveles
 // Constantes if
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")


const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}



//funcion para mencionar 

const obtenerMencionado = (info) => {
    const context = info.message?.extendedTextMessage?.contextInfo
        || info.message?.contextInfo
        || null;

    if (context?.mentionedJid && context.mentionedJid.length > 0) {
        return context.mentionedJid[0];
    }

    if (context?.participant) {
        return context.participant;
    }

    return null;
};

     //  Time
const runtime = function(seconds) {
    seconds = Number(seconds);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Utilizando Math.floor() para asegurar que los segundos sean enteros
    const parts = [];    
    if (days > 0) {
        parts.push(days + (days === 1 ? " 𝙳𝙸𝙰" : " 𝙳𝙸𝙰𝚂"));
    }
    if (hours > 0) {
        parts.push(hours + (hours === 1 ? " 𝙷𝙾𝚁𝙰" : " 𝙷𝙾𝚁𝙰𝚂"));
    }
    if (minutes > 0) {
        parts.push(minutes + (minutes === 1 ? "  𝙼𝙸𝙽𝚄𝚃𝙾" : " 𝙼𝙸𝙽𝚄𝚃𝙾𝚂"));
    }
   if (remainingSeconds > 0) {
    parts.push(remainingSeconds + (remainingSeconds === 1 ? " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾" : " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂"));
    }    
    return parts.join(', ');
}

  // Respuesta
     const respuesta = {
  admin: "『 🚫 𝒗𝒐𝒄𝒆̂ 𝒏𝒂̃𝒐 𝒆́ 𝒂𝒅𝒎𝒊𝒏 』",
  botadmin: "『 ⚠️ 𝒐 𝒃𝒐𝒕 𝒑𝒓𝒆𝒄𝒊𝒔𝒂 𝒔𝒆𝒓 𝒂𝒅𝒎𝒊𝒏 』",
  grupos: "『 💬 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒎𝒆𝒏𝒕𝒆 𝒆𝒎 𝒈𝒓𝒖𝒑𝒐𝒔 』",
  vacio: "『 ❓ 𝒅𝒊𝒈𝒊𝒕𝒆 𝒂𝒍𝒈𝒐, 𝒏𝒂̃𝒐 𝒑𝒐𝒔𝒔𝒐 𝒂𝒅𝒊𝒗𝒊𝒏𝒉𝒂𝒓 』",
  miowner: "『 ⛔ 𝒗𝒐𝒄𝒆̂ 𝒏𝒂̃𝒐 𝒆́ 𝒎𝒆𝒖 𝒅𝒐𝒏𝒐 』",

  registro: `
☠️━━━━━━━━━━━━━━━━━━☠️
💀 ❝ 𝑷𝒓𝒊𝒎𝒆𝒊𝒓𝒐 𝒗𝒐𝒄𝒆̂ 𝒑𝒓𝒆𝒄𝒊𝒔𝒂 𝒔𝒆 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒓 🕸️
🕷️ ❝ 𝑫𝒊𝒈𝒊𝒕𝒆:  .𝒓𝒆𝒈 ❞
☠️━━━━━━━━━━━━━━━━━━☠️
`,

  yaregistro: `
☠️━━━━━━━━━━━━━━━━━━☠️
💀 ❝ 𝑽𝒐𝒄𝒆̂ 𝒋𝒂́ 𝒆𝒔𝒕𝒂́ 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 🕸️ ❞
☠️━━━━━━━━━━━━━━━━━━☠️
`,

  coins: `『 💀 𝐑𝐞𝐚𝐢𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬 @${sender.split('@')[0]} 』`
}

 
   // Verificados
 const SvnC = {key : {participant : '0@s.whatsapp.net'},message : {contactMessage : {displayName : `${pushname}`}}};
 
  // Funciones para crear códigos de 6 Digitos
  
  function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }
    return codigo;
}


 // MENSAJES EN CONSOLA
 
// comando pv
if (!isGroup && isCmd) console.log( '\n  ╔─━━━━ ', color(' 𝗖𝗠𝗗 「 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 」','blue'), '━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOME :','lime'),color(pushname,'cyan'),'\n',
color(' COMANDO :','lime'),color(comando,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DADOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('𝗘𝗹𝗶𝘀𝘃𝗮𝗻 | 𝗥𝘆𝘂𝗸','red'), '━━━━━─╝')

//pv
if (!isCmd && !isGroup) console.log( '\n  ╔─━━━━━', color(' 𝗖𝗛𝗔𝗧 「 𝗕𝗢𝗧 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOME :','lime'),color(pushname,'cyan'),'\n',
color(' MENSAGEM :','lime'),color(budy,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DADOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━ '),color ('【✔】 ','red'), '━━━━━━━━━─╝')

//comando grupo
if (isCmd && isGroup) console.log( '\n  ╔─━━━ ', color('  𝗖𝗠𝗗「 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 」','blue'), '━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOME :','lime'),color(pushname,'cyan'),'\n',
color(' COMANDO :','lime'),color(comando,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DADOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('𝗘𝗹𝗶𝘀𝘃𝗮𝗻 | 𝗥𝘆𝘂𝗸','red'), '━━━━━─╝')

//mensagem grupo
if (!isCmd && isGroup) console.log( '\n  ╔─━━━━━', color(' 𝗖𝗛𝗔𝗧「 𝗕𝗢𝗧 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOME :','lime'),color(pushname,'cyan'),'\n',
color(' MENSAGEM :','lime'),color(budy,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DADOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━━ '),color ('【✔】 ','red'), '━━━━━━━━━─╝')
   
  
   expiredClaim();
 expiredMinar()
expiredAttp()
expiredEmoji()
expiredEve()
expiredDayli()
expiredPescar()
expiredRuleta()
//ban grupo
if(isBanGp) {
return
}
      // antiprivado
if(isAntipv && !isGroup && !isOwner){
sock.updateBlockStatus(sender, 'block')
}

// INICIO DE COMANDOS
//solo funciona si está activado el bot
// Si el grupo está en modo admin y el usuario no es admin ni owner, se bloquea su acceso
if (isModoAdmin && !isGroupAdmins && !isOwner) return;
if (!botActivo && !isOwner) return

switch(comando) {

//Comandos owner


  

  
  
  case 'menu':
case 'help': {
    if (!isReg) return enviar(respuesta.registro);

    const Mnu = Menu(timeFt, Bot, sender, groupName || 'Chat Privado', groupMembers);

    // Enviar imagen del menú completa
    await sock.sendMessage(from, {
        image: bannerImg,
        caption: Mnu,
        mentions: [sender]
    }, { quoted: info });
}
break;

case 'boton': 
case 'botonon':
case 'encenderbot':
  if (!isOwner) return enviar(respuesta.miowner)
  if (botActivo) return enviar('✅ O bot já está ligado.')
  guardarEstadoBot(true)
  enviar('🤖 O bot foi *ATIVADO* e voltará a responder aos comandos.')
break

case 'botoff':
case 'apagabot':
case 'offbot':
  if (!isOwner) return enviar(respuesta.miowner)
  if (!botActivo) return enviar('⚠️ O bot já estava desligado.')
  guardarEstadoBot(false)
  enviar('😴 O bot foi *DESATIVADO* e deixará de responder aos comandos.')
break


case 'antiprivado':
case 'antipv':{
if(!isOwner) return enviar(respuesta.miowner)
if(args[0]=== 'on' ){
if(isAntipv) return enviar('O anti-privado já está ativo')
Antipv.push('activo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('Anti-privado ativado com sucesso')
} else if(args[0] === 'off'){
if(!isAntipv) return enviar('O anti-privado já estava desativado')
Antipv.splice('desactivo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('Anti-privado desativado com sucesso')
} else {
enviar('on para ativar e off para desativar')
}
}
break 



case 'rvisu': case 'revelarvisu': case 'open':
    if(!isOwner) return enviar(respuesta.miowner)
    enviar('🥱')
    try{    
        if(JSON.stringify(info).includes("videoMessage")) {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
            var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
            viewVideo.viewOnce = false
            viewVideo.video = {url: viewVideo.url}
            viewVideo.caption += "O vídeo foi *Revelado*"
            sock.sendMessage(from, viewVideo)
        } else {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
            var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
            viewImage.viewOnce = false
            viewImage.image = {url: `${viewImage.url}`}
            viewImage.caption += "😼"
            sock.sendMessage(from, viewImage)
        }
    } catch(e){
        console.log(e)
        enviar(e)
    }
    break
    
case 'reiniciar': {
    if (!isOwner) return enviar(respuesta.miowner);

    enviar('𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾, 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙼 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 ');
    setTimeout(async () => {
        console.log("Reiniciando el bot...");
        process.exit(0);
    }, 1000);
}
break;


//información 

case 'infobot': case 'ping': {
if (!isGroup) return
let timestamp = speed()
let latensi = speed() - timestamp
uptime = process.uptime()
botinfo = `
╔═【 𝑰𝒏𝒇𝒐 𝒅𝒐 𝑩𝒐𝒕 】═╗
⏰  𝐇𝐎𝐑𝐀  »  ${time}
📅  𝐃𝐀𝐓𝐀 »  ${data}
🤖  𝐍𝐎𝐌𝐄 »  ${Bot}
🔰  𝐏𝐑𝐄𝐅𝐈𝐗𝐎 »  𝓜𝓾𝓵𝓽𝓲𝓹𝓻𝓮𝓯𝓲𝔁𝓸
⚡  𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄 »  ${latensi.toFixed(4)} seg
📲  𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎 »  ${deviceType}
⏳  𝐎𝐍𝐋𝐈𝐍𝐄 »  ${runtime(uptime)}
💾  𝐌𝐄𝐌Ó𝐑𝐈𝐀 »  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
👤  𝐔𝐒𝐔Á𝐑𝐈𝐎 »  ${pushname}
╚══❖═══════❖══╝
`
sock.sendMessage(from, { image: bannerImg, caption: botinfo }, { quoted: info })
}
break 

case 'botcompleto':
case 'bot':
enviar(`💫 𝙌𝙪𝙚𝙧 𝙪𝙢 𝙗𝙤𝙩 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 𝙘𝙤𝙢 𝙨𝙪𝙥𝙚𝙧 𝙁𝙪𝙣𝙘̧𝙤̃𝙚𝙨? 🤖

*[💡]  ᴏɴʟɪɴᴇ 24/7*
*[💡]  sᴏᴘᴏʀᴛᴇ 100% ᴅɪsᴘᴏɴɪʙʟᴇ*
*[💡]  ᴏʀɢᴀɴɪᴄᴇ sᴜ ɢʀᴜᴘᴏ*
*[💡]  ᴀᴅᴍɪɴɪsᴛʀᴇ sᴜ ɢʀᴜᴘᴏ*
*[💡]  ᴘʀᴏᴛᴇᴊᴀ sᴜ ɢʀᴜᴘᴏ*
*[💡]  ᴠᴇᴜʟᴠᴀ sᴜ ɢʀᴜᴘᴏ ᴍᴀs ᴀᴄᴛɪᴠᴏ*

  𝙋𝙍𝙀𝘾𝙄𝙊𝙎 𝙋𝘼𝙍𝘼 𝙀𝙇 𝘼𝙇𝙌𝙐𝙄𝙇𝙀𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏

*┠💵⃟ꦿ〢* ᴘʟᴀɴ ǫᴜɪɴᴄᴇɴᴀʟ (15 dias): USD$ 1,50
    
*┠💵⃟ꦿ〢* ᴘʟᴀɴ ᴍᴇɴsᴜᴀʟ (30 dias): USD$ 2,90 ⭐(ᴍᴀs ᴘᴏᴘᴜʟᴀʀ)

*┠💵⃟ꦿ〢* ᴘʟᴀɴ sᴇᴍᴇsᴛʀᴀʟ (180 dias): USD$ 13,90

*┠💵⃟ꦿ〢* ᴘʟᴀɴ ᴀɴᴜᴀʟ (360 dias): USD$ 28,90

*┠💵⃟ꦿ〢* ʙᴏᴛ ᴘᴇʀᴢᴏɴᴀʟɪᴢᴀᴅᴏ (30 dias): USD$ 5,90 ⭐(ᴘᴏᴘᴜʟᴀʀ)


╚═════❖•ೋ° 🌟 °ೋ•❖═════╝

*__________🔒 𝙋𝙍𝙊𝙏𝙀𝘾𝘾𝙄𝙊𝙉𝙀𝙎 🔒__________*

*[🔐] ANTI-LINK*
*[🔐] ANTI-FAKE*
*[🔐] ANTI-CONTACTO*
*[🔐] ANTI-LOCALIZACION*
*[🔐] ANTI-DOCUMENTO*
*[🔐] ANTI-VIDEO*
*[🔐] ANTI-IMAGEN*
*[🔐] ANTI-AUDIO*
*[🔐] ANTI-VIEWONCE*

*_________🔧 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎 🔧__________*
*[🛠️] ᴄʀᴇᴀʀ sᴛɪᴄᴋᴇʀs*
*[🛠️] ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴜsɪᴄᴀs*
*[🛠️] ᴅᴇsᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏs*
*[🛠️] ᴀʙʀɪʀ ʏ ᴄᴇʀʀᴀʀ ɢʀᴜᴘᴏ ᴄᴏɴ ᴛɪᴇᴍᴘᴏ*
*[🛠️] ʙᴀɴ ʏ ᴋɪᴄᴋ*
*[🛠️] ᴊᴜᴇɢᴏs*
*[🛠️] ᴄᴏᴍᴀɴᴅᴏs +🔞*


*_________👑 𝘾𝙊𝙉𝙏𝙍𝘼𝙏𝙀 👑__________*
[🔥] *Puedes contratar el bot directamente desde nuestra pagina web oficial*👇
[💬] https://naufrabot.com/`);
break

case 'grupos':
case 'grupo':
enviar(`🧩 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙐𝙈 𝘽𝙊𝙏 𝘼𝙏𝙄𝙑𝙊 24/7 👇

➫https://chat.whatsapp.com/Jd7WKQBsAhkCG4k1SPxK7r?mode=ac_t`);
break

case 'serdueño':
case 'sercreador':
case 'owner':
case 'serowner':
enviar(`☠️ *𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐎𝐖𝐍𝐄𝐑* 🕸️\nUse *!botcompleto* para ver todos os comandos exclusivos do dono.`);
break

case 'canal':
case 'canales':
enviar(`𝘾𝙖𝙣𝙖𝙞𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙞𝙨 𝙥𝙖𝙧𝙖 𝙧𝙚𝙘𝙚𝙗𝙚𝙧:
🌐𝙉𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 
🌐𝙎𝙤𝙧𝙩𝙚𝙤𝙨
🌐𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 
🌐𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙨𝙤𝙗𝙧𝙚 𝙚𝙡 𝙗𝙤𝙩

*➫ Sitio web*
https://naufrabot.com/

*➫ Instagram*
https://www.instagram.com/naufrabot_official?igsh=cXFwemd0b213dWl1

*➫ Tik tok*
https://www.tiktok.com/@naufra.zapp?_t=8lMjEw7d9SX&_r=1

*➫ WhatsApp*
https://whatsapp.com/channel/0029Vaz3WoQ6RGJPJQcMXQ14
`)
break




case 'serbot':
    try {
        const moneybot = `𝗔𝗰𝗵𝗼𝘂 𝗾𝘂𝗲 𝗶𝗿𝗶𝗮 𝗴𝗲𝗿𝗮𝗿 𝗼 𝗖𝗼́𝗱𝗶𝗴𝗼 𝗤𝗥? 😂

𝗜𝗻𝗳𝗲𝗹𝗶𝘇𝗺𝗲𝗻𝘁𝗲, *𝗻𝗲𝘀𝘁𝗲 𝗯𝗼𝘁 𝘃𝗼𝗰𝗲̂ 𝗻𝗮̃𝗼 𝗽𝗼𝗱𝗲 𝘀𝗲𝗿 𝘀𝘂𝗯 𝗯𝗼𝘁* 𝗽𝗼𝗿𝗾𝘂𝗲 𝗶𝘀𝘀𝗼 𝗰𝗼𝗺𝗽𝗿𝗼𝗺𝗲𝘁𝗲 𝗼𝘀 𝗿𝗲𝗰𝘂𝗿𝘀𝗼𝘀 𝗱𝗼 𝘀𝗲𝗿𝘃𝗶𝗱𝗼𝗿 𝗲 𝗼 𝗱𝗲𝗶𝘅𝗮 𝗺𝗮𝗶𝘀 𝗹𝗲𝗻𝘁𝗼.  
𝗦𝗲 𝗿𝗲𝗮𝗹𝗺𝗲𝗻𝘁𝗲 𝗾𝘂𝗶𝘀𝗲𝗿 𝘀𝗲𝗿 𝘀𝘂𝗯 𝗯𝗼𝘁, 𝗽𝗼𝗱𝗲 𝗼𝗯𝘁𝗲𝗿 𝗺𝗮𝗶𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰̧𝗼̃𝗲𝘀 𝗲𝗺 𝗻𝗼𝘀𝘀𝗼 𝘀𝗶𝘁𝗲:  
🔗 https://naufrabot.com/subbots/`;

        // Enviar el mensaje final
        await enviar(moneybot);

    } catch (e) {
        console.error(e);
        enviar("Erro ao processar o comando.");
    }
break;


//AJUSTES DEL GRUPO

case 'welcome' : 
case 'bienvenida' :
if (!isGroup) return 
if(args.length<1) return enviar('「 𝟏 𝐏𝐚𝐫𝐚 𝐀𝐭𝐢𝐯𝐚𝐫 𝐞 𝟎 𝐏𝐚𝐫𝐚 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 」 ')
if(!isGroupAdmins) return enviar(respuesta.admin)
if(!isBotGroupAdmins) return enviar('O bot precisa ser administrador') 
if(Number(args[0])=== 1) {
if(iswelkom) return enviar('「 ✅ 𝐀 𝐁𝐨𝐚𝐬-𝐕𝐢𝐧𝐝𝐚𝐬 𝐉𝐚́ 𝐄𝐬𝐭𝐚́ 𝐀𝐭𝐢𝐯𝐚𝐝𝐚 𝐧𝐨 𝐆𝐫𝐮𝐩𝐨 」 ')
welkom.push(from)
fs.writeFileSync('./settings/Grupo/Json/welkom.json',JSON.stringify(welkom))
enviar('「 ✅ 𝐀𝐭𝐢𝐯𝐚𝐝𝐨 𝐜𝐨𝐦 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 」')
} else if (Number(args[0])=== 0 ) {
if (!iswelkom) return enviar('「 ❌ 𝐀 𝐛𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬 𝐧𝐚̃𝐨 𝐞𝐬𝐭𝐚́ 𝐚𝐭𝐢𝐯𝐚𝐝𝐚」')
welkom.splice(from,1)
fs.writeFileSync('./settings/Grupo/Json/welkom.json',JSON.stringify(welkom))
enviar('❌ 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐝𝐨 𝐜𝐨𝐦 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 ')
} else {
enviar('「 𝟏 𝐏𝐚𝐫𝐚 𝐀𝐭𝐢𝐯𝐚𝐫 𝐞 𝟎 𝐏𝐚𝐫𝐚 𝐃𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 」')
}
break


case 'bangp':{
  if (!isGroup) return  
  if(!isOwner) return enviar(respuesta.miowner)
  if(!isBanGp) { // antes estaba al revés
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp.push(from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ GRUPO BANIDO COM SUCESSO')
  } else {
    enviar('⚠️ O GRUPO JÁ ESTÁ BANIDO')
  }
}
break

case 'unbangp':{
  if (!isGroup) return  
  if(!isOwner) return enviar(respuesta.miowner)
  if(isBanGp) { // antes também estava ao contrário
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp = bngp.filter(g => g !== from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ GRUPO DESBANIDO COM SUCESSO')
  } else {
    enviar('⚠️ O GRUPO JÁ ESTÁ DESBANIDO')
  }
}
break



case 'todos':
case 'revivir':
  if(!isReg) return enviar(respuesta.registro)
if(!isGroup) return enviar('Sério mesmo usar isso em chat privado?')
if(!isGroupAdmins) return enviar(respuesta.admin) 
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `𝐓𝐎𝐓𝐀𝐋 : ${groupMembers.length}\n`
nu = 0
for (let mem of groupMembers) {
nu += 1
teks += ` ➫[${nu.toString()}] @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(`
🗣️💬 ❝𝑪𝒉𝒂𝒎𝒂𝒅𝒂 𝒑𝒂𝒓𝒂 𝒕𝒐𝒅𝒐 𝒐 𝑴𝒖𝒏𝒅𝒐!❞ \n\n➫ ${teks}
`, members_id, true)
break


case 'anuncio':{
if(!isGroup) return enviar('Sério mesmo usar isso em chat privado?')
if(!isGroupAdmins) return enviar(respuesta.admin) 
men = []
num = 0
teks = `
🗣💬 ❝𝑨𝒕𝒆𝒏𝒄̧𝒂̃𝒐 𝒂 𝒆𝒔𝒕𝒆 𝑨𝒏𝒖́𝒏𝒄𝒊𝒐.❞
 👉 ❝ ${q} ❞ 👈 
\n`
for(let m of groupMembers){
num +=1 
teks += `• [${num.toString()}] @${m.id.split('@')[0]}\n`
men.push(m.id)
}
mentions(teks,men,true)
}
break 


case 'modoadmin': {
  if (!isGroup) return enviar("⚠️ Este comando só pode ser usado em grupos.");
  if (!isGroupAdmins) return enviar("🚫 Somente administradores podem alterar este modo.");
  
  const JsonModoAdmin = './settings/Grupo/Json/modo_admin.json';
  let modoAdmin = JSON.parse(fs.readFileSync(JsonModoAdmin));

  const estado = args[0]; // pode ser "1" ou "0"

  if (!estado) return enviar("🧩 Use o comando corretamente:\n\n*modoadmin 1* → Ativar modo admin\n*modoadmin 0* → Desativar modo admin");

  if (estado === "1") {
    if (!modoAdmin.includes(from)) {
      modoAdmin.push(from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar("✅ *Modo admin ativado* — Agora apenas os administradores podem usar o bot neste grupo.");
    } else {
      enviar("⚠️ O modo admin já estava ativado neste grupo.");
    }
  } 
  
  else if (estado === "0") {
    if (modoAdmin.includes(from)) {
      modoAdmin = modoAdmin.filter(g => g !== from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar("🟢 *Modo admin desativado* — Todos os membros podem usar o bot novamente.");
    } else {
      enviar("⚠️ O modo admin já estava desativado neste grupo.");
    }
  } 
  
  else {
    enviar("❌ Use apenas *1* para ativar ou *0* para desativar.");
  }
}
break;



case 'hidetag' :
case 'notify' :
  if(!isReg) return enviar(respuesta.registro)
  if(!isGroupAdmins) return enviar(respuesta.admin)
if(!q) return enviar('Digite um texto — exemplo: !notify olá pessoal 🔥')
if(!isGroup) return enviartexto ('Sério? hidetag em chat privado?')
if(!isGroupAdmins) return enviartexto ("O bot precisa ser administrador")
                        var group = await sock.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var optionshidetag = {
                        text : q,
                        contextInfo: { mentionedJid: mem },
                        quoted: m
                        }
                        sock.sendMessage(from, optionshidetag)
                        break


case 'kick' :
case 'ban' :
case 'largate' :{
if (!isGroup) return  
if(!isGroupAdmins) return enviar(respuesta.admin)
if(!isBotGroupAdmins) return enviar (respuesta.botadmin)
let mentioned = obtenerMencionado(info);

    if (!mentioned) return enviar("⚠️ Você precisa mencionar alguém para usar este comando.");

if(mentioned === BotNumber || mentioned === owner) return enviar('🤨')
await sock.groupParticipantsUpdate(from, [mentioned] , 'remove')
enviar('Ação realizada com sucesso')
}
break 
     



// ⚙️ Comando para activar/desactivar antilink
case 'antilink':
  if (!isGroupAdmins) return enviar(respuesta.admin)
  if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
  if (args.length < 1) return enviar(`𝐃𝐈𝐆𝐈𝐓𝐄 𝟏 𝐏𝐀𝐑𝐀 𝐀𝐓𝐈𝐕𝐀𝐑 𝐄 𝟎 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑`)

  if (Number(args[0]) === 1) {
    if (isAntiLink) return enviar('✅ O antilink já está ativado neste grupo')
    antilink.push(from)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar('✅ ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐀𝐓𝐈𝐕𝐀𝐃𝐎 ● ️')
  } 
  else if (Number(args[0]) === 0) {
    if (!isAntiLink) return enviar('❌ O antilink já está desativado neste grupo')
    const index = antilink.indexOf(from)
    antilink.splice(index, 1)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar('❌ ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐃𝐎 ● ️')
  } 
  else {
    enviar(`𝐃𝐈𝐆𝐈𝐓𝐄 𝟏 𝐏𝐀𝐑𝐀 𝐀𝐓𝐈𝐕𝐀𝐑 𝐄 𝟎 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑`)
  }
break;





// STICKERS 
case 's':
case 'sticker':
  if(!isReg) return enviar(respuesta.registro)
  if(coins < 1) return enviar(respuesta.coins)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
enviar(`🕷️ Criando o seu sticker, aguarde um momento 💀`)
var pack = `☠️ Knowxly ☠️
🕷️ Criado por:
💀 ${pushname}`
var author2 = `🕸️ Bot 🕸️
🦴 Knowxly
☠️ ${groupName || 'Chat Privado'}`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
await addXp(sender,1)
await delkoin(sender,1)
} else if(boij && boij.seconds < 11){
enviar(`🕷️ Criando o seu Sticker ${pushname} 💀`)
var pack = `☠️ Knowxly ☠️
🕷️ Criado por:
💀 ${pushname}`
var author2 = `🕸️ Bot 🕸️
🦴 Knowxly
☠️ ${groupName || 'Chat Privado'}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
await addXp(sender,1)
await delkoin(sender,1)
} else {
return enviar(`Marque uma imagem ou \nUm vídeo de no máximo 10 segundos ⏲️`)
}
break

///Nesecitas clave API//
case 'attp': 
case 'attp2': 
case 'attp3': 
try {
    if (!q.trim()) return enviar(`*_❕Escreva o texto que quiser!_*\n- *🧑‍🏫 Por exemplo:* !attp te amo`);
    enviar('💀 *Convertendo...* 🕷️');

    var Fontes = commandArgs === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono";

    // Descargar el sticker como buffer
    let axios = require("axios");
    let res = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_NAUFRA}`, {
        responseType: 'arraybuffer'
    });

    // Enviar el sticker desde el buffer
    await sock.sendMessage(from, { sticker: res.data }, { quoted: info });

} catch (e) {
    console.error(e);
    return enviar("Error..");
}
break;



                
                
                case 'emojimix': {
    if (!isReg) return enviar(respuesta.registro);
    if (coins < 1) return enviar(respuesta.coins);

    if (!q) return enviar(`
🔁𝑪𝒐𝒎𝒃𝒊𝒏𝒆 𝒆𝒎𝒐𝒋𝒊𝒔 𝒆 𝒅𝒆𝒔𝒄𝒖𝒃𝒓𝒂 𝒏𝒐𝒗𝒂𝒔 𝒄𝒓𝒊𝒂𝒄̧𝒐̃𝒆𝒔‼️
☑️𝑬𝒔𝒄𝒓𝒆𝒗𝒂 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒂𝒔𝒔𝒊𝒎:
👉 *!emojimix 😊+😂*`);

    enviar('`🔁 𝑴𝒊𝒔𝒕𝒖𝒓𝒂𝒏𝒅𝒐...`');

    try {
        let [emoji1, emoji2] = q.split`+`;
        var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&
            contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
        
        for (let res of em.results) {
            let templateMessage = {
                image: { url: `${res.url}`, quoted: info }
            };
            sock.sendMessage(from, templateMessage, { quoted: info });

            // Reducir 1 moneda y agregar 1 de experiencia
            await delkoin(sender, 1);
            await addXp(sender, 1);
        }
        
    } catch (err) {
        enviar('❌ Ocorreu um erro, tente com outros emojis.');
        console.log(err);
    }
}
break;


///////////////////HERRAMIENTAS///////////

case 'amp3':
case 'tomp3':
  if(!isReg) return enviar(respuesta.registro)
if(!isQuotedVideo) return enviar (`[❗] ${sender.split('@')[0]}, Marque um vídeo `)
enviar('💀 *Criando...* 🕸️')
tomp = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage , 'video')
        sock.sendMessage(from,{audio :  tomp, mimetype: 'audio/mpeg'},{ quoted: info })         
                await addXp(sender,6)
                await delkoin(sender,3)
                                break 
                                
                
  case 'toimg':
  if(!isReg) return enviar(respuesta.registro)
if(!isQuotedSticker) return enviar('[❗]• 𝗠𝗔𝗥𝗤𝗨𝗘 𝗨𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 •')
try {
enviar('💀 *Convertendo sticker...* 🕸️')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sock.sendMessage(from, {image: buff , caption : ` [❗] *${pushname}*, aqui está o seu pedido `},{quoted : info }).catch(e => {
console.log(e);
enviar('Não foi possível converter para imagem, verifique se é um sticker e não um gif ❌')
})
await addXp(sender,3)
await delkoin(sender,2)
} catch {
enviar('ocorreu um erro ')
}
break


case 'calcular':
  case 'cal' :
          if (!isReg) return enviar(respuesta.registro)
          if(args.length == 0) return enviar( ` ┣「 𝗢𝗣𝗘𝗥𝗔𝗖̧𝗢̃𝗘𝗦 」┫\n╭──────────────────\n│➫┇+ 𝐒𝐨𝐦𝐚\n│➫┇- 𝐒𝐮𝐛𝐭𝐫𝐚𝐜̧𝐚̃𝐨\n│➫┇/ 𝐃𝐢𝐯𝐢𝐬𝐚̃𝐨\n│➫┇* 𝐌𝐮𝐥𝐭𝐢𝐩𝐥𝐢𝐜𝐚𝐜̧𝐚̃𝐨\n│➫ 𝔼𝕩𝕖𝕞𝕡𝕝𝕠 : 𝐂𝐚𝐥 𝟒+𝟒\n╰──────────────────`)
            const resultzx = eval(q)
            await sleep(1000)
            enviar(`\n╭──────────────────\n││「 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 」│\n│➫┇${q} = *${resultzx}*\n╰──────────────────`)
            break
            
//Nesecita clave API ////
case 'nik': case 'nic':
case 'generarnick': case 'nick':

try {
if(!q.trim()) return enviar(`Escreva o seu nome para ver em letras especiais, Exemplo: !nick Knowxly`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=${encodeURI(q)}&apikey=${API_KEY_NAUFRA}`)
AB = `*🗒️Lista baseada no seu nome,* Escolha a melhor fonte que deseja usar:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
enviar(AB);
} catch (e) {
return enviar("Error..");
}
break;


//pollinations.ai - gratuito, sem chave
case 'ia': case 'openai': case 'gpt': case 'chatgpt':
try {
  if (!q || !q.trim()) return enviar(`Escreva a sua pergunta. Exemplo: !ia Qual é a capital da França?`);
  
  enviar("*💀 BUSCANDO... 🕸️*");

  const iaRes = await fetch(`https://text.pollinations.ai/${encodeURIComponent(q.trim())}`);
  const iaText = await iaRes.text();

  if (!iaText || iaText.trim().length === 0) return enviar("Não obtive resposta. Tente reformular a pergunta.");

  enviar(iaText.trim());
} catch (err) { 
  console.error(err);
  enviar("Erro ao consultar a IA. Tente novamente.");
}
break;


//Economía niveles y experiencia 

case 'perfil' : case 'cartera' :
case 'nivel' : case 'minivel' :{
if(!isReg) return enviar(respuesta.registro)
var saldo = MoneyOfSender(sender)
const Xp = xpOfsender(sender)
const Mnv = levelOfsender(sender)
const Rxxp = Rxp(sender)
const myrep2 = repUser(sender)
const Xpnull = Rxxp - 1000
if(Xp === null) return addXp(sender,Xpnull)
const Mp = `
╔══💀🕸️══【 𝑺𝒆𝒖 𝑷𝒆𝒓𝒇𝒊𝒍 】══🕸️💀══╗
🕷️  𝐍𝐨𝐦𝐞        »  @${sender.split('@')[0]}
💀  𝐑𝐚𝐧𝐤         »  ${Mlevel}
☠️  𝐑𝐞𝐩𝐮𝐭𝐚𝐜̧𝐚̃𝐨  »  ${myrep2}
🦴  𝐃𝐢𝐧𝐡𝐞𝐢𝐫𝐨   »  R$${saldo} 𝐑𝐞𝐚𝐢𝐬
🌑  𝐍𝐢́𝐯𝐞𝐥        »  ${Mnv} ➜ ${Mnv + 1}
🕸️  𝐄𝐗𝐏          »  ${Xp} / ${Rxxp + 1000}
╚══💀🕸️══【 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬𝐨 】══🕸️💀══╝
▰▰ ${Mrxp} ▰▰
`
   sock.sendMessage(from,{text : Mp, mentions : [sender]},{quoted : info})        
  
}
break 

//comando tragamonedas 
case 'tragamonedas':
case 'tragamoneda':
if (!isReg) return enviar("Você precisa se registrar para jogar.");
const apuestas = 1; // Custo por jogo
if (coins < apuestas) return enviar("Você não tem Coins 🪙 suficientes para jogar.");

const ahora = Date.now();
const tiempoGuardado = timeClaimTraga(sender) || 0;
const tiempoRestante = tiempoGuardado - ahora;

if (tiempoRestante > 0) {
    return await enviar(`[❗] 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 ${runtime(tiempoRestante / 1000)} para jogar novamente.`);
} else {
    const espera = 8 * 60 * 60 * 1000; // 8 horas
    await addClaimTraga(sender, espera);
}


// Restar una moneda por jugar
await delkoin(sender, apuestas);

// Lista de símbolos para la tragamonedas
const simbolos = ['🥕', '🐰', '🐸', '🦊', '🐱', '🍋', '🔔', '🍒', '🍉', '🍌'];

// Generar filas aleatorias
const obtenerFila = () => [
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)]
];

// Generar las tres filas
const filaArriba = obtenerFila();
const filaAbajo = obtenerFila();

let filaCentro;
const probabilidad = Math.random(); // Número entre 0 y 1

// 60% de probabilidad de que los tres símbolos del centro sean iguales
if (probabilidad < 0.6) {
    const simboloGanador = simbolos[Math.floor(Math.random() * simbolos.length)];
    filaCentro = [simboloGanador, simboloGanador, simboloGanador]; // Hacer que las 3 sean iguales
} else {
    filaCentro = obtenerFila(); // Si no, generar aleatoriamente
}

// Verificar si el usuario ganó
const esGanador = filaCentro[0] === filaCentro[1] && filaCentro[1] === filaCentro[2];

let resultadoMensaje = "😢 Has perdido... Inténtalo de nuevo dentro de 8 horas.";
let premioTexto = "";

// Si gana, recibe aleatoriamente Coins o EXP entre 5 y 10
if (esGanador) {
    const premioCantidad = Math.floor(Math.random() * 6) + 5; // Número aleatorio entre 5 y 10
    const tipoPremio = Math.random() < 0.5 ? 'coins' : 'exp'; // 50% de probabilidad para cada tipo

    if (tipoPremio === 'coins') {
        await addkoin(sender, premioCantidad);
        premioTexto = `🎉 Você recebeu ${premioCantidad} Coins 🪙.`;
    } else {
        await addXp(sender, premioCantidad);
        premioTexto = `📚 Você recebeu ${premioCantidad} de EXP.`;
    }

    resultadoMensaje = "🎉 Você ganhou! 🎉";
}

// Construcción del mensaje de respuesta
const mensajeCasino = `
         *༻  𝙏𝙍𝘼𝙂𝘼𝙈𝙊𝙉𝙀𝘿𝘼𝙎 ༺*
            ┏━━━━┛🎰┗━━━━┓
             ||   【${filaArriba[0]}】【${filaArriba[1]}】【${filaArriba[2]}】   ||
           ◢◞───────────◟◣
        █ ||   【${filaCentro[0]}】【${filaCentro[1]}】【${filaCentro[2]}】   || █
           ◥◝───────────◜◤
             ||   【${filaAbajo[0]}】【${filaAbajo[1]}】【${filaAbajo[2]}】   ||
            ┗━━━━┓🎰┏━━━━┛
   🪙◆━━━━━━━▣✦▣━━━━━━━━◆🪙
Você gastou ${apuestas} Coin 🪙.
${resultadoMensaje}
${premioTexto}
`;

// Enviar el mensaje después de 3 segundos
setTimeout(() => {
    enviar(mensajeCasino);
}, 3000);

break;



case"dayli": case "daily":
if(!isGroup) return
if(!isReg) return 
const dayli = checkDayli(sender)
if(dayli) {
const ahora = Date.now()
const time = timeDayli(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return sock.sendMessage(from,{text : `Aguarde ${runtime(resultado)} para a sua nova recompensa`},{quoted : info})
} else {
const time = 24* 60* 60* 1000
await addDayli(sender,time)
const montoExperiencia = 5
const monto = 1
enviar(`
⏳🪙 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 𝐃𝐈𝐀́𝐑𝐈𝐀 🪙⏳

𝒀𝒐𝒄𝒆̂ 𝒈𝒂𝒏𝒉𝒐𝒖 ${monto} 𝑪𝒐𝒊𝒏𝒔 𝒆 ${montoExperiencia} 𝒅𝒆 𝑬𝒙𝒑𝒆𝒓𝒊𝒆̂𝒏𝒄𝒊𝒂.
`)
await addkoin(sender,monto)
await addXp(sender,montoExperiencia)
}
break

 

case 'reg': case 'registrarme': case 'registrame': case 'rg':
    if (isReg) return enviar(respuesta.yaregistro)
    const nombre = pushname
    await AddReg(sender, nombre)
    sock.sendMessage(from, {
        image: bannerImg,
        caption: `☠️━━━━━━━━━━━━━━━━━━☠️
         💀 *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎* 💀
🕷️ 𝐶𝑎𝑑𝑎𝑠𝑡𝑟𝑜 𝑐𝑜𝑛𝑐𝑙𝑢í𝑑𝑜 *${nombre}* 🕸️
💀 𝑽𝒐𝒄𝒆̂ 𝒓𝒆𝒄𝒆𝒃𝒆𝒖 *R$50 Reais* 💀 𝒄𝒐𝒎𝒐 𝑩𝒐̂𝒏𝒖𝒔 𝒅𝒆 𝑩𝒐𝒂𝒔-𝑽𝒊𝒏𝒅𝒂𝒔.
☠️━━━━━━━━━━━━━━━━━━☠️`
    }, { quoted: info })
    break


case 'levelup': {
const XpR = xpOfsender(sender)
const Rxxp = Rxp(sender)
if(XpR >= Rxxp + 1000) {
await addLevel(sender , 1)
sleep(100)
await addkoin(sender,10)
sleep(100)
await addXp(sender,100)
sleep(100)
await addRxp(sender,1000)
const Mup = ` 
☠️━━━ 𝐒𝐔𝐁𝐈𝐔 𝐃𝐄 𝐍𝐈́𝐕𝐄𝐋 ━━━☠️
💀 @${sender.split('@')[0]}
🕷️ 𝑷𝒂𝒓𝒂𝒃𝒆́𝒏𝒔! 𝒗𝒐𝒄𝒆̂ 𝒅𝒆𝒔𝒃𝒍𝒐𝒒𝒖𝒆𝒐𝒖 𝒖𝒎 𝒏𝒐𝒗𝒐 𝒓𝒂𝒏𝒌! 💀
`
sock.sendMessage(from,{text : Mup , mentions : [sender]},{quoted : info})
} else {
enviar(`
💀 𝑬𝒙𝒑𝒆𝒓𝒊𝒆̂𝒏𝒄𝒊𝒂 𝒊𝒏𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆. ${pushname} 𝒗𝒐𝒄𝒆̂ 𝒑𝒓𝒆𝒄𝒊𝒔𝒂 𝒕𝒓𝒆𝒊𝒏𝒂𝒓 𝒎𝒂𝒊𝒔. 🕸️
`)
}
}
break




case 'minar' : {
if(!isReg) return enviar(respuesta.registro)
if(!isGroup) return enviar(respuesta.grupos)
const isMin = checkMinar(sender)
if(isMin) {
const ahora = Date.now()
const time = timeMinar(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`𝑴𝒊𝒏𝒆𝒓𝒂𝒏𝒅𝒐... ${runtime(resultado)} `)
} else {
const time = 24* 60* 60* 1000
await addMinar(sender,time)
const numbeR = [5, 6, 7, 8, 9, 10];
const randomIndex = Math.floor(Math.random() * numbeR.length);
const monto = numbeR[randomIndex];
enviar(`
💀━━━ 𝐌𝐈𝐍𝐄𝐑𝐀𝐍𝐃𝐎... ━━━💀
🕸️ Você descobriu ouro e obteve *R$${monto} Reais* 🦴
🕷️ ❝ ⛏ 𝑮𝒓𝒆̂𝒎𝒊𝒐 𝒅𝒆 𝑴𝒊𝒏𝒆𝒊𝒓𝒐𝒔 — 𝒔𝒂𝒍𝒂́𝒓𝒊𝒐 𝒎í𝒏𝒊𝒎𝒐 𝒅𝒆 *R$5 Reais* 💀.❞

⏳ 𝑽𝒐𝒍𝒕𝒆 𝒆𝒎 24 𝒉𝒐𝒓𝒂𝒔.
`)
await addkoin(sender,monto)
}
}
break 


    case "ruleta": {
if (!q) return enviar(`Indique um valor para apostar, exemplo .ruleta 4`);
if (!isReg) return enviar(respuesta.registro)
const montto = q
const monto = (montto * 1) / 1
if (isNaN(monto)) return enviar(`Indique um valor válido em coins`);
if (monto > MoneyOfSender(sender)) return enviar(`Você não tem dinheiro suficiente`);
if (monto > 5) return enviar('💀 A aposta não deve ser maior que R$5 Reais.');
const isMinxxx = checkRuleta(sender)
if(isMinxxx) {
const ahora = Date.now()
const time = timeRuleta(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`⏳ 💀 Aguarde... ${runtime(resultado)}`)
} else {
const time = 24* 60* 60* 1000
await addRuleta(sender,time)
const ppt = ["muere", "vive"]; // Posibilidades
const pptb = ppt[Math.floor(Math.random() * ppt.length)];  // Elección aleatoria del sistema
let vit;

// Modo Duelo Letal
if (pptb === "muere") {
    vit = `💭「𝙍𝙖𝙯𝙚𝙧, 𝙤 𝙎𝙚𝙢 𝙈𝙚𝙙𝙤 🐺 𝙖𝙥𝙤𝙣𝙩𝙖 𝙥𝙖𝙧𝙖 𝙖 𝙘𝙖𝙗𝙚𝙘̧𝙖 𝙙𝙚 ${pushname} 😨🔫」
💭「𝙍𝙖𝙯𝙚𝙧 🐺 𝙖𝙢𝙖𝙧𝙩𝙚𝙡𝙖 𝙤 𝙜𝙖𝙩𝙞𝙡𝙝𝙤... 💥 𝘽𝙊𝙊𝙈!」
💭「${pushname} 𝙘𝙖𝙞𝙪 𝙚 𝙥𝙚𝙧𝙙𝙚𝙪 R$${monto} Reais 💀」`;
    await delkoin(sender, monto);
    // O jogador perde
} else if (pptb === "vive") {
    vit = `💭「𝙍𝙖𝙯𝙚𝙧, 𝙤 𝙎𝙚𝙢 𝙈𝙚𝙙𝙤 🐺 𝙖𝙥𝙤𝙣𝙩𝙖 𝙥𝙖𝙧𝙖 𝙖 𝙘𝙖𝙗𝙚𝙘̧𝙖 𝙙𝙚 ${pushname} 😨🔫」
💭「𝙍𝙖𝙯𝙚𝙧 🐺 𝙖𝙢𝙖𝙧𝙩𝙚𝙡𝙖 𝙤 𝙜𝙖𝙩𝙞𝙡𝙝𝙤... 💥 𝘽𝙊𝙊𝙈!」
💭「𝙀́ 𝙪𝙢𝙖 𝙗𝙧𝙞𝙣𝙘𝙖𝙙𝙚𝙞𝙧𝙖, ${pushname} 𝙨𝙤𝙗𝙧𝙚𝙫𝙞𝙫𝙚 𝙚 𝙜𝙖𝙣𝙝𝙖 R$${monto} Reais 💀」`;
    await addkoin(sender, monto);
    // O jogador ganha
}

const datatt = `
╭━━━╾💀🕸️  🕸️💀╼━━━╮
         ☠️ 𝙍𝙐𝙇𝙀𝙏𝘼 𝙍𝙐𝙎𝘼 ☠️
${vit}
⌛ 𝙑𝙤𝙡𝙩𝙚 𝙚𝙢 24 𝙝𝙤𝙧𝙖𝙨...
╰━━━╾💀🕸️ ☠️ 🕸️💀╼━━━╯
`;


enviar(datatt);
}
}
        break




case "pescar": {
if (q) return enviar(`não coloque nenhuma palavra, apenas /pescar`);
if (!isReg) return enviar(respuesta.registro)
const isMinxxx = checkPescar(sender)
if(isMinxxx) {
const ahora = Date.now()
const time = timePescar(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`⏳ 💀 Aguarde... ${runtime(resultado)}`)
} else {
const time = 8 * 60 * 60 * 1000;
await addPescar(sender,time)
const ppt = ["delfin", "pulpo","pez","pez2","pez3","zapato"]; // Posibilidades
const pptb = ppt[Math.floor(Math.random() * ppt.length)];  // Elección aleatoria del sistema
let vit;

// Cazador Marino
if (pptb === "delfin") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🦈 𝙚 𝙖𝙤 𝙫𝙚𝙣𝙙𝙚̂-𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙜𝙖𝙣𝙝𝙖 20 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addXp(sender, 20);
    // O jogador ganha
} else if (pptb === "pulpo") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🐙 𝙚 𝙧𝙚𝙘𝙚𝙗𝙚 R$8 Reais 💀」`;
    await addkoin(sender, 8);
} else if (pptb === "pez") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🐠 𝙚 𝙧𝙚𝙘𝙚𝙗𝙚 R$4 Reais 💀 𝙚 5 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 4);
    await addXp(sender, 5);
} else if (pptb === "pez2") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🐟 𝙚 𝙧𝙚𝙘𝙚𝙗𝙚 R$3 Reais 💀 𝙚 3 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 3);
    await addXp(sender, 3);
} else if (pptb === "pez3") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🐡 𝙚 𝙧𝙚𝙘𝙚𝙗𝙚 R$1 Reais 💀 𝙚 2 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 1);
    await addXp(sender, 2);
} else if (pptb === "zapato") {
    vit = `💭「𝙑𝙤𝙘𝙚̂ 𝙥𝙚𝙨𝙘𝙤𝙪 𝙪𝙢 🥾 𝙚 𝙖𝙤 𝙩𝙚𝙣𝙩𝙖𝙧 𝙫𝙚𝙣𝙙𝙚̂-𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯, 𝙚𝙡𝙚 𝙧𝙞 🤣 𝙙𝙚 𝙫𝙤𝙘𝙚̂ 🥲」`;
}

const datatt = `
╔════ 💀🕸️.   🕸️💀 ════╗
         🕷️ 𝙋𝙀𝙎𝘾𝘼 𝙉𝙊 𝙈𝘼𝙍 🕷️
${vit}
⌛ 𝙑𝙤𝙡𝙩𝙚 𝙚𝙢 8 𝙝𝙤𝙧𝙖𝙨...
╚════ 💀🕸️ ☠️ 🕸️💀 ════╝
`;


enviar(datatt);
}
}
        break







case 'listreg' : {
R_ = []
teks = '*REGISTRADOS* 😼\n'
for(let R of registro){
teks += `• @${R.id.split('@')[0]}\n`
R_.push(R.id)
}
teks += '• ' + registro.length
mentions(teks,R_,true)
}
break 




case 'regalar':
case 'tradecoin':
case 'tradecoins':
case 'enviarcoins':
case 'enviar': {
  if (!isGroup) return enviar("⚠️ Este comando só funciona em grupos.");

  (async () => {
    try {
      const mencionado = obtenerMencionado(info); // destinatário
      const emisor = sender; // quem envia as moedas
      const monto = Number(args[1]);

      if (!mencionado) return enviar("⚠️ Você precisa mencionar alguém para enviar moedas.\nEx: .regalar @usuario 100");
      if (mencionado === emisor) return enviar("⚠️ Você não pode enviar moedas para si mesmo.");
      if (isNaN(monto) || monto <= 0) return enviar("⚠️ Informe uma quantidade válida de moedas.\nEx: .regalar @usuario 100");

      const saldoEmisor = await MoneyOfM(emisor);
      if (saldoEmisor < monto) return enviar("❌ Você não tem moedas suficientes para fazer esta transferência.");

      // Realizar transferência
      await delkoin(emisor, monto);
      await addkoin(mencionado, monto);
      await sleep(100);

      const nuevoSaldo = await MoneyOfM(emisor);
      enviar(`💀 Transferência concluída.\nVocê enviou *R$${monto} Reais.*`, {
        mentions: [emisor, mencionado]
      });
    } catch (e) {
      enviar('❌ Erro: ' + e.message);
    }
  })();
}
break;









case 'rep' : case 'mirep' : case 'mireputacion':
if(!isReg) return enviar(respuesta.registro)
const myrep = repUser(sender)
const mitulamide30milimetros = `
╭━━━╾⭑✦REPUTAÇÃO✦⭑╼━━━╮
𝑨 𝑹𝒆𝒑𝒖𝒕𝒂𝒄̧𝒂̃𝒐 𝒅𝒆 ${pushname} 𝒆́ 𝒅𝒆 ${myrep}.
`
if (myrep < 20) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/NfJfvsBW/Untitled-05-12-2024-09-16-50-1.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 21 && myrep <= 40) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/PxjdQNQ8/Untitled-05-12-2024-09-16-50-2.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 41 && myrep <= 60) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/HL5pMbXg/Untitled-05-12-2024-09-16-50-3.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 61 && myrep <= 80) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/brWX3NWB/IMG-20241223-WA0014.jpg" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/Cx9hdcZ7/Untitled-05-12-2024-09-16-50-5.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
}

break 

case 'rank' : case 'rankrep' : 
if(!isGroup) return 
if(!isGroupAdmins) return enviar(respuesta.admin)
let teks2 = `
☠️━━━━━━━━━━━━━━━━━━☠️
*💀 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐄 𝐑𝐄𝐏𝐔𝐓𝐀𝐂̧𝐀̃𝐎 🕸️\n`;
registro.sort((a, b) => b.rep - a.rep) // Ordena do maior para o menor
       .slice(0, 10) // Pega apenas os 10 primeiros
       .forEach((usuario, indice) => {
           teks2 += `• 🚩Número ${indice + 1}: *${usuario.nombre}* | *${usuario.rep}* de Reputação\n`;
       });
enviar(teks2)
break 

case 'rankcoins': {
  if (!isGroup) return;
  if(!isGroupAdmins) return enviar(respuesta.admin)
  const pathi = './settings/Grupo/Json/registros.json';

  // Leer los datos actualizados en el momento
  const registro = JSON.parse(fs.readFileSync(pathi, 'utf8'));

  let rankingMensaje = `*💀 RANKING DE MILIONÁRIOS 🕸️*\n\nTOP.  USUÁRIO.   REAIS\n\n`;

  // Convertir a array si registro es un objeto
  const rankingArray = Array.isArray(registro)
    ? registro
    : Object.entries(registro).map(([jid, data]) => ({
        nombre: data.nombre || jid.split('@')[0],
        dinero: data.dinero || 0,
      }));

  rankingArray
    .sort((a, b) => b.dinero - a.dinero)
    .slice(0, 10)
    .forEach((usuario, index) => {
      rankingMensaje += `💀 ${index + 1}. *${usuario.nombre}* ➫ _R$${usuario.dinero}_ Reais\n`;
    });

  enviar(rankingMensaje);
}
break;




case 'ranknivel':{
if(!isGroup) return 
if(!isGroupAdmins) return enviar(respuesta.admin)
let teks = `
*RANKING DE NÍVEL* :
TOP.   USUÁRIO.   NÍVEL\n`
registro.sort((a,b) => b.nivel - a.nivel).forEach((usuario,index) => {
teks +=`• ${index + 1 }.     *${usuario.nombre}*  ➫  _*${usuario.nivel}*_\n`
});
enviar(teks)
}
break 

case "tienda":

if (!q) return enviar(`
☠️━━━━━━━━━━━━━━━━━━☠️
💀❖ 𝓛𝓞𝓙𝓐 ❖💀

🕷️ "𝓑𝒆𝒎-𝒗𝒊𝒏𝒅𝒐(𝒂) 𝒂̀ 𝒍𝒐𝒋𝒂 𝒅𝒐 𝑲𝒏𝒐𝒘𝒙𝒍𝒚 🕸️"
☠️━━━━━━━━━━━━━━━━━━☠️
💀 𝙄𝙩𝙚𝙢 1️⃣:
👉 *.tienda 1* 👈
🦴 R$50 Reais 🔁 200 𝓔𝓧𝓟 📚

🕸️ 𝙄𝙩𝙚𝙢 2️⃣:
👉 *.tienda 2* 5 Os Dragões 👈
🦴 R$50 Reais 🔁 𝓜𝓾𝓭𝓪 𝒏𝒐𝒎𝒆 𝒅𝒆 𝒓𝒂𝒏𝒌𝒔
( .𝓽𝓲𝓮𝓷𝓭𝓪 2 + 𝓷𝓲́𝓿𝒆𝒍 𝒅𝒆 𝒓𝒂𝒏𝒌 + 𝓷𝒐𝒗𝒐𝑵𝒐𝒎𝒆 )

💀 𝙄𝙩𝙚𝙢 3️⃣:
👉 *.emojimix 😇+😈* 👈
🦴 R$1 Real 🔁 𝓒𝒐𝒎𝒃𝒊𝒏𝒂 🌀 𝒆𝒎𝒐𝒋𝒊𝒔.

🕷️ 𝙄𝙩𝙚𝙢 4️⃣:
👉 *.sticker* 👈
🦴 R$1 Real 🔁 𝓒𝒓𝒊𝒂 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔 𝒄𝒐𝒎 𝒇𝒐𝒕𝒐𝒔 𝒐𝒖 𝑮𝑰𝑭𝒔.

☠️━━━━━━━━━━━━━━━━━━☠️
`);


if (q.startsWith("1")) {
    if (coins < 50) return enviar("💀 Você não tem Reais suficientes para esta compra. Você precisa de pelo menos R$50 Reais.");
    await delkoin(sender, 50);
    await addXp(sender, 200);

    return enviar(`🕷️ Obrigado ${pushname}, você trocou R$50 Reais por 200 EXP. 💀`);
}

if (q.startsWith("2")) {
    const args = q.split(" ");
    const nivel = parseInt(args[1]);
    const nuevoNombre = args.slice(2).join(" ");

    if (isNaN(nivel) || !nuevoNombre) {
        return enviar("❌ Use o comando corretamente: .tienda 2 <nível> <novo nome>\nExemplo: .tienda 2 8 Os Poderosos");
    }

    if (coins < 50) {
        return enviar("❌ Você não tem Coins suficientes para mudar o nome do rank. Você precisa de 50 Coins.");
    }

    const path = './settings/rangos.json';
    let rangosData;

    try {
        rangosData = JSON.parse(fs.readFileSync(path));
    } catch (e) {
        return enviar("⚠️ Erro ao ler os ranks. Verifique se o arquivo existe e está bem formatado.");
    }

    rangosData[nivel] = nuevoNombre;

    try {
        fs.writeFileSync(path, JSON.stringify(rangosData, null, 2));
        await delkoin(sender, 50);

        return enviar(`💀 Perfeito, ${pushname}!\nVocê mudou o rank do nível *${nivel}* para:\n🕸️ *${nuevoNombre}* 🕸️\nE foram descontados R$50 Reais. ☠️`);
    } catch (e) {
        return enviar("⚠️ Não foi possível salvar o novo nome. Tente novamente.");
    }
}

break;

//DESCARGAS
//nesecitas api
case 'play': case 'p':
    if (!q) return enviar(`- Exemplo: !play nome da música\nA música será baixada. Se não baixar, pode ser que o YouTube tenha restringido.`);
    try {
        const ytSearch = require('yt-search');
        const ytdl = require('ytdl-core');

        enviar("*💀 BUSCANDO... 🕸️*");

        const searchResult = await ytSearch(q);
        const video = searchResult.videos[0];

        if (!video) return enviar("Não encontrei nenhuma música com esse nome. Tente com outro título.");

        if (video.duration.seconds > 600) return enviar("Desculpe, este áudio é muito longo. Escolha algo com menos de 10 minutos.");

        const N_E = " Não encontrado.";
        const caption = `
        ▧⃯⃟📝• 𝐓𝐢́𝐭𝐮𝐥𝐨: ${video.title || N_E}
        ▧⃯⃟⏱️• 𝐃𝐮𝐫𝐚𝐜̧𝐚̃𝐨: ${video.timestamp || N_E}
        ▧⃯⃟🎚• 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨: ${video.ago || N_E}
        ▧⃯⃟👁️• 𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬: ${video.views?.toLocaleString() || N_E}

        ■■■■■ 100%

        💀 Aguarde um momento... 🕸️

        Para baixar o vídeo, use !playvideo ${q.trim()}
        `;

        await sock.sendMessage(from, {image: {url: video.thumbnail}, caption: caption}, {quoted: info});

        const audioBuffer = await new Promise((resolve, reject) => {
            const chunks = [];
            const stream = ytdl(video.url, {filter: 'audioonly', quality: 'highestaudio'});
            stream.on('data', chunk => chunks.push(chunk));
            stream.on('end', () => resolve(Buffer.concat(chunks)));
            stream.on('error', reject);
        });

        await sock.sendMessage(from, {
            audio: audioBuffer,
            mimetype: "audio/mpeg",
            fileName: (video.title || "play") + ".mp3"
        }, {quoted: info});

    } catch (e) {
        console.log(e);
        return enviar("Não foi possível encontrar ou baixar esta música. Tente outra.");
    }
break;


//nesecitas api
case 'playvideo': case 'pvid': case 'playmp4':
{
    try {
        if (!q || !q.trim()) return enviar(`- Exemplo: !playvideo nome do vídeo`);

        const ytSearch = require('yt-search');
        const ytdl = require('ytdl-core');

        enviar("*💀 BUSCANDO... 🕸️*");

        const searchResult = await ytSearch(q);
        const video = searchResult.videos[0];

        if (!video) return enviar("Não encontrei nenhum vídeo com esse nome. Tente outro título.");

        if (video.duration.seconds > 600) return enviar("Desculpe, este vídeo é muito longo. Escolha algo com menos de 10 minutos.");

        var N_E = " Não encontrado.";
        var bla = `
🎙️⃤𝐓𝐢́𝐭𝐮𝐥𝐨: ${video.title || N_E}
⏰⃤𝐃𝐮𝐫𝐚𝐜̧𝐚̃𝐨: ${video.timestamp || N_E}
📹⃤𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨: ${video.ago || N_E}
👁️⃤𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬: ${video.views?.toLocaleString() || N_E}

■■■■■ 100%

💀 Aguarde um momento... 🕸️

Para baixar o áudio, use !play ${q.trim()}
        `;

        await sock.sendMessage(from, {image: {url: video.thumbnail}, caption: bla}, {quoted: info});

        const videoBuffer = await new Promise((resolve, reject) => {
            const chunks = [];
            const stream = ytdl(video.url, {filter: 'videoandaudio', quality: 'lowest'});
            stream.on('data', chunk => chunks.push(chunk));
            stream.on('end', () => resolve(Buffer.concat(chunks)));
            stream.on('error', reject);
        });

        await sock.sendMessage(from, {
            video: videoBuffer,
            mimetype: "video/mp4",
            fileName: (video.title || "play") + ".mp4"
        }, {quoted: info});

    } catch (e) {
        console.log(e);
        return enviar("Não foi possível encontrar ou baixar este vídeo. Tente outro.");
    }
}
break;



//tikwm.com - gratuito, sem chave
case 'tiktokvideo':
try {
    if(!q || !q.includes("tiktok")) return enviar('Por favor, forneça um link válido do TikTok. Exemplo: !tiktokvideo https://www.tiktok.com/...');

    enviar("💀 Processando o vídeo... 🕸️");

    const tiktokRes = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}&hd=1`);
    const tiktokData = await tiktokRes.json();

    if (tiktokData.code !== 0 || !tiktokData.data) return enviar("Não foi possível baixar o vídeo. Verifique o link e tente novamente.");

    const videoUrl = tiktokData.data.play || tiktokData.data.wmplay;
    await sock.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4' }, { quoted: info });
} catch (e) {
    console.log(e);
    enviar("Ocorreu um erro ao tentar baixar o vídeo do TikTok.");
}
break;



case 'tiktokaudio':
try {
    if(!q || !q.includes("tiktok")) return enviar(`Exemplo: !tiktokaudio https://www.tiktok.com/...`);
    enviar("💀 Processando... 🕸️");

    const ttAudioRes = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`);
    const ttAudioData = await ttAudioRes.json();

    if (ttAudioData.code !== 0 || !ttAudioData.data) return enviar("Não foi possível baixar o áudio. Verifique o link.");

    const musicUrl = ttAudioData.data.music;
    await sock.sendMessage(from, {audio: {url: musicUrl}, mimetype: "audio/mpeg"}, {quoted: info});
} catch (e) {
    console.log(e);
    return enviar("Erro ao baixar áudio do TikTok.");
}
break;


//nesecitas api
case 'buscarapk': 
; // Verificación si el usuario es premium
if (!q.trim()) return enviar(`Exemplo: !buscarapk WhatsApp`);

try {
    enviar('💀 Aguarde um momento, estou enviando... 🕷️');
    let abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide_pesquisa?pesquisa=${q.trim()}&apikey=${API_KEY_NAUFRA}`);
    enviar(abc.aptoide || 'Nenhuma informação encontrada.');
} catch (e) {
    console.log(e);
    return enviar(mess.error()); // Mensaje de error en caso de fallo
}
break;

//nesecitas api

case "descargarapk":
;
if (!q.trim().includes("aptoide.com")) return enviar(`Exemplo: !descargarapk link do aplicativo\n\nUse o comando !buscarapk — por exemplo: whatsapp — e você receberá uma URL. Cole a URL após o comando para baixar.`);
enviar('💀 Aguarde um momento, estou enviando o seu apk... 🕷️');
try {
    abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/aptoide?url=${q.trim()}&apikey=${API_KEY_NAUFRA}`);
    sock.sendMessage(from, {
        document: { url: abc.link },
        mimetype: "application/vnd.android.package-archive",
        fileName: abc.titulo
    }, { quoted: info }).catch((e) => console.log(e));
} catch (e) {
    console.log(e);
    return enviar("Erro...");
}
break;



//Casais


case 'alea': case 'casar' : case 'parejas':{
  if(!isReg) return enviar(respuesta.registro)
const men1 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
const men3 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
const men2 = men1.id
const men4 = men3.id
const rmen = `@${men4.split('@')[0]} 𝗚𝗢𝗦𝗧𝗔 𝗗𝗘 @${men2.split('@')[0]} 𝗘 𝗗𝗘𝗩𝗘𝗥𝗜𝗔𝗠 𝗦𝗘 𝗖𝗔𝗦𝗔𝗥`
sock.sendMessage(from,{text : rmen , mentions :[men4,men2]},{quoted : info})
}
break 





// COMANDOS SIN PREFIJO
default:


/// 🚫 ANTILINK MEJORADO CON DEPURACIÓN Y COMPATIBILIDAD LID/JID

const { jidNormalizedUser } = require("baileys")
const texto = (budy || "").toLowerCase()

if (isGroup && isAntiLink && !isGroupAdmins && !isOwner) {
  if (texto.includes(".com") || texto.includes("http://") || texto.includes("https://")) {
    console.log("⚠️ Enlace detectado:", texto)

    const groupMetadata = await sock.groupMetadata(from)
    const botIsAdmin = groupMetadata.participants.find(p => p.id === owner && p.admin)
    if (!isBotGroupAdmins) return enviar("⚠️ Não sou administrador, não posso expulsar.")

    const member = groupMetadata.participants.find(p => p.id === sender)
    if (!member) return console.log("⚠️ O usuário já saiu do grupo.")

    const Kick = jidNormalizedUser(sender)
    console.log("👞 Tentando expulsar:", Kick)

    try {
      console.log("🗑️ Deletando mensagem...")
      await sock.sendMessage(from, { 
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } 
      })

      console.log("🚷 Expulsando usuário...")
      const result = await sock.groupParticipantsUpdate(from, [Kick], "remove")
      console.log("✅ Resultado da expulsão:", result)

      await enviar(`🚫 Link proibido detectado. O usuário @${sender.split("@")[0]} foi removido.`, { mentions: [sender] })

    } catch (err) {
      console.log("❌ Erro ao executar antilink:")
      console.log("Mensagem:", err.message)
      console.log("Stack completo:", err)
      await enviar(`⚠️ Não foi possível expulsar @${sender.split("@")[0]}.\nMotivo: ${err.message}`, { mentions: [sender] })
    }
  }
}



    
   if (budy.startsWith('=>Duueño')) {
    if (!isOwner) return enviar(respuesta.miowner)
        function Return(sul) {
             sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                       if (sat == undefined) {
                            bang = util.format(sul)
                            }
                            enviar(bang)
                    }
                    try {
                        enviar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        enviar(String(e))
                    }
                }
                
                                                      
                                                                
                                                                                                                                                      
}
 
 } catch (e) {

 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
 
 }   
 
 
 
 
 
 
        
    })


    
}
///////////MODIFIC INDEX 
startProo()
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('  [❗] O arquivo index.js foi modificado',"blue"));
process.exit()
}
})

