<template>
  <div>
    <el-button type="primary" @click="setWatermark" style="margin-right: 10px">全屏添加水印</el-button>
    <el-button type="primary" @click="clear">清除水印</el-button>
  </div>
  <br />
  <br />
  <div ref="el" style="width: 500px; height: 500px; border: 1px solid #eee"></div>
  <el-button type="primary" @click="s" style="margin-right: 10px">元素添加水印</el-button>
  <el-button type="primary" @click="c">清除水印</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useWatermark } from "@/hooks/useWatermark"


const { setWatermark, clear } = useWatermark("cc-pro-component")
const { setWatermark: s, clear: c, el } = useWatermark("cc-pro-component")
</script>

<style scoped>

</style>
