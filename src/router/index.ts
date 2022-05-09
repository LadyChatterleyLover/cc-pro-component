import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            title: '首页',
          },
        },
        {
          path: '/component/chooseIcon',
          name: 'chooseIcon',
          component: () => import('@/views/chooseIcon/index.vue'),
          meta: {
            title: '图标选择器',
          },
        },
        {
          path: '/component/chooseArea',
          name: 'chooseArea',
          component: () => import('@/views/chooseArea/index.vue'),
          meta: {
            title: '省市区选择器',
          },
        },
        {
          path: '/component/menu',
          name: 'menu',
          component: () => import('@/views/menu/index.vue'),
          meta: {
            title: '导航菜单',
          },
        },
        {
          path: '/component/avatar',
          name: 'avatar',
          component: () => import('@/views/avatar/index.vue'),
          meta: {
            title: '头像组合',
          },
        },
        {
          path: '/component/comment',
          name: 'comment',
          component: () => import('@/views/comment/index.vue'),
          meta: {
            title: '评论',
          },
        },
        {
          path: '/component/countdown',
          name: 'countdown',
          component: () => import('@/views/countdown/index.vue'),
          meta: {
            title: '倒计时',
          },
        },
        {
          path: '/component/dataList',
          name: 'dataList',
          component: () => import('@/views/dataList/index.vue'),
          meta: {
            title: '倒计时',
          },
        },
        {
          path: '/component/rotateVerify',
          name: 'rotateVerify',
          component: () => import('@/views/rotateVerify/index.vue'),
          meta: {
            title: '旋转验证码',
          },
        },
        {
          path: '/component/slideVerify',
          name: 'slideVerify',
          component: () => import('@/views/slideVerify/index.vue'),
          meta: {
            title: '滑动验证码',
          },
        },
        {
          path: '/component/split',
          name: 'split',
          component: () => import('@/views/split/index.vue'),
          meta: {
            title: '分割面板',
          },
        },
        {
          path: '/component/statistic',
          name: 'statistic',
          component: () => import('@/views/statistic/index.vue'),
          meta: {
            title: '数字统计',
          },
        },
        {
          path: '/component/segmented',
          name: 'statistic',
          component: () => import('@/views/segmented/index.vue'),
          meta: {
            title: '分段器',
          },
        },
        {
          path: '/component/text',
          name: 'text',
          component: () => import('@/views/text/index.vue'),
          meta: {
            title: '文本',
          },
        },
        {
          path: '/feat/clickOutside',
          name: 'clickOutside',
          component: () => import('@/views/clickOutside/index.vue'),
          meta: {
            title: 'clickOutside',
          },
        },
        {
          path: '/feat/countup',
          name: 'countup',
          component: () => import('@/views/countup/index.vue'),
          meta: {
            title: '数字自增长',
          },
        },
        {
          path: '/feat/ripple',
          name: 'ripple',
          component: () => import('@/views/ripple/index.vue'),
          meta: {
            title: '水波纹',
          },
        },
        {
          path: '/feat/hooksTable',
          name: 'hooksTable',
          component: () => import('@/views/table/tableView.vue'),
          meta: {
            title: 'hooks表格',
          },
        },
        {
          path: '/feat/watermark',
          name: 'watermark',
          component: () => import('@/views/watermark/index.vue'),
          meta: {
            title: '水印',
          },
        },
        {
          path: '/feat/fullScreen',
          name: 'fullScreen',
          component: () => import('@/views/fullScreen/index.vue'),
          meta: {
            title: '全屏',
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
