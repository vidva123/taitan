import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 为GitHub Pages设置基础路径
  // 请将'your-repo-name'替换为您的实际GitHub仓库名称
  base: process.env.NODE_ENV === 'production' ? '/taitan/' : '/',
  // 配置构建选项以确保视频文件被正确处理
  build: {
    assetsInclude: ['**/*.mp4'],
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name ? assetInfo.name.split('.').pop() : ''
          if (ext === 'mp4') {
            return 'assets/videos/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})