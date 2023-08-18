import 'normalize.css'
import '@/assets/css/index.less'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import 'dayjs/locale/zh-cn'

import useAccountStore from './stores/account/account'

import mock from './mock'

const app = createApp(App)
app.use(createPinia())
// 动态注册路由
const accountStore = useAccountStore()
accountStore.loadLocalCacheAction()

app.use(router)
app.use(mock)
app.mount('#app')

// 导入所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
