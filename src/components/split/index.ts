import type { App } from 'vue'
import split from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-split', split)
  }
}