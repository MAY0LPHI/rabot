@echo off
echo ========================================
echo    KNOWXLY - INICIANDO BOT (WINDOWS)
echo ========================================
echo.

if not exist index.js (
    echo [X] Execute este script dentro da pasta do bot!
    pause
    exit /b 1
)

:loop
node index.js
timeout /t 2 /nobreak >nul
goto loop
