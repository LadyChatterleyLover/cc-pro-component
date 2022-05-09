<template>
  <div class="cc-data-list-item-content">
    <div
      class="cc-data-list-item-content-item"
      :class="{ 'cc-data-list-item-content-item-border': isBorder }"
      :style="{ padding }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { inject, computed, useSlots } from 'vue'
const padding = inject<string>('padding')

const isBorder = computed(() => typeof useSlots().default!()[0].children === 'string' || !useSlots().default!()[0].children)
</script>

<style lang='scss' scoped>
.cc-data-list-item {
  &-content {
    flex: 1;
    &-item {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      &-border {
        border-bottom: 1px solid #f0f0f0;
      }
    }
  }
}
</style>