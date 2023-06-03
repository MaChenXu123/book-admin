import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app=createApp(App)
    app.use(router).mount('#app')
    app.use(naive).use(ElementPlus).use(store)
