# 简单的PowerShell脚本启动静态文件服务器
Write-Output "启动静态文件服务器在端口8007..."
cd dist
python -m http.server 8007