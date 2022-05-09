<template>
  <div class="cc-avatar-group">
    <template v-for="(item, index) in slots?.slice(0, maxCount)" :key="index">
      <component :is="item" :size="size"></component>
    </template>
    <el-popover width="auto" :placement="maxPopoverPlacement" :trigger="maxPopoverTrigger" v-if="maxCount !== Infinity">
      <template #reference>
        <el-avatar :size="size" style="background: #fde3cf; color: #f56a00; margin-left: -8px; cursor: pointer"
          >+{{ showCount }}</el-avatar
        >
      </template>
      <div class="cc-avatar-group">
        <component
          :size="size"
          style="margin-right: 6px"
          :is="item"
          v-for="(item, index) in slots?.slice(maxCount, length)"
          :key="index"
        ></component>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    maxCount?: number
    maxPopoverPlacement?: 'top' | 'bottom'
    maxPopoverTrigger?: 'hover' | 'focus' | 'click'
    size?: number | 'large' | 'default' | 'small'
  }>(),
  {
    maxCount: Infinity,
    maxPopoverPlacement: 'top',
    maxPopoverTrigger: 'hover',
    size: 'default',
  }
)

const slots = useSlots()?.default?.()
console.log(slots)

const length = computed(() => slots?.length)

const showCount = computed(() => (props.maxCount !== Infinity ? length.value! - props.maxCount : length.value))
</script>

<style scoped lang="scss">
.cc-avatar-group {
  display: flex;
  align-items: center;
  width: fit-content;
}
</style>
