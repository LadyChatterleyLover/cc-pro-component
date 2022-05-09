import type { App } from 'vue'
import countdown from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-countdown', countdown)
  }
}