import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import generateSitemap from 'vite-plugin-pages-sitemap'
import Pages from 'vite-plugin-pages'
import copy from 'rollup-plugin-copy'
import { CompanyProfile } from './src/config/companyProfile'

export default defineConfig({
  base: '/', // 使用自訂網域時，base 設為 '/'
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Pages({
      // 自動產出 sitemap.xml
      dirs: 'src/views',
      extensions: ['vue'],
      onRoutesGenerated: async (routes) => {
        await generateSitemap({
          hostname: CompanyProfile.website.fullUrl,
          routes,
        })
      },
    }),
    {
      // 打包後將 sitemap.xml 複製到 dist/
      ...copy({
        targets: [{ src: 'sitemap.xml', dest: 'dist' }],
        hook: 'writeBundle',
      }),
      enforce: 'post',
    },
    {
      // 自動在 dist 中加入 CNAME 檔案
      name: 'vite:cname',
      closeBundle() {
        writeFileSync('./dist/CNAME', CompanyProfile.website.domain)
      },
    },
    /*
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
    */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
