import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 800, once: false, offset: 50 })

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createHead } from '@vueuse/head'

router.afterEach((to) => {
  const canonical = document.querySelector("link[rel='canonical']")
  const base = 'https://yuanpinxiang.com'
  const href = base + to.fullPath.split('?')[0]

  if (canonical) {
    canonical.setAttribute('href', href)
  } else {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', href)
    document.head.appendChild(link)
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')
