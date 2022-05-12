<template>
  <div>
    <el-button type="primary" @click="enterFullscreen">全屏</el-button>
    <el-button type="primary" @click="exitFullscreen" style="margin-left: 20px">退出全屏</el-button>
    <el-button type="primary" @click="toggleFullscreen" style="margin-left: 20px">切换全屏</el-button>
  </div>
  <br />
  <div>
    <img ref="el" src="../../assets/logo.png" alt="" />
    <el-button type="primary" @click="toggle">图片全屏</el-button>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@/hooks/useFullscreen'

const { enterFullscreen, exitFullscreen, toggleFullscreen } = useFullscreen()
const { toggleFullscreen: toggle, el } = useFullscreen()
</script>

<style scoped></style>
