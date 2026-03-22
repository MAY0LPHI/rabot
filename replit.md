# Knowxly Bot

Bot WhatsApp com tema skull/gótico (☠️💀🕸️🦴🕷️), construído no framework **nazuna** (baseado em Baileys). Aplicação backend Node.js — sem frontend ou servidor web.

## Stack

- **Runtime:** Node.js 20
- **Framework:** nazuna (WhatsApp/Baileys)
- **Entrada:** `dados/src/connect.js`
- **Dependências de sistema:** ffmpeg (via Nix)

## Estrutura do Projeto

```
dados/
  src/
    connect.js          — Ponto de entrada do bot (pairing code)
    index.js            — Handler principal de comandos (~31k linhas)
    menus/menu.js       — Menu principal com tema skull
    config.json         — Config: owner 553398293174, prefix !, name Knowxly
  midias/
    menu.jpg            — Banner local para o menu
fuction/
  sticker/attp.js       — Gerador de stickers animados (attp2/attp3)
  download/youtube.js   — Download de vídeos YouTube (playvideo)
  download/gets.js      — Utilitários de download
settings/
  Grupo/Json/
    registros.json      — BD de economia (id, nombre, nivel, xp, rxp, dinero, rep)
    antilink.json       — Grupos com antilink ativo
    modo_admin.json     — Grupos em modo admin-only
    welkom.json         — Configuração de boas-vindas
    grupo.json          — Dados de grupos
  Json/
    chat.json           — Configuração antiprivado
```

## Comandos Implementados (29 portados + sistema nazuna completo)

**Info / Criador:** `!botcompleto`, `!grupos`, `!canales`, `!sercreador`, `!serbot`

**Grupo (Admins):** `!antilink`, `!modoadmin`, `!todos`, `!anuncio`, `!notify`/`!hidetag`

**Owner:** `!antiprivado`/`!antipv`, `!revelarvisu`/`!rvisu`

**IA:** `!ia`, `!chatgpt`, `!gpt` (via Pollinations AI)

**Stickers:** `!attp2`, `!attp3`

**Downloads:** `!playvideo`, `!pvid`

**Economia** (usa `settings/Grupo/Json/registros.json`):
`!reg`, `!nivel`/`!cartera`, `!listreg`, `!rankcoins`, `!ranknivel`, `!tragamonedas`, `!levelup`, `!minar`, `!regalar`, `!tienda`, `!dayli`

## Autenticação

Usa pairing code. Na primeira execução exibe o código no console. WhatsApp > Configurações > Dispositivos conectados > Vincular dispositivo > Inserir código.

## Workflow

- **Knowxly Bot** — `node --expose-gc dados/src/connect.js --code`

## Deploy VPS

- VPS: 185.169.99.108
- Gerenciador: PM2
- Não rodar Replit e VPS ao mesmo tempo com o mesmo número
