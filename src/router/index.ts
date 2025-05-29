import { createRouter, createWebHistory } from 'vue-router'
import { routeMetaList } from '@/router/pageMeta.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeMetaList,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 返回上一頁時保留滾動位置
      return savedPosition
    } else {
      // 其餘情況都捲動到最上方
      return { top: 0 }
    }
  },
})

// 動態設定頁面標題
router.beforeEach((to, from, next) => {
  const defaultTitle = '源品香豆皮工廠'
  document.title = (to.meta as { pageTitle?: string })?.pageTitle || defaultTitle
  next()
})

export default router
