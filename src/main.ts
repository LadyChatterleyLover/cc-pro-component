import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { transformIconName } from './utils/transformIconName'
import * as Icons from '@element-plus/icons-vue'
import CcProComponent from './components'

const app = createApp(App)

for (let i in Icons) {
  // 注册全部组件
  app.component(`el-icon-${transformIconName(i)}`, (Icons as any)[i])
}

app.use(router)
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn
})
app.use(CcProComponent)

app.mount('#app')
