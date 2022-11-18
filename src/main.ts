import { createApp } from 'vue'
import './style.css' //css全局样式引入
// el组件引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入router
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'


// createApp(App).mount('#app')
const app = createApp(App)
// EL
app.use(ElementPlus)
// el icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// pinia
app.use(createPinia())
app.use(router).mount('#app')
