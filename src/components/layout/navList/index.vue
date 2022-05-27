<template>
  <div class="cc-nav-container">
    <!-- <div
        class="cc-nav-container-item"
        :class="{ 'cc-nav-container-item-active': $route.path === item.index }"
        @click="router.push(item.index)"
      >
        <div v-if="$route.path === item.index" class="cc-nav-container-item-circle"></div>
        <div>{{ item.name }}</div>
        <div @click.stop="close(item)">
          <el-icon-close></el-icon-close>
        </div>
      </div> -->
    <el-tabs type="card" editable v-model="$route.path" @tab-remove="close" @tab-click="clickItem">
      <el-tab-pane v-for="(item, index) in navList" :key="item.index" :name="item.index">
        <template #label>
          <el-dropdown trigger="contextmenu" @command="handleCommand($event, item)">
            <div class="label" :class="{ active: $route.path === item.index }">{{ item.name }}</div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="refresh">刷新</el-dropdown-item>
                <el-dropdown-item command="closeLeft">关闭左侧</el-dropdown-item>
                <el-dropdown-item command="closeRight">关闭右侧</el-dropdown-item>
                <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNavStore } from '@/stores/nav'
import { ElMessage, type TabsPaneContext } from 'element-plus'
import type { MenuItem } from '../navSide/config'

const store = useNavStore()
const router = useRouter()
const route = useRoute()
const navList = computed(() => store.navList)

const handleCommand = (command: string, item: MenuItem) => {
  let index = navList.value.findIndex((i: any) => i.index === item.index)

  if (command === 'refresh') {
    window.location.reload()
  }
  if (command === 'closeLeft') {
    if (index === 0) {
      ElMessage.warning('已经是第一个啦')
    } else {
      let arr = navList.value.filter((_: any, idx: number) => {
        return idx >= index
      })
      store.setNav(arr)
      localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
      if (!arr.find((i: MenuItem) => i.index.includes(route.path))) {
        let index = arr.findIndex((i) => i.index === item.index)
        router.push(arr[index].index)
      }
    }
  }
  if (command === 'closeRight') {
    if (index === navList.value.length - 1) {
      ElMessage.warning('已经是最后一个啦')
    } else {
      let arr = navList.value.filter((_: any, idx: number) => {
        return idx <= index
      })
      store.setNav(arr)
      localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
      if (!arr.find((i: MenuItem) => i.index.includes(route.path))) {
        let index = arr.findIndex((i) => i.index === item.index)
        router.push(arr[index].index)
      }
    }
  }
  if (command === 'closeOther') {
    if (navList.value.length === 1) {
      ElMessage.warning('没有其他啦')
    } else {
      let arr = navList.value.filter((_: any, idx: number) => {
        return idx === index
      })
      store.setNav(arr)
      localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
    }
  }
}

const clickItem = (pane: TabsPaneContext) => {
  router.push(pane.paneName as string)
}

const close = (name: string) => {
  console.log(name)
  let index = navList.value.findIndex((i: any) => i.index === name)
  console.log(index)
  let current = navList.value.find(() => route.path === name)
  if (navList.value.length === 1) {
    let arr = [
      {
        name: '分析页',
        index: '/dashboard/analysis',
      },
    ]
    router.push('/dashboard/analysis')
    store.setNav(arr)
    localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
  } else {
    let arr = navList.value.filter((i: any) => {
      return i.index !== name
    })
    store.setNav(arr)
    localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
    if (current) {
      if (index !== 0) {
        router.push(navList.value[index - 1].index)
      } else {
        router.push(navList.value[index + 1].index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cc-nav-container {
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  &-item {
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    height: 26px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    font-size: 12px;
    cursor: pointer;

    &-circle {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #fff;
      position: relative;
      top: -1px;
      margin-right: 4px;
    }

    &-active {
      background: #1890ff;
      color: #fff;
    }
  }
  .label {
    height: 42px;
    display: flex;
    align-items: center;
  }
}
.active {
  color: #409eff !important;
}

svg {
  width: 1em;
  height: 1em;
}
</style>
