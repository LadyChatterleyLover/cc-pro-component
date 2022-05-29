<template>
  <div class="cc-grid">
    <template v-for="(item, index) in $slots" :key="index">
      <component :is="item"></component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { provide } from "vue"


const props = withDefaults(
  defineProps<{
    rows?: number
  }>(),
  {
    rows: 3,
  }
)
provide("rows", props.rows)
</script>

<style lang="scss" scoped>
.cc-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}
</style>
