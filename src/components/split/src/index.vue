<template>
  <div
    class="cc-split-container"
    ref="container"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <div class="cc-split-container-left" :style="{ flexBasis }">
      <slot name="left"></slot>
    </div>
    <div class="cc-split-container-trigger" :style="triggerStyle" @mousedown="mousedown">
      <div
        class="cc-split-container-trigger-wrapper"
        :style="{ ...triggerStyle, flexDirection: direction === 'horizontal' ? 'column' : 'row' }"
      >
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
        <div class="cc-split-container-trigger-wrapper-bar" :style="triggerBarStyle"></div>
      </div>
    </div>
    <div class="cc-split-container-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { withDefaults, ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical',
  size?: number,
  min?: number,
  max?: number,
}>(), {
  direction: 'horizontal',
  size: 0,
  min: 0,
  max: 1
})

const value = ref<number>(props.size)
const container = ref<HTMLDivElement | null>(null)
const moving = ref<boolean>(false)
const triggerStyle = computed(() => {
  if (props.direction === 'horizontal') {
    return {
      width: '6px',
      height: '100%'
    }
  } else {
    return {
      width: '100%',
      height: '6px'
    }
  }
})

const triggerBarStyle = computed(() => {
  if (props.direction === 'horizontal') {
    return {
      width: '4px',
      height: '1px',
      marginTop: '3px'
    }
  } else {
    return {
      height: '6px',
      width: '1px',
      marginRight: '3px'
    }
  }
})

const flexBasis = computed(() => `calc(${value.value * 100}% - 3px)`)

const emits = defineEmits(['update:size', 'move-start', 'moving', 'move-end'])

const mousedown = () => {
  moving.value = true
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
  emits('move-start')
}
const mousemove = (e: MouseEvent) => {
  if (!moving.value) return
  if (props.direction === 'horizontal') {
    const width = container.value!.getBoundingClientRect().width
    const left = container.value!.getBoundingClientRect().left
    value.value = (e.pageX - left) / width
    if (value.value <= props.min) value.value = props.min
    if (value.value >= props.max) value.value = props.max
  } else {
    const height = container.value!.getBoundingClientRect().height
    const top = container.value!.getBoundingClientRect().top
    value.value = (e.pageY - top) / height
    if (value.value <= props.min) value.value = props.min
    if (value.value >= props.max) value.value = props.max
  }
  emits('moving')
  emits('update:size', value.value)
}
const mouseup = (e: MouseEvent) => {
  moving.value = false
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
  emits('move-end')
}
</script>

<style lang='scss' scoped>
.cc-split-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  &-left {
    overflow: auto;
  }
  &-trigger {
    &-wrapper {
      background: #f8f8f9;
      border-top: none;
      border-bottom: none;
      cursor: col-resize;
      border: 1px solid #dcdee2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-bar {
        background: rgba(23, 35, 61, 0.25);
      }
    }
  }
  &-right {
    overflow: auto;
    flex: 1;
  }
}
</style>