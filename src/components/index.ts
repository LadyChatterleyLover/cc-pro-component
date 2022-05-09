import type { App } from 'vue'
import Icon from './chooseIcon'
import Area from './chooseArea'
import Menu from './menu'
import AvatarGroup from './avatarGroup'
import Comment from './comment'

const components = [Icon, Area, Menu, AvatarGroup, Comment]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  },
}
