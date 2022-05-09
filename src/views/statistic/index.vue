<template>
  <div>
    <cc-statistic title="Downloads" :value="125670" show-group-separator></cc-statistic>
    <br />
    <cc-statistic extra="Comments" :value="40509" :precision="2"></cc-statistic>
  </div>
  <br />
  <cc-statistic title="Downloads" :value="125670" show-group-separator>
    <template #prefix>
      <el-icon-top></el-icon-top>
    </template>
    <template #suffix>%</template>
  </cc-statistic>
  <br />
  <cc-statistic
    title="Downloads"
    :value="125670"
    show-group-separator
    :precision="2"
    :start="start"
    animation
  ></cc-statistic>
  <el-button size="small" @click="start = true">start</el-button>
  <br />
  <br />
  <span>加载状态，两秒之后渲染</span>
  <cc-statistic title="Downloads" :loading="loading" :value="20000" show-group-separator></cc-statistic>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const start = ref(false)
const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
