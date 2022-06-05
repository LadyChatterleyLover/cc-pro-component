<template>
  <el-card>
    <div>
      <div ref="el" style="height: 100px; width: 100px; border: 1px solid #eee"></div>
      <br />
      <el-button type="primary" style="border-bottom: 10px" @click="startCount">开始</el-button>
      <el-button type="primary" style="border-bottom: 10px" @click="pauseResume">暂停</el-button>
      <el-button type="primary" style="border-bottom: 10px" @click="reset">重置</el-button>
      <el-button type="primary" style="border-bottom: 10px" @click="update">修改</el-button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useCountup } from "@/hooks/useCountup"
import { ref } from "vue"


const el = ref()
const { start, pauseResume, reset, update } = useCountup({ target: el, endValue: 20000 })
const startCount = () => {
  start(() => {})
}
</script>

<style scoped></style>
