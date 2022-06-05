<template>
  <el-card>
    <div ref="el" class="box"></div>
  </el-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useRipple } from '@/hooks/useRipple'

const el = ref()

useRipple(el)
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
}
</style>
