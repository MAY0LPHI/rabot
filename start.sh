#!/data/data/com.termux/files/usr/bin/bash

echo ""
echo "☠️━━━━━━━━━━━━━━━━━━━━━━━☠️"
echo "   KNOWXLY - INICIANDO BOT"
echo "☠️━━━━━━━━━━━━━━━━━━━━━━━☠️"
echo ""

# Verifica se está na pasta correta
if [ ! -f "index.js" ]; then
  echo "❌ Execute este script dentro da pasta do bot!"
  echo "   Exemplo: cd ~/rabot && bash start.sh"
  exit 1
fi

echo "📦 Atualizando pacotes do Termux..."
pkg update -y && pkg upgrade -y

echo ""
echo "🔧 Instalando dependências do sistema..."
pkg install -y nodejs ffmpeg git

echo ""
echo "📥 Instalando dependências do bot..."
npm install

echo ""
echo "✅ Tudo instalado! Iniciando Knowxly..."
echo ""

while :
do
  node index.js
  sleep 2
  clear
done
