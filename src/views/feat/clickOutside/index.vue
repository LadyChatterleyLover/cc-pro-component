<template>
  <el-card>
    <div>
      <button ref="box">box</button>
      <p>{{ count }}</p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useClickOutside } from "@/hooks/useClickOutside"

const count = ref(0)
const box = ref()

useClickOutside({
  target: box,
  callback: () => {
    count.value++
  },
})
</script>

<style scoped lang="scss"></style>
