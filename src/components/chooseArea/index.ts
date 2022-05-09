import type { App } from 'vue'
import Area from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-choose-area', Area)
  },
}
