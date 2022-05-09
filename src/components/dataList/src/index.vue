<template>
  <!-- <template v-if="virtualListProps"></template> -->
  <div
    @scroll="handleScroll"
    class="cc-data-list"
    :class="{ 'cc-data-list-border': border }"
    :style="{ maxHeight: maxHeight + 'px' }"
  >
    <div class="cc-data-list-header" :style="{ padding }" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <el-row v-if="grid">
      <template v-for="(item, index) in slotDefault" :key="index">
        <el-col :span="24 / slotDefault.length">
          <component :is="slotDefault[index]"></component>
        </el-col>
      </template>
    </el-row>
    <slot v-else></slot>
    <div class="cc-data-list-footer" :style="{ padding }" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, computed, provide, onMounted, useSlots } from "vue"
import cloneDeep from "lodash/cloneDeep"

export interface GridProps {
  gutter?: number
}
const slots = useSlots()
const slotDefault = ref<any[]>([])

const props = withDefaults(
  defineProps<{
    size?: "small" | "medium" | "large"
    maxHeight?: number | string
    border?: boolean
    grid?: boolean
  }>(),
  {
    size: "medium",
    border: true,
    grid: false,
  }
)

const emits = defineEmits(["scroll", "reach-bottom"])

const items = ref<any[]>([])

const padding = computed(() => {
  if (props.size === "small") return "8px 20px"
  else if (props.size === "medium") return "12px 20px"
  else return "16px 20px"
})
provide("padding", padding.value)

const handleScroll = (e: any) => {
  const scrollTop = e.target.scrollTop
  const scrollHeight = e.target.scrollHeight
  const offsetHeight = Math.ceil(e.target.getBoundingClientRect().height)
  const currentHeight = scrollTop + offsetHeight
  emits("scroll")
  if (currentHeight >= scrollHeight) {
    emits("reach-bottom")
  }
}

onMounted(() => {
  if (slots.default) {
    slotDefault.value = slots.default!()
  }
})
</script>

<style lang="scss" scoped>
.cc-data-list {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  border-radius: 6px;
  &-header,
  &-footer {
    border-bottom: 1px solid #f0f0f0;
  }
  &-border {
    border: 1px solid #f0f0f0;
    border-bottom: none;
  }
}
</style>
