<h1 align="center">
☠️ <span style="color:#00FFAA;">Knowxly Bot</span> 🕸️
</h1>

<p align="center">
  <img src="https://i.imgur.com/axu3w24.png" width="300" alt="Knowxly Bot" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20-green?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Baileys-6.7.21-darkgreen?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  <img src="https://img.shields.io/badge/Status-Online_24%2F7-brightgreen?style=for-the-badge"/>
</p>

---

## 💀 **O que é o Knowxly Bot?**

🔥 **Knowxly** é um bot de WhatsApp completo, construído do zero com a última versão do **Baileys**, totalmente gratuito e 100% modificável. Rodando 24/7 com reconexão automática, sistema de economia, jogos RPG e muito mais.

- 🕸️ Conexão via **código de vinculação** (sem necessidade de QR Code)
- ☠️ Sistema de **economia e níveis** por grupo
- 💀 **Jogos RPG** integrados (mineração, pesca, roleta, cassino e mais)
- 📦 **Downloads** de músicas, vídeos, TikTok e APKs
- 🖼️ Criação de **figurinhas** animadas e personalizadas
- 🤖 Integração com **IA / ChatGPT**
- 🛡️ Proteção **AntiLink** e **Anti-spam** para grupos
- 👑 Sistema de **administração** completo por grupo
- 🔧 **Multiprefixo**: `#` `/` `•` `.` `!` `?` `*`

---

## ☠️ Comandos

| Categoria | Comandos |
|-----------|----------|
| 🛡️ **Admin** | `welcome`, `antilink`, `modoadmin`, `todos`, `ban`, `kick`, `notify` |
| 👑 **Criador** | `antiprivado`, `revelarvisu`, `reiniciar`, `bangp`, `boton`, `botoff` |
| 📦 **Baixar** | `play`, `playvideo`, `tiktokvideo`, `tiktokaudio`, `buscarapk`, `descargarapk` |
| 🖼️ **Figurinhas** | `sticker`, `attp`, `attp2`, `attp3`, `emojimix` |
| 🔧 **Ferramentas** | `toimg`, `tomp3`, `calc`, `nick`, `ia`, `chatgpt` |
| 💰 **Economia** | `reg`, `nivel`, `perfil`, `cartera`, `regalar`, `levelup` |
| 🎮 **Jogos** | `minar`, `ruleta`, `pescar`, `tragamonedas`, `dayli`, `casino` |
| ℹ️ **Info** | `ping`, `infobot`, `menu`, `help` |

---

## 🚀 Instalação

### Pré-requisitos

- Node.js v20+
- ffmpeg

### Clonando e rodando

```bash
git clone https://github.com/seu-usuario/knowxly-bot
cd knowxly-bot
npm install
node index.js
```

### Vinculando ao WhatsApp

1. Configure o número do bot em `index.js` (linha 30):
```js
let phoneNumber = "55XXXXXXXXXXX"; // seu número com DDI
```

2. Inicie o bot. Um **código de vinculação** será exibido no terminal.

3. No WhatsApp: **Configurações → Aparelhos conectados → Conectar aparelho → Digitar código**

---

## ⚙️ Configuração

Edite o arquivo `settings/settings.json`:

```json
{
  "Bot": "Knowxly",
  "creador": "SeuNome",
  "JpgBot": "URL_da_imagem_do_bot",
  "owner": "55XXXXXXXXXXX@s.whatsapp.net",
  "API_KEY_NAUFRA": "sua_chave_api"
}
```

---

## 🕸️ Estrutura do Projeto

```
index.js                 → Arquivo principal do bot
settings/
  settings.json          → Configurações gerais
  Bot/Js/menu.js         → Menu de comandos
  Grupo/Js/reg.js        → Sistema de economia e níveis
  Grupo/Json/            → Configurações por grupo
Games/
  Js/                    → Lógica dos jogos
  Json/                  → Dados dos jogos
fuction/
  download/              → Funções de download
  sticker/               → Criação de figurinhas
media/                   → Imagens do bot
```

---

## ☠️ 𝙆𝙣𝙤𝙬𝙭𝙡𝙮 — 𝙗𝙤𝙩 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙆𝙣𝙤𝙬𝙭𝙡𝙮 🕸️
