import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App)

app.use(VueCookieNext)

app.use(VueGtag, {
    config: { id: 'G-YOUR-ID-HERE' },
    enabled: false,
})

app.provide('gtag', app.config.globalProperties.$gtag)

app.mount('#app')