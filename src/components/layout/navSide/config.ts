export interface MenuItem {
  icon?: string
  name: string
  index: string
  children?: MenuItem[]
}

export const menuData: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: 'HomeFilled',
    index: '/dashboard',
    children: [
      {
        name: '分析页',
        index: '/dashboard/analysis'
      },
      {
        name: '工作台',
        index: '/dashboard/workplace'
      }
    ]
  },
  {
    icon: 'Document',
    name: '组件',
    index: '/component',
    children: [
      {
        name: '图标选择器',
        index: '/component/chooseIcon',
      },
      {
        name: '省市区选择',
        index: '/component/chooseArea',
      },
      {
        name: '趋势标记',
        index: '/components/trend'
      },
      {
        name: '时间选择',
        index: '/components/chooseTime'
      },
      {
        name: '导航菜单',
        index: '/component/menu',
      },
      {
        name: '头像组合',
        index: '/component/avatar',
      },
      {
        name: '评论',
        index: '/component/comment',
      },
      {
        name: '倒计时',
        index: '/component/countdown',
      },
      {
        name: '数据列表',
        index: '/component/dataList',
      },
      {
        name: '旋转验证码',
        index: '/component/rotateVerify',
      },
      {
        name: '滑动验证码',
        index: '/component/slideVerify',
      },
      {
        name: '分割面板',
        index: '/component/split',
      },
      {
        name: '数字统计',
        index: '/component/statistic',
      },
      {
        name: '分段器',
        index: '/component/segmented',
      },
      {
        name: '文本',
        index: '/component/text',
      },
      // {
      //   icon: 'Expand',
      //   name: '伸缩框',
      //   index: '/component/resizeBox',
      // },
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
      },
      {
        name: 'countup',
        index: '/feat/countup',
      },
      {
        name: 'ripple',
        index: '/feat/ripple',
      },
      {
        name: 'hooks表格',
        index: '/feat/hooksTable',
      },
      {
        name: '水印',
        index: '/feat/watermark',
      },
      {
        name: '全屏',
        index: '/feat/fullScreen',
      },
    ],
  },
  {
    name: '高级组件',
    icon: 'Grid',
    index: '/proComponent',
    children: [
      {
        name: '高级卡片',
        index: '/proComponent/card',
      },
      {
        name: '选项卡',
        index: '/proComponent/statisticCard',
      },
      {
        name: '多选卡片',
        index: '/proComponent/checkCard',
      },
      {
        name: '高级列表',
        index: '/proComponent/list',
      },
      {
        name: '骨架屏',
        index: '/proComponent/skeleton',
      },
    ],
  },
]
