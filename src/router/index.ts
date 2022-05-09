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
          path: '/chooseIcon',
          name: 'chooseIcon',
          component: () => import('@/views/chooseIcon/index.vue'),
          meta: {
            title: '图标选择器',
          },
        },
        {
          path: '/chooseArea',
          name: 'chooseArea',
          component: () => import('@/views/chooseArea/index.vue'),
          meta: {
            title: '省市区选择器',
          },
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('@/views/menu/index.vue'),
          meta: {
            title: '导航菜单',
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
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
