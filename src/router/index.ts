import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard/analysis'
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/dashboard/analysis',
          component: () => import('../views/dashboard/analysis/index.vue'),
          meta: {
            title: '分析页'
          }
        },
        {
          path: '/dashboard/workplace',
          component: () => import('../views/dashboard/workplace/index.vue'),
          meta: {
            title: '工作台'
          }
        },
        {
          path: '/components/trend',
          component: () => import('../views/components/trend/index.vue'),
          meta: {
            title: '趋势标记'
          }
        },
        {
          path: '/components/chooseTime',
          component: () => import('../views/components/chooseTime/index.vue'),
          meta: {
            title: '时间选择器'
          }
        },
        {
          path: '/component/chooseIcon',
          name: 'chooseIcon',
          component: () => import('@/views/components/chooseIcon/index.vue'),
          meta: {
            title: '图标选择器',
          },
        },
        {
          path: '/component/chooseArea',
          name: 'chooseArea',
          component: () => import('@/views/components/chooseArea/index.vue'),
          meta: {
            title: '省市区选择器',
          },
        },
        {
          path: '/component/menu',
          name: 'menu',
          component: () => import('@/views/components/menu/index.vue'),
          meta: {
            title: '导航菜单',
          },
        },
        {
          path: '/component/avatar',
          name: 'avatar',
          component: () => import('@/views/components/avatar/index.vue'),
          meta: {
            title: '头像组合',
          },
        },
        {
          path: '/component/comment',
          name: 'comment',
          component: () => import('@/views/components/comment/index.vue'),
          meta: {
            title: '评论',
          },
        },
        {
          path: '/component/countdown',
          name: 'countdown',
          component: () => import('@/views/components/countdown/index.vue'),
          meta: {
            title: '倒计时',
          },
        },
        {
          path: '/component/dataList',
          name: 'dataList',
          component: () => import('@/views/components/dataList/index.vue'),
          meta: {
            title: '倒计时',
          },
        },
        {
          path: '/component/rotateVerify',
          name: 'rotateVerify',
          component: () => import('@/views/components/rotateVerify/index.vue'),
          meta: {
            title: '旋转验证码',
          },
        },
        {
          path: '/component/slideVerify',
          name: 'slideVerify',
          component: () => import('@/views/components/slideVerify/index.vue'),
          meta: {
            title: '滑动验证码',
          },
        },
        {
          path: '/component/split',
          name: 'split',
          component: () => import('@/views/components/split/index.vue'),
          meta: {
            title: '分割面板',
          },
        },
        {
          path: '/component/statistic',
          name: 'statistic',
          component: () => import('@/views/components/statistic/index.vue'),
          meta: {
            title: '数字统计',
          },
        },
        {
          path: '/component/segmented',
          name: 'segmented',
          component: () => import('@/views/components/segmented/index.vue'),
          meta: {
            title: '分段器',
          },
        },
        {
          path: '/component/text',
          name: 'text',
          component: () => import('@/views/components/text/index.vue'),
          meta: {
            title: '文本',
          },
        },
        {
          path: '/component/resizeBox',
          name: 'resizeBox',
          component: () => import('@/views/component/resizeBox/index.vue'),
          meta: {
            title: '伸缩框',
          },
        },
        {
          path: '/proComponent/statisticCard',
          name: 'statisticCard',
          component: () => import('@/views/proComponent/statisticCard/index.vue'),
          meta: {
            title: '选项卡',
          },
        },
        {
          path: '/proComponent/card',
          name: 'card',
          component: () => import('@/views/proComponent/card/index.vue'),
          meta: {
            title: '高级卡片',
          },
        },
        {
          path: '/proComponent/checkCard',
          name: 'checkCard',
          component: () => import('@/views/proComponent/checkCard/index.vue'),
          meta: {
            title: '多选卡片',
          },
        },
        {
          path: '/proComponent/list',
          name: 'list',
          component: () => import('@/views/proComponent/list/index.vue'),
          meta: {
            title: '高级列表',
          },
        },
        {
          path: '/proComponent/skeleton',
          name: 'skeleton',
          component: () => import('@/views/proComponent/skeleton/index.vue'),
          meta: {
            title: '骨架屏',
          },
        },
        {
          path: '/feat/clickOutside',
          name: 'clickOutside',
          component: () => import('@/views/feat/clickOutside/index.vue'),
          meta: {
            title: 'clickOutside',
          },
        },
        {
          path: '/feat/countup',
          name: 'countup',
          component: () => import('@/views/feat/countup/index.vue'),
          meta: {
            title: '数字自增长',
          },
        },
        {
          path: '/feat/ripple',
          name: 'ripple',
          component: () => import('@/views/feat/ripple/index.vue'),
          meta: {
            title: '水波纹',
          },
        },
        {
          path: '/feat/hooksTable',
          name: 'hooksTable',
          component: () => import('@/views/feat/table/tableView.vue'),
          meta: {
            title: 'hooks表格',
          },
        },
        {
          path: '/feat/watermark',
          name: 'watermark',
          component: () => import('@/views/feat/watermark/index.vue'),
          meta: {
            title: '水印',
          },
        },
        {
          path: '/feat/fullScreen',
          name: 'fullScreen',
          component: () => import('@/views/feat/fullScreen/index.vue'),
          meta: {
            title: '全屏',
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string + ' - Cc Admin'
  next()
})

export default router
