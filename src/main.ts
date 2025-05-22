import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createHead } from '@vueuse/head'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')
