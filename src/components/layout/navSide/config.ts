export interface MenuItem {
  icon: string
  name: string
  index: string
  children?: MenuItem[]
}

export const menuData: MenuItem[] = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/',
  },
  {
    icon: 'Document',
    name: '组件',
    index: '/component',
    children: [
      {
        icon: 'Check',
        name: '图标选择器',
        index: '/component/chooseIcon',
      },
      {
        icon: 'Location',
        name: '省市区选择',
        index: '/component/chooseArea',
      },
      {
        icon: 'Menu',
        name: '导航菜单',
        index: '/component/menu',
      },
      {
        icon: 'User',
        name: '头像组合',
        index: '/component/avatar',
      },
      {
        icon: 'Operation',
        name: '评论',
        index: '/component/comment',
      },
      {
        icon: 'Operation',
        name: '评论',
        index: '/component/comment',
      },
      {
        icon: 'Clock',
        name: '倒计时',
        index: '/component/countdown',
      },
      {
        icon: 'Clock',
        name: '数据列表',
        index: '/component/dataList',
      },
      {
        icon: 'Loading',
        name: '旋转验证码',
        index: '/component/rotateVerify',
      },
      {
        icon: 'Open',
        name: '滑动验证码',
        index: '/component/slideVerify',
      },
    ],
  },
  {
    icon: 'Folder',
    name: '功能',
    index: '/feat',
    children: [
      {
        name: 'clickOutside',
        index: '/feat/clickOutside',
        icon: 'Pointer',
      },
      {
        name: 'countup',
        index: '/feat/countup',
        icon: 'Plus',
      },
      {
        name: 'ripple',
        index: '/feat/ripple',
        icon: 'DArrowRight',
      },
      {
        name: 'hooks表格',
        index: '/feat/hooksTable',
        icon: 'Document',
      },
      {
        name: '水印',
        index: '/feat/watermark',
        icon: 'Film',
      },
      {
        name: '全屏',
        index: '/feat/fullScreen',
        icon: 'FullScreen',
      },
    ],
  },
]
