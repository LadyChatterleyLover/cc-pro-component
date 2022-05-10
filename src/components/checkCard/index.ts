import type { App } from 'vue'
import CheckCard from './src/index.vue'
import CheckCardGroup from './src/group.vue'

export default {
  install(app: App) {
    app.component('cc-check-card', CheckCard)
    app.component('cc-check-card-group', CheckCardGroup)
  },
}
