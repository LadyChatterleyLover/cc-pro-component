import type { App } from 'vue'
import Icon from './choosIcon'
import Area from './chooseArea'
import Menu from './menu'
import AvatarGroup from './avatarGroup'
import Comment from './comment'
import CountDown from './countdown'
import DataList from './dataList'
import RotateVerify from './rotateVerify'
import SlideVerify from './slideVerify'
import Split from './split'
import Statistic from './statistic'
import Segmented from './segmented'
import Text from './text'
import ResizeBox from './resizeBox'
import checkCard from './checkCard'
import Card from './card'
import List from './list'

const components = [
  Icon,
  Area,
  Menu,
  AvatarGroup,
  Comment,
  CountDown,
  DataList,
  RotateVerify,
  SlideVerify,
  Split,
  Statistic,
  Segmented,
  Text,
  ResizeBox,
  checkCard,
  Card,
  List
]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  },
}
