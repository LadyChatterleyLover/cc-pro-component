<template>
  <div class="demo">
    <div class="demo-title">基础用法</div>
    <div class="demo-item">
      <cc-countdown :time="time" @change="handleChange" @end="handleEnd"></cc-countdown>
    </div>
  </div>

  <div class="demo">
    <div class="demo-title">分隔符为中文</div>
    <div class="demo-item">
      <cc-countdown separator="zh" :time="time"></cc-countdown>
    </div>
  </div>

  <div class="demo">
    <div class="demo-title">手动触发</div>
    <div class="demo-item">
      <cc-countdown separator="zh" :time="time" :start="start"></cc-countdown>
      <el-button type="primary" size="mini" @click="start = true">start</el-button>
    </div>
  </div>

  <div class="demo">
    <div class="demo-title">自定义样式</div>
    <div class="demo-item">
      <cc-countdown :time="time">
        <template #default="{ timeData }">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </cc-countdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let time = ref<number>(1000 * 60 * 60 * 3)
let start = ref(false)

let handleChange = (val: number) => {
  // console.log(val)
}
let handleEnd = () => {
  // console.log('end')
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  &-title {
    padding: 10px;
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
