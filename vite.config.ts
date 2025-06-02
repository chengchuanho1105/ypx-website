import { fileURLToPath, URL } from 'node:url'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
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
    {
      name: 'vite:404-page',
      closeBundle() {
        const filePath = resolve(__dirname, 'public/404.html') // 你的404.html路徑
        const content = readFileSync(filePath, 'utf-8')
        writeFileSync('./dist/404.html', content)
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
