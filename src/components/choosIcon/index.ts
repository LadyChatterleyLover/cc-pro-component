// import { App } from 'vue'
import Icon from './index.vue'

export default {
  install(app: any) {
    app.component('cc-choose-icon', Icon)
  }
}