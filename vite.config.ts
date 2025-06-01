import { fileURLToPath, URL } from 'node:url'

import { writeFileSync, copyFileSync } from 'fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import tailwindcss from '@tailwindcss/vite'

import { CompanyProfile } from './src/config/companyProfile'

export default defineConfig({
  base: '/', // ✅ 使用自訂網域時，base 設為 '/'
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    {
      // ✅ 自動在 dist 中加入 CNAME 檔案
      name: 'vite:cname',
      closeBundle() {
        writeFileSync('./dist/CNAME', CompanyProfile.websiteUrl)
      },
    },
    {
      name: 'vite:404-spa-fallback',
      closeBundle() {
        copyFileSync('./dist/index.html', './dist/404.html')
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
