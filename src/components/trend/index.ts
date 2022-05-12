import type { App } from 'vue'
import trend from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-trend', trend)
  }
}