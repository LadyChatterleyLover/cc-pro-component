import type { App } from 'vue'
import dataList from './src/index.vue'
import dataListItem from './src/item.vue'
import dataListItemMeta from './src/itemMeta.vue'

export default {
  install(app: App) {
    app.component('cc-data-list', dataList)
    app.component('cc-data-list-item', dataListItem)
    app.component('cc-data-list-item-meta', dataListItemMeta)
  },
}
