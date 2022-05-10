import type { App } from 'vue'
import ResizeBox from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-resize-box', ResizeBox)
  },
}
