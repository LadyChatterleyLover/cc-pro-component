<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" @clickItem="clickItem"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
       <nav-list></nav-list>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useNavStore } from '@/stores/nav'
import {useRoute} from "vue-router"
import {find} from "@/utils"
import NavHeader from '@/components/layout/navHeader/index.vue'
import NavSide from '@/components/layout/navSide/index.vue'
import NavList from '@/components/layout/navList/index.vue'
import type { MenuItem } from '@/components/menu/src/types'
import { menuData } from '@/components/layout/navSide/config'


const store = useNavStore()
const route = useRoute()
const isCollapse = ref(false)

const clickItem = (item: MenuItem) => {
  store.pushNav(item)
}

onMounted(() => {
  const navList = localStorage.getItem('cc-admin-navList')
  if (!navList) {
    const current = find(menuData, route.path)
    let arr = [current]
    store.setNav(arr)
    localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
  }
})
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
