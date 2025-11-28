#!/usr/bin/env node

/**
 * GitHub Pages 部署脚本
 * 这个脚本会帮助您自动部署React应用到GitHub Pages
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 开始部署到 GitHub Pages...\n');

// 检查vite.config.js中的仓库名称配置
const viteConfigPath = path.join(__dirname, 'vite.config.js');
let viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');

// 检查是否还是默认的仓库名称
if (viteConfigContent.includes("/your-repo-name/")) {
    console.log('⚠️  检测到您还没有配置GitHub仓库名称！');
    console.log('请按照以下步骤操作：');
    console.log('1. 打开 vite.config.js 文件');
    console.log('2. 将 \'/your-repo-name/\' 替换为您的实际GitHub仓库名称');
    console.log('3. 保存文件后重新运行此脚本');
    console.log('\n例如，如果您的仓库URL是：https://github.com/your-username/taitan');
    console.log('那么应该将 \'/your-repo-name/\' 替换为 \'/taitan/\'\n');
    process.exit(1);
}

console.log('✅ 仓库名称配置检查通过');

// 执行构建
console.log('📦 开始构建项目...');
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ 项目构建成功');
} catch (error) {
    console.error('❌ 构建失败:', error.message);
    process.exit(1);
}

// 检查dist目录是否存在
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    console.error('❌ dist目录不存在，请检查构建过程');
    process.exit(1);
}

// 检查index.html文件
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html文件不存在');
    process.exit(1);
}

console.log('✅ 构建产物检查通过');

// 执行部署
console.log('🚀 开始部署到GitHub Pages...');
try {
    execSync('npx gh-pages -d dist', { stdio: 'inherit' });
    console.log('🎉 部署成功！');
    
    // 获取仓库信息
    try {
        const gitConfig = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
        const match = gitConfig.match(/github\.com[\/:]([^\/]+)\/([^\/\.]+)/);
        if (match) {
            const username = match[1];
            const repoName = match[2];
            console.log(`\n🌐 您的网站地址：https://${username}.github.io/${repoName}/`);
            console.log('📖 请等待几分钟让GitHub Pages生效');
        }
    } catch (error) {
        console.log('\n📖 部署已完成，请检查您的GitHub仓库设置');
    }
    
} catch (error) {
    console.error('❌ 部署失败:', error.message);
    console.log('\n💡 可能的解决方案：');
    console.log('1. 确保您已登录GitHub并具有仓库的写入权限');
    console.log('2. 检查网络连接');
    console.log('3. 尝试手动运行: npx gh-pages -d dist');
    process.exit(1);
}

console.log('\n✅ 部署流程完成！');