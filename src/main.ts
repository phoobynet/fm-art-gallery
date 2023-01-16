import { createApp } from 'vue'
import '@/style.scss'
import App from '@/App.vue'
import { router } from '@/routes/router'

createApp(App).use(router).mount('#app')
