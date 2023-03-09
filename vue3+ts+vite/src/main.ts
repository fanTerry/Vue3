import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' // 导入pinia

const app = createApp(App)
app.use(router)
app.use(createPinia()) // 注册pinia
app.mount('#app')
