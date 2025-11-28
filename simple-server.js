import http from 'http';
import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const normalizedPathname = __filename.startsWith('/') ? __filename.slice(1) : __filename;
const __dirname = path.dirname(normalizedPathname);
const distDir = path.join(__dirname, 'dist');

console.log('服务器根目录:', __dirname);
console.log('dist目录:', distDir);
console.log('dist目录是否存在:', fs.existsSync(distDir));

const contentType = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  try {
    console.log('收到请求:', req.url);
    const urlPath = req.url.split('?')[0];
    
    if (urlPath === '/@vite/client') {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end('');
      return;
    }
    
    const filePath = urlPath === '/' ? '/index.html' : urlPath;
    const fullPath = path.join(distDir, filePath);
    
    console.log('尝试访问文件:', fullPath);
    
    if (fs.existsSync(fullPath)) {
      if (fs.lstatSync(fullPath).isDirectory()) {
        console.log('是目录，返回404:', fullPath);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found - 目录');
      } else {
        console.log('文件存在，提供文件:', fullPath);
        const ext = path.extname(fullPath);
        res.writeHead(200, {
          'Content-Type': contentType[ext] || 'application/octet-stream'
        });
        const stream = fs.createReadStream(fullPath);
        stream.pipe(res);
        stream.on('error', (err) => {
          console.error('文件读取错误:', err.message);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
        });
      }
    } else {
      console.log('文件不存在，返回404:', fullPath);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found - 文件不存在');
    }
  } catch (err) {
    console.error('错误:', err.message);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.listen(8011, () => {
  console.log('静态文件服务器运行在 http://localhost:8011');
});