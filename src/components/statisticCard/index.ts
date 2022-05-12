import type { App } from 'vue'
import StatisticCard from './src/index.vue'
import StatisticCardGroup from './src/group.vue'

export default {
  install(app: App) {
    app.component('cc-statistic-card', StatisticCard)
    app.component('cc-statistic-card-group', StatisticCardGroup)
  },
}
