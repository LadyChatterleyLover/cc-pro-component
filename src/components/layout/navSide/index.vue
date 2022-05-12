<template>
  <div class="side">
    <cc-menu
      @clickItem="clickItem"
      unique-opened
      :collapse="collapse"
      :data="menuData"
      router
      :defaultActive="$route.path"
    ></cc-menu>
  </div>
</template>

<script setup lang="ts">
import { menuData } from "./config"
import type { MenuItem } from "./config"

defineProps<{
  collapse: boolean
}>()

const emits = defineEmits(['clickItem'])

const clickItem = (item: MenuItem) => {
  emits('clickItem', item)
}
</script>

<style scoped lang="scss">
.side {
  height: 100%;
  border-right: 1px solid #eee;
}
</style>
