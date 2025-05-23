// pageMate.ts
import { CompanyProfile } from '@/config/companyProfile'
import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

const DefaultLayout = defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))

import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue' // 重新匯入 ProductView
import ProductIntroView from '@/views/ProductIntroView.vue'
import ProductCertificationsView from '@/views/ProductCertificationsView.vue'
import MediaView from '@/views/MediaView.vue'
import NewsView from '@/views/NewsView.vue'
import FAQView from '@/views/FAQView.vue'
import ContactView from '@/views/ContactView.vue'

type RouteMeta = {
  layout: Component
  pageTitle: string
  hideFromNav?: boolean
}

export const routeMetaList: Array<{
  path: string
  name: string
  title: string
  component: Component // 這裡依然是必要的，因為 /product 會渲染 ProductView
  meta: RouteMeta
  children?: Array<{
    path: string
    name: string
    title: string
    component: Component
    meta: RouteMeta
  }>
}> = [
  {
    path: '/',
    name: 'home',
    title: '首頁',
    component: HomeView,
    meta: { layout: DefaultLayout, pageTitle: `首頁｜${CompanyProfile.shortName}` },
  },
  {
    path: '/about',
    name: 'about',
    title: '關於我們',
    component: AboutView,
    meta: { layout: DefaultLayout, pageTitle: `關於我們｜${CompanyProfile.shortName}` },
  },
  {
    path: '/product',
    name: 'product',
    title: '產品',
    component: ProductView, // 重新指定 ProductView 為父路由的組件
    meta: { layout: DefaultLayout, pageTitle: `產品｜${CompanyProfile.shortName}` },
    children: [
      {
        path: '', // 將 ProductView 設為 /product 的預設子路由
        name: 'productOverview', // 給 ProductView 一個名稱，避免和父路由重複
        title: '產品概覽', // 導覽列可以不顯示，但用於內部管理
        component: ProductView, // 讓 ProductView 也能作為 /product 的子路由
        meta: {
          layout: DefaultLayout,
          pageTitle: `產品概覽｜${CompanyProfile.shortName}`,
          hideFromNav: true,
        }, // 在導覽列中隱藏此項
      },
      {
        path: 'productIntro',
        name: 'productIntro',
        title: '產品介紹',
        component: ProductIntroView,
        meta: { layout: DefaultLayout, pageTitle: `產品介紹｜${CompanyProfile.shortName}` },
      },
      {
        path: 'productCertifications',
        name: 'productCertifications',
        title: '產品認證',
        component: ProductCertificationsView,
        meta: { layout: DefaultLayout, pageTitle: `產品認證｜${CompanyProfile.shortName}` },
      },
    ],
  },
  {
    path: '/media',
    name: 'media',
    title: '媒體介紹',
    component: MediaView,
    meta: { layout: DefaultLayout, pageTitle: `媒體介紹｜${CompanyProfile.shortName}` },
  },
  {
    path: '/news',
    name: 'news',
    title: '最新消息',
    component: NewsView,
    meta: { layout: DefaultLayout, pageTitle: `最新消息｜${CompanyProfile.shortName}` },
  },
  {
    path: '/faq',
    name: 'faq',
    title: '常見問題',
    component: FAQView,
    meta: { layout: DefaultLayout, pageTitle: `常見問題｜${CompanyProfile.shortName}` },
  },
  {
    path: '/contact',
    name: 'contact',
    title: '聯絡我們',
    component: ContactView,
    meta: { layout: DefaultLayout, pageTitle: `聯絡我們｜${CompanyProfile.shortName}` },
  },
]

// path 對應中文 title
export const pathToTitleMap = Object.fromEntries(
  routeMetaList.flatMap((route) => {
    const parentPath = route.path.startsWith('/') ? route.path.slice(1) : route.path
    const entries: [string, string][] = []
    // 只有當父路由有直接的 component 且沒有設定 hideFromNav 才加入 map
    if (route.component && !route.meta.hideFromNav) {
      entries.push([parentPath || '/', route.title])
    }
    if (route.children) {
      entries.push(
        ...route.children
          .filter((child) => !child.meta.hideFromNav) // 過濾掉隱藏的子路由
          .map((child) => {
            const childPath = child.path.startsWith('/') ? child.path.slice(1) : child.path
            return [`${parentPath}/${childPath}`, child.title]
          }),
      )
    }
    return entries
  }),
)

// 導覽列連結
export const NavigationBarMenuLinks = routeMetaList
  .filter((r) => !r.meta?.hideFromNav) // 過濾掉父路由層級被隱藏的項目
  .map((route) => {
    const children = route.children
      ?.filter((child) => !child.meta?.hideFromNav) // 過濾掉子路由層級被隱藏的項目
      .map((child) => ({
        path: route.path + '/' + child.path, // 合成完整路徑
        name: child.title,
      }))

    return {
      path: route.path,
      name: route.title,
      children: children && children.length > 0 ? children : undefined, // 如果沒有可見的子選單，則不顯示 children 屬性
    }
  })
  .filter((link) => link.children || !link.path.includes('product')) // 過濾掉只有父路由但無子路由的 "產品" 項目，除非它是 "產品" 自身
