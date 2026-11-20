# Cloudflare 배포 (web-art)
# 사용법:  powershell -ExecutionPolicy Bypass -File .\deploy-cloudflare.ps1
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
$env:NO_COLOR = "1"
$env:WRANGLER_SEND_METRICS = "false"
npx --yes wrangler@latest deploy
