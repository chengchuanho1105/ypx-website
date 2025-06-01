// pageMate.ts
import { CompanyProfile } from '@/config/companyProfile'
import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

const DefaultLayout = defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
const TestLayout = defineAsyncComponent(() => import('@/layouts/TestLayout.vue'))

import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue' // 重新匯入 ProductView
import ProductListView from '@/views/ProductListView.vue'
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

type RouteMetaItem = {
  path: string
  name: string
  title: string
  component: Component
  meta: RouteMeta
  children?: RouteMetaItem[]
}

export const routeMetaList: Array<{
  path: string
  name: string
  title: string
  component: Component
  meta: RouteMeta
  children?: RouteMetaItem[]
}> = [
  {
    path: '/',
    name: 'home',
    title: '首頁',
    component: HomeView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `首頁｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    title: '關於我們',
    component: AboutView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `關於我們｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/product',
    name: 'product',
    title: '產品資訊',
    component: ProductView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `產品資訊｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
    children: [
      {
        path: 'productList',
        name: 'productList',
        title: '產品列表',
        component: ProductListView,
        meta: {
          layout: DefaultLayout,
          pageTitle: `產品列表｜${CompanyProfile.business.shortName}`,
          hideFromNav: false,
        },
      },
      {
        path: 'productList/:id',
        name: 'productDetail',
        title: '產品詳情',
        component: () => import('@/views/ProductDetailView.vue'),
        meta: {
          layout: DefaultLayout,
          pageTitle: `產品詳情｜${CompanyProfile.business.shortName}`,
          hideFromNav: true,
        },
      },
      {
        path: 'productCertifications',
        name: 'productCertifications',
        title: '產品認證',
        component: ProductCertificationsView,
        meta: {
          layout: DefaultLayout,
          pageTitle: `產品認證｜${CompanyProfile.business.shortName}`,
          hideFromNav: false,
        },
      },
    ],
  },
  {
    path: '/media',
    name: 'media',
    title: '媒體介紹',
    component: MediaView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `媒體介紹｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/news',
    name: 'news',
    title: '最新消息',
    component: NewsView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `最新消息｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    title: '最新消息詳情',
    component: () => import('@/views/NewsDetailView.vue'),
    meta: {
      layout: DefaultLayout,
      pageTitle: `最新消息詳情｜${CompanyProfile.business.shortName}`,
      hideFromNav: true,
    },
  },
  {
    path: '/faq',
    name: 'faq',
    title: '常見問題',
    component: FAQView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `常見問題｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    title: '聯絡我們',
    component: ContactView,
    meta: {
      layout: DefaultLayout,
      pageTitle: `聯絡我們｜${CompanyProfile.business.shortName}`,
      hideFromNav: false,
    },
  },
  {
    path: '/test',
    name: 'test',
    title: '測試頁面',
    component: () => import('@/views/TestView.vue'),
    meta: {
      layout: TestLayout,
      pageTitle: '測試頁面',
      hideFromNav: true,
    },
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
            return [[`${parentPath}/${childPath}`, child.title]] as [string, string][]
          })
          .flat(),
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
