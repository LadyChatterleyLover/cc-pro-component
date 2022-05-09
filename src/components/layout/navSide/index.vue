<template>
  <div class="side">
    <cc-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></cc-menu>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()

const data = [
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
    ],
  },
]
</script>

<style scoped lang="scss">
.side {
  height: 100%;
  border-right: 1px solid #eee;
}
</style>
