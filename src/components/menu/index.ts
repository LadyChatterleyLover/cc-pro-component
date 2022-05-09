import type { App } from 'vue'

import Menu from './src/index'

export default {
  install(app: App) {
    app.component('cc-menu', Menu)
  },
}
