import type { App } from 'vue'
import Text from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-text', Text)
  }
}