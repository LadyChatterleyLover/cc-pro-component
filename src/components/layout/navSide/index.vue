<template>
  <div class="side">
    <cc-menu :collapse="collapse" :data="menuData" router :defaultActive="$route.path"></cc-menu>
  </div>
</template>

<script setup lang="ts">
import { menuData } from './config'

defineProps<{
  collapse: boolean
}>()
</script>

<style scoped lang="scss">
.side {
  height: 100%;
  border-right: 1px solid #eee;
}
</style>
