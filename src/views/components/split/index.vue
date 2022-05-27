<template>
  <el-card>
    <h3>基础使用</h3>
    <br />
    <div style="height: 200px; width: 500px; background: #f0f0f0">
      <cc-split v-model:size="size1">
        <template #left>left</template>
        <template #right>right</template>
      </cc-split>
    </div>
    <br />
    <br />
    <h3>垂直方向</h3>
    <br />
    <div style="height: 200px; width: 500px; background: #f0f0f0">
      <cc-split v-model:size="size2" direction="vertical">
        <template #left>left</template>
        <template #right>right</template>
      </cc-split>
    </div>
    <br />
    <br />
    <h3>组合使用</h3>
    <br />
    <div style="height: 200px; width: 500px; background: #f0f0f0">
      <cc-split v-model:size="size2">
        <template #left>left</template>
        <template #right>
          <cc-split v-model:size="size2" direction="vertical">
            <template #left>top</template>
            <template #right>bottom</template>
          </cc-split>
        </template>
      </cc-split>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let size1 = ref(0.5)
let size2 = ref(0.5)
</script>

<style lang="scss" scoped></style>
