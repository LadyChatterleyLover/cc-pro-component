import type { App } from "vue"
import Icon from "./chooseIcon"
import Area from "./chooseArea"
import Menu from "./menu"
import AvatarGroup from "./avatarGroup"
import Comment from "./comment"
import CountDown from "./countdown"
import dataList from "./dataList"
import rotateVerify from "./rotateVerify"
import slideVerify from './slideVerify'

const components = [
  Icon,
  Area,
  Menu,
  AvatarGroup,
  Comment,
  CountDown,
  dataList,
  rotateVerify,
  slideVerify
]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  },
}
