import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 为GitHub Pages设置基础路径
  // 请将'your-repo-name'替换为您的实际GitHub仓库名称
  base: process.env.NODE_ENV === 'production' ? '/taitan/' : '/'
})