# 公司网站部署指南

本指南提供了如何部署公司网站的详细步骤，确保网站可以被其他人访问。

## 准备工作

1. **安装依赖**
   在项目根目录下运行以下命令安装所有必需的依赖：
   
   ```bash
   npm install
   ```

2. **构建项目**
   构建生产版本的静态文件：
   
   ```bash
   npm run build
   ```
   
   这将在`dist`目录中生成优化后的静态文件。

## 部署选项

### 选项1：GitHub Pages

1. 在GitHub上创建一个新的仓库
2. 将本地代码推送到GitHub仓库
3. 使用GitHub Actions自动部署：

   在项目中创建`.github/workflows/deploy.yml`文件，内容如下：

   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v2
         
         - name: Install and Build
           run: |
             npm install
             npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### 选项2：Netlify

1. 访问 [Netlify](https://app.netlify.com/)
2. 点击"New site from Git"
3. 选择GitHub仓库
4. 配置构建选项：
   - 构建命令：`npm run build`
   - 发布目录：`dist`
5. 点击"Deploy site"

### 选项3：Vercel

1. 访问 [Vercel](https://vercel.com/)
2. 登录并导入你的GitHub仓库
3. 配置构建设置（通常会自动检测）
4. 点击"Deploy"

### 选项4：传统Web服务器

1. 构建项目生成`dist`目录
2. 将`dist`目录中的所有文件上传到你的Web服务器（如Nginx、Apache等）

#### Nginx配置示例

在你的Nginx配置文件中添加以下内容：

```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    
    root /path/to/your/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 自定义域名配置

1. 如果你有自己的域名，在部署平台上设置自定义域名
2. 在你的DNS提供商处配置DNS记录，将域名指向部署平台提供的服务器

## 部署后检查清单

- [ ] 验证网站在各种设备上正常显示（响应式设计）
- [ ] 检查所有链接是否正常工作
- [ ] 测试表单提交功能
- [ ] 确认网站加载速度良好
- [ ] 验证SEO设置（title、description等）

## 后续维护

1. 定期更新依赖包
2. 根据需要更新网站内容
3. 监控网站性能和访问统计
4. 定期备份网站数据

## 常见问题排查

### 路由问题
如果使用React Router的客户端路由，确保你的服务器配置正确地处理SPA路由（将所有请求重定向到index.html）

### 资源加载失败
检查文件路径和服务器配置，确保资源文件可以正确加载

### 构建失败
检查错误日志，确保所有依赖正确安装，代码没有语法错误

---

通过以上步骤，你应该能够成功部署公司网站并使其可供他人访问。如果遇到任何问题，请参考部署平台的官方文档或寻求专业技术支持。