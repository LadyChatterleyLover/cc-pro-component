<template>
  <div>
    <el-button type="primary" @click="setWatermark" style="margin-right: 10px">添加水印</el-button>
    <el-button type="primary" @click="clear">清除水印</el-button>
  </div>
</template>

<script setup lang="ts">
import { useWatermark } from '@/hooks/useWatermark'
const { setWatermark, clear } = useWatermark('cc-pro-component')
</script>

<style scoped></style>
