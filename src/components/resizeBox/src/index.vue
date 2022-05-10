<template>
  <div class="cc-resize-box" ref="resizeBox">
    <slot></slot>
    <div
      v-if="directions.includes('left')"
      class="cc-resize-box-trigger cc-resize-box-trigger-vertical cc-resize-box-trigger-left"
    ></div>
    <div
      v-if="directions.includes('right')"
      class="cc-resize-box-trigger cc-resize-box-trigger-vertical cc-resize-box-trigger-right"
    ></div>
    <div
      v-if="directions.includes('top')"
      class="cc-resize-box-trigger cc-resize-box-trigger-horizontal cc-resize-box-trigger-top"
    ></div>
    <div
      v-if="directions.includes('bottom')"
      class="cc-resize-box-trigger cc-resize-box-trigger-horizontal cc-resize-box-trigger-bottom"
      @mousedown="down($event, 'bottom')"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    width?: number
    height?: string
    directions?: any
  }>(),
  {
    directions: ['right'],
  }
)

const resizeBox = ref<HTMLDivElement | null>(null)
const isMoving = ref<boolean>(false)
const startX = ref<number>(0)
const startY = ref<number>(0)
const direction = ref<string>('')

const down = (e: MouseEvent, d: string) => {
  isMoving.value = true
  direction.value = d
  startX.value = e.pageX
  startY.value = e.pageY
}

const move = (e: MouseEvent) => {
  if (isMoving.value) {
    if (direction.value === 'bottom') {
      const moveY = startX.value - e.pageY
      console.log(moveY)
    }
  }
}

onMounted(() => {
  window.addEventListener('mouseup', () => {
    isMoving.value = false
    direction.value = ''
    startX.value = 0
    startY.value = 0
    window.removeEventListener('mousemove', move)
  })
  window.addEventListener('mousemove', (e) => {
    move(e)
  })
})
</script>

<style scoped lang="scss">
.cc-resize-box {
  position: relative;
  &-trigger {
    position: absolute;
    user-select: none;
    z-index: 1;
    background: #e5e6eb;
    &-vertical {
      height: 100%;
      cursor: col-resize;
      width: 6px;
      top: 0;
    }
    &-horizontal {
      width: 100%;
      cursor: row-resize;
      height: 6px;
      left: 0;
    }
    &-left {
      right: unset;
      left: 0;
    }
    &-right {
      right: 0;
      left: unset;
    }
    &-top {
      top: 0;
      bottom: unset;
    }
    &-bottom {
      bottom: 0;
      top: unset;
    }
  }
}
</style>
