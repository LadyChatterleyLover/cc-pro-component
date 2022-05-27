<template>
  <el-card>
    <div style="background: #f8f8f8">
      <div class="flex">
        <cc-slide-verify ref="slideVerify" @success="success"></cc-slide-verify>
        <br />
        <div class="ml-2">
          <el-button type="primary" size="small" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const slideVerify = ref<any>(null)

const success = () => {
  ElMessage.success('验证成功')
}
const reset = () => {
  slideVerify.value.reset()
}
</script>

<style lang="scss" scoped></style>
