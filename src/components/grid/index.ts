import type { App } from 'vue'
import Grid from './src/index.vue'
import GridItem from './src/item.vue'


export default {
  install(app: App) {
    app.component('cc-grid', Grid)
    app.component('cc-grid-item', GridItem)
  }
}