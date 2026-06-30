@echo off
echo Killing Node processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 3 /nobreak >nul

cd /d "c:\Users\user\Desktop\Cleaning BV\CleaningBV\cleanzy-next"

echo Removing .next cache...
if exist .next rmdir /s /q .next

echo Building...
call npm run build
if errorlevel 1 (
  echo BUILD FAILED
  exit /b 1
)

echo Starting dev server...
call npm run dev
