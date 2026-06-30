$projectRoot = $PSScriptRoot
Set-Location $projectRoot

Write-Host "Stopping Node processes..."
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Clearing .next cache..."
if (Test-Path ".next") {
  Remove-Item -Recurse -Force ".next"
}

Write-Host "Starting dev server on http://localhost:3000 ..."
Start-Process npm -ArgumentList "run", "dev" -WorkingDirectory $projectRoot -WindowStyle Normal
