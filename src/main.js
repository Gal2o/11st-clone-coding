import { createApp } from 'vue'
import App from '~/App.vue'
import store from '~/store'
import fetch from '~/plugins/fetch'
import search from '~/plugins/search'
import lazyLoad from '~/plugins/lazyLoad'

const app = createApp(App)
app.use(store)
app.use(fetch)
app.use(search)
app.use(lazyLoad)
app.mount('#app')
