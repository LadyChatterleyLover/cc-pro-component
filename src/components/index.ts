import type { App } from 'vue'
import Icon from './choosIcon'
import Area from './chooseArea'
import Menu from './menu'

const components = [Icon, Area, Menu]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  },
}
