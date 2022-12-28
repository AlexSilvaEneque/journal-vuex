import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import store from './store'

import './styles/style.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
