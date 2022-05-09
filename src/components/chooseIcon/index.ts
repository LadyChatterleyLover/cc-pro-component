import type { App } from 'vue'
import Icon from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-choose-icon', Icon)
  },
}
