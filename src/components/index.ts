import type { App } from 'vue'
import Icon from './choosIcon'
import Area from './chooseArea'
import Menu from './menu'
import AvatarGroup from './avatarGroup'

const components = [Icon, Area, Menu, AvatarGroup]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  },
}
