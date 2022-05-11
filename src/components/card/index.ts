import type { App } from 'vue'
import Card from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-card', Card)
  },
}
