# GitHub Pages 部署指南

本文档提供了在GitHub Pages上正确部署React应用的完整步骤和解决方案。

## 为什么我的网站在GitHub Pages上没有内容？

经过分析，主要问题在于：

1. **资源引用路径错误**：构建输出使用了绝对路径（如`/assets/...`），而GitHub Pages通常在子路径下运行
2. **路由配置不兼容**：使用了`BrowserRouter`，在GitHub Pages上可能会导致路由问题

## 已修复的配置

1. **已更新Vite配置**：添加了`base`配置项
2. **已更新路由配置**：将`BrowserRouter`替换为`HashRouter`

## 完整部署步骤

### 1. 配置GitHub仓库名称

**重要**：首先需要将`vite.config.js`中的仓库名称替换为您的实际GitHub仓库名称：

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 请将'your-repo-name'替换为您的实际GitHub仓库名称
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'
})
```

### 2. 构建项目

运行构建命令生成最新的dist目录：

```bash
npm run build
```

### 3. 部署到GitHub Pages（推荐方法）

#### 方法1：使用gh-pages包（最简单）

1. 安装gh-pages包：
```bash
npm install --save-dev gh-pages
```

2. 在package.json中添加部署脚本：
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. 执行部署：
```bash
npm run deploy
```

#### 方法2：手动部署到gh-pages分支

1. 创建gh-pages分支：
```bash
git checkout --orphan gh-pages
git rm -rf .
```

2. 复制dist目录内容到根目录：
```bash
cp -r dist/* .
```

3. 提交并推送到GitHub：
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

#### 方法3：通过GitHub Actions自动部署

1. 在项目根目录创建`.github/workflows/deploy.yml`文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. 配置GitHub仓库设置

1. 登录GitHub，进入您的仓库
2. 点击"Settings" > "Pages"
3. 在"Source"部分：
   - 选择部署源为`gh-pages`分支
   - 选择根目录`/ (root)`
   - 点击"Save"

### 5. 验证部署

部署完成后，您可以通过以下URL访问您的网站：
```
https://your-username.github.io/your-repo-name/
```

## 常见问题排查

### 1. 网站显示空白页面

**原因**：资源路径配置错误
**解决方案**：
- 确保`vite.config.js`中的`base`路径与您的GitHub仓库名称完全匹配
- 检查构建后的`index.html`文件中的资源路径是否正确

### 2. 资源加载失败（404错误）

**原因**：资源路径不正确
**解决方案**：
- 确认GitHub Pages设置中选择了正确的分支和根目录
- 检查浏览器开发者工具中的网络面板，查看具体哪些资源加载失败

### 3. 路由不工作

**原因**：使用了不兼容的路由器
**解决方案**：
- 确保使用`HashRouter`而不是`BrowserRouter`
- 检查App.jsx中的导入语句

## 快速部署脚本

我已经为您创建了一个快速部署脚本。请按照以下步骤操作：

1. **修改仓库名称**：编辑`vite.config.js`，将`your-repo-name`替换为您的实际仓库名称
2. **安装部署工具**：运行 `npm install --save-dev gh-pages`
3. **执行部署**：运行 `npm run deploy`

## 部署后验证清单

- [ ] 首页能正常访问
- [ ] 所有图片和资源加载正常
- [ ] 导航菜单和路由正常工作
- [ ] 页面样式正确显示
- [ ] 响应式设计在不同设备上正常

如果您在部署过程中遇到任何问题，请检查上述清单并参考GitHub Pages官方文档。