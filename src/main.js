import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import './assets/css/input.css'

const app = createApp(App)

const emitter = mitt()

app.provide('emitter', emitter)
app.use(createPinia())
app.use(router)

app.mount('#app')
