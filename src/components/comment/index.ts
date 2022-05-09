import type { App } from 'vue'
import comment from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-comment', comment)
  }
}