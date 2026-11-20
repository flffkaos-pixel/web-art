# Cloudflare Pages 배포 (https://modubada-game.pages.dev)
# 사용법:  powershell -ExecutionPolicy Bypass -File .\deploy-cloudflare.ps1
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
$env:NO_COLOR = "1"
$env:WRANGLER_SEND_METRICS = "false"

$stage = Join-Path $PSScriptRoot ".deploy"
if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }

# 업로드할 파일만 골라서 복사 (.git, api, _ultrawater, 설정 파일 제외)
robocopy $PSScriptRoot $stage /E /NFL /NDL /NJH /NJS `
    /XD ".git" ".vercel" ".wrangler" "node_modules" "api" "_ultrawater" ".deploy" `
    /XF ".gitignore" "deploy-cloudflare.ps1" | Out-Null

try {
    npx --yes wrangler@latest pages deploy $stage --project-name modubada-game --branch main --force --commit-dirty=true
}
finally {
    if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
}
