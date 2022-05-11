import type { App } from 'vue'
import List from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-list', List)
  }
}