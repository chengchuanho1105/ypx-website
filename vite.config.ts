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
      name: 'vite:404-page',
      closeBundle() {
        writeFileSync(
          './dist/404.html',
          `
      <!DOCTYPE html>
      <html lang="zh-TW">
        <head>
          <meta charset="UTF-8" />
          <title>找不到頁面</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script>
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          </script>
        </head>
        <body style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;">
          <h1>404 - 頁面不存在</h1>
          <p>3 秒後將導回首頁...</p>
        </body>
      </html>
    `,
        )
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
