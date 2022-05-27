<template>
  <div class="cc-rotate-verify">
    <div class="cc-rotate-verify-title" :style="{ color: titleColor, fontSize: titleSize + 'px' }">{{ title }}</div>
    <div class="cc-rotate-verify-desc" :style="{ color: descColor, fontSize: descSize + 'px' }">{{ desc }}</div>
    <div class="cc-rotate-verify-img" :style="{ transform: `rotate(${rotate}deg)`, transitionDuration }">
      <img :src="src" class="cc-rotate-verify-img-image" />
    </div>
    <div
      class="cc-rotate-verify-bar"
      :style="{ width: barWidth + 'px', height: barHeight + 'px', background: barBgColor }"
    >
      <div
        class="cc-rotate-verify-bar-wrap"
        :style="{
          background: barColor,
          width: barHeight + 'px',
          height: barHeight + 'px',
          transitionDuration,
          transform: `translateX(${translateX}px)`,
        }"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
      >
        <div class="cc-rotate-verify-bar-wrap-arrow">
          <el-icon-arrow-right style="color: #fff"></el-icon-arrow-right>
        </div>
        <div class="cc-rotate-verify-bar-wrap-arrow">
          <el-icon-arrow-right style="color: #fff"></el-icon-arrow-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    title?: string
    titleSize?: number
    titleColor?: string
    desc?: string
    descSize?: number
    descColor?: string
    bgColor?: string
    barWidth?: number
    barHeight?: number
    barBgColor?: string
    barColor?: string
    // 图片默认旋转角度
    // 取值范围： -330deg<angle <-30deg 或 30deg<angle<330deg
    angle?: number
    // 误差范围
    errorRange?: number
  }>(),
  {
    title: '安全验证',
    titleSize: 14,
    titleColor: '#999',
    desc: '拖动滑块使图片角度为正',
    descSize: 16,
    descColor: '#333',
    barHeight: 45,
    barWidth: 270,
    barBgColor: 'rgba(86,119,252,.1)',
    barColor: '#5677fc',
    angle: 30,
    errorRange: 5,
  }
)

const emits = defineEmits(['success', 'fail'])

const moving = ref<boolean>(false)
const rotate = ref<number>(props.angle)
const startX = ref<number>(0)
const translateX = ref<number>(0)
const transitionDuration = ref<string>('0.6s')

const handleMouseDown = (e: MouseEvent) => {
  startX.value = e.clientX
  transitionDuration.value = '0s'
  moving.value = true
}

const handleMouseMove = (e: MouseEvent) => {
  if (moving.value) {
    let move = e.clientX
    if (startX.value - move > 0) return
    let dis = props.barWidth - props.barHeight
    let x = -Math.floor(startX.value - move) >= dis ? dis : -Math.floor(startX.value - move)
    translateX.value = x
    let r = Math.floor(360 * (translateX.value / (props.barWidth - props.barHeight))) + props.angle
    rotate.value = r
  }
}

const handleMouseUp = () => {
  moving.value = false
  let dis = props.barWidth - props.barHeight
  if (translateX.value < dis) {
    transitionDuration.value = '0.6s'
    translateX.value = 0
  } else {
    translateX.value = dis
  }
  if (rotate.value >= 360 - props.errorRange && rotate.value <= 360 + props.errorRange) {
    rotate.value = props.angle
    emits('success')
  } else {
    transitionDuration.value = '0.6s'
    rotate.value = props.angle
    emits('fail')
  }
}
</script>

<style lang="scss" scoped>
.cc-rotate-verify {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title {
    margin-bottom: 10px;
  }
  &-img {
    width: 100px;
    height: 100px;
    margin: 15px 0;
    transition: all 0.6s;
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
  &-bar {
    border-radius: 24px;
    &-wrap {
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.6s;
      &-arrow {
        &:first-child {
          position: relative;
          left: 3px;
        }
      }
    }
  }
}
svg {
  width: 14px;
  height: 14px;
}
</style>
