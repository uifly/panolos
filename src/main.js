import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index'
import i18n from './locales/index'

import '@scss/base.scss'

createApp(App).use(i18n).use(routers).mount('#app')
