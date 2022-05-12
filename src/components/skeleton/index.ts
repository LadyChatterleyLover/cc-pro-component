import type { App } from "vue"
import Skeleton from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-skeleton', Skeleton)
  }
}
