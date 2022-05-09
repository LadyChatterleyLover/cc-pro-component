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
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea',
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu',
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
    ],
  },
]
