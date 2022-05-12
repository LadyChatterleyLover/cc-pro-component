<template>
  <div ref="el" class="box"></div>
</template>

<script setup lang="ts">
import { useRipple } from '@/hooks/useRipple'

const [el] = useRipple()
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
}
</style>
