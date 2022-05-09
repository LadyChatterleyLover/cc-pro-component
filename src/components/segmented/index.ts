import type { App } from "vue"
import Segmented from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-segmented', Segmented)
  }
}
