import type { App } from 'vue'
import rotateVerify from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-rotate-verify', rotateVerify)
  }
}