import { App } from 'vue'
import statistic from './src/index.vue'


export default {
  install(app: App) {
    app.component('cc-statistic', statistic)
  }
}