<template>
  <div class="cc-setting-drawer">
    <div class="cc-setting-drawer-handler" @click="toggle" :class="{ 'cc-setting-drawer-handler-open': visible }">
      <el-icon-setting v-if="!visible"></el-icon-setting>
      <el-icon-close v-else></el-icon-close>
    </div>
    <el-drawer v-model="visible" :show-close="false" :with-header="false">
      <h4>整体风格设置</h4>
      <div class="cc-setting-drawer-theme">
        <div class="cc-setting-drawer-theme-item cc-setting-drawer-theme-light" @click="clickModeItem('light')">
          <el-icon-check class="cc-setting-drawer-theme-icon" v-if="currentThemeMode === 'light'"></el-icon-check>
        </div>
        <div class="cc-setting-drawer-theme-item cc-setting-drawer-theme-dark" @click="clickModeItem('dark')">
          <el-icon-check class="cc-setting-drawer-theme-icon" v-if="currentThemeMode === 'dark'"></el-icon-check>
        </div>
      </div>
      <br />
      <h4>主题色</h4>
      <div class="cc-setting-drawer-color">
        <div
          class="cc-setting-drawer-color-item"
          @click="clickColorItem(item, index)"
          v-for="(item, index) in colorList"
          :key="index"
          :style="{ background: item }"
        >
          <el-icon-check v-if="currentColorIndex === index"></el-icon-check>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref<boolean>(false)
const currentColorIndex = ref<number>(0)
const currentThemeMode = ref<string>('light')
const colorList = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399', '#13c2c2', '#52c41a', '#2f54eb', '#722ed1']

const toggle = () => {
  visible.value = !visible.value
}

const clickColorItem = (item: string, index: number) => {
  currentColorIndex.value = index
  const el = document.documentElement
  getComputedStyle(el).getPropertyValue(`--el-color-primary`)
  el.style.setProperty('--el-color-primary', item)
  localStorage.setItem('themeColor', item)
}

const clickModeItem = (mode: string) => {
  currentThemeMode.value = mode
  localStorage.setItem('themeMode', mode)
  const html = document.getElementsByTagName('html')[0]
  if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

onMounted(() => {
  if (localStorage.getItem('themeColor')) {
    currentColorIndex.value = colorList.findIndex((i) => i === localStorage.getItem('themeColor'))
    const el = document.documentElement
    getComputedStyle(el).getPropertyValue(`--el-color-primary`)
    el.style.setProperty('--el-color-primary', localStorage.getItem('themeColor'))
  }
  if (localStorage.getItem('themeMode')) {
    currentThemeMode.value = localStorage.getItem('themeMode')!
  }
})
</script>

<style scoped lang="scss">
.cc-setting-drawer {
  &-handler {
    position: fixed;
    top: 240px;
    right: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    font-size: 16px;
    text-align: center;
    background-color: var(--el-color-primary);
    border-radius: 4px 0 0 4px;
    cursor: pointer;
    pointer-events: auto;
    color: #fff;
    transition: all 0.3s;
    svg {
      width: 20px;
      height: 20px;
    }
    &-open {
      right: 300px;
    }
  }
  &-theme {
    display: flex;
    align-items: center;
    min-height: 42px;
    &-item {
      position: relative;
      width: 44px;
      height: 36px;
      margin-right: 16px;
      overflow: hidden;
      background-color: #f0f2f5;
      border-radius: 4px;
      box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
      cursor: pointer;
    }
    &-light {
      &::before {
        content: '';
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 33%;
        height: 100%;
      }
      &::after {
        background: #fff;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
      }
    }
    &-dark {
      background: rgba(0, 21, 41, 0.85);
      &::before {
        content: '';
        background: rgba(0, 21, 41, 0.65);
        position: absolute;
        top: 0;
        left: 0;
        width: 33%;
      }
      &::after {
        content: '';
        background: rgba(0, 21, 41, 0.65);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25%;
      }
    }
    &-icon {
      position: absolute;
      right: 2px;
      bottom: 4px;
      font-weight: 700;
      font-size: 16px;
      pointer-events: none;
    }
  }
  &-color {
    display: flex;
    align-items: center;
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      margin-top: 8px;
      margin-right: 8px;
      color: #fff;
      font-weight: 700;
      border-radius: 2px;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
        color: #fff;
      }
    }
  }
}
</style>
