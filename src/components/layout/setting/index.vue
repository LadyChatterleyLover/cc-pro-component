<template>
  <div class="cc-setting-drawer">
    <div class="setting-handler" @click="toggle" :class="{ 'setting-handler-open': visible }">
      <el-icon-setting v-if="!visible"></el-icon-setting>
      <el-icon-close v-else></el-icon-close>
    </div>
    <el-drawer v-model="visible" :show-close="false" :with-header="false">
      <h4>主题色</h4>
      <div class="color">
        <div
          class="color-item"
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
onMounted(() => {
  if (localStorage.getItem('themeColor')) {
    currentColorIndex.value = colorList.findIndex((i) => i === localStorage.getItem('themeColor'))
    const el = document.documentElement
    getComputedStyle(el).getPropertyValue(`--el-color-primary`)
    el.style.setProperty('--el-color-primary', localStorage.getItem('themeColor'))
  }
})
</script>

<style scoped lang="scss">
.setting-handler {
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
.color {
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
</style>
