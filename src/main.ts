import 'normalize.css'
import '@/assets/css/index.less'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

// 导入所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
