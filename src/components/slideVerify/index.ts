import type { App } from 'vue'
import slideVerify from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-slide-verify', slideVerify)
  }
}