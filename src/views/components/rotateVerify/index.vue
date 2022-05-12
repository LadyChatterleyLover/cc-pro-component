<template>
  <el-button type="primary" @click="visible = true">点击验证</el-button>
  <el-dialog title="安全验证" v-model="visible" width="30%">
    <cc-rotate-verify
      src="https://v3.cn.vuejs.org/logo.png"
      @success="() => ElMessage.success('验证成功')"
      @fail="() => ElMessage.error('验证失败')"
    ></cc-rotate-verify>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus"
import { ref } from "vue"

const visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
