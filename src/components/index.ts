// import { App } from 'vue'
import Icon from './choosIcon'

const components = [
  Icon
]

export default {
  install(app: any) {
    components.map(c => {
      app.use(c)
    })
  }
}