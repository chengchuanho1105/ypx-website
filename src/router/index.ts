import { createRouter, createWebHistory } from 'vue-router'
import { routeMetaList } from '@/router/pageMeta.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeMetaList,
})

// 動態設定頁面標題
router.beforeEach((to, from, next) => {
  const defaultTitle = '源品香豆皮工廠'
  document.title = (to.meta as { pageTitle?: string })?.pageTitle || defaultTitle
  next()
})

export default router
