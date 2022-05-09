import type { App } from 'vue'
import AvatarGroup from './src/index.vue'

export default {
  install(app: App) {
    app.component('cc-avatar-group', AvatarGroup)
  },
}
