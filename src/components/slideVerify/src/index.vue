<template>
  <div
    class="cc-slide-verify"
    :style="{
      width: slideWidth + 'px',
      height: slideHeight + 'px',
      fontSize,
      background: bgColor,
    }"
  >
    <div
      class="cc-slide-verify-content"
      :style="{ background: activeBgColor, width: activeBarWidth + 'px', transitionDuration }"
    >
      <div class="cc-slide-verify-content" :style="{ width: slideWidth + 'px', height: slideHeight + 'px', fontSize }">
        {{ tip }}
      </div>
    </div>
    <div
      class="cc-slide-verify-drag"
      :style="{ transitionDuration, transform: `translateX(${activeBarWidth}px)` }"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      <template v-if="status === 'none'">
        <div class="cc-rotate-verify-bar-wrap-arrow">
          <el-icon-arrowright :style="{ color: iconColor }"></el-icon-arrowright>
        </div>
        <div class="cc-rotate-verify-bar-wrap-arrow">
          <el-icon-arrowright :style="{ color: iconColor }"></el-icon-arrowright>
        </div>
      </template>
      <div class="cc-slide-verify-drag-check" v-else>
        <component
          :is="`el-icon-${transformIconName(successIcon)}`"
          :style="{
            color: activeIconColor,
            size: iconSize + 'px',
          }"
        ></component>
      </div>
    </div>
    <div>{{ tip }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from "vue"
import { transformIconName } from "@/utils/transformIconName"

const props = withDefaults(
  defineProps<{
    tip?: string
    // 滑块条宽度
    slideWidth?: number
    // 滑块条高度
    slideHeight?: number
    // 滑块背景颜色
    bgColor?: string
    // 验证之后的滑块背景颜色
    activeBgColor?: string
    // 图标颜色
    iconColor?: string
    // 验证成功之后图标颜色
    activeIconColor?: string
    // 图标大小
    iconSize?: number
    // 字体大小
    fontSize?: number
    // 成功图标
    successIcon?: string
  }>(),
  {
    tip: "拖动滑块验证",
    slideWidth: 300,
    slideHeight: 30,
    bgColor: "#E9E9E9",
    activeBgColor: "#19be6b",
    iconColor: "#cbcbcb",
    activeIconColor: "#19be6b",
    iconSize: 14,
    fontSize: 14,
    successIcon: "CircleCheck",
  }
)

const emits = defineEmits(["success"])

const moving = ref<boolean>(false)
const activeBarWidth = ref<number>(0)
const startX = ref<number>(0)
const transitionDuration = ref<string>("0.6s")
const status = ref<string>("none")

const handleMouseDown = (e: MouseEvent) => {
  startX.value = e.clientX
  transitionDuration.value = "0s"
  moving.value = true
}
const handleMouseMove = (e: MouseEvent) => {
  if (moving.value) {
    let move = e.clientX
    if (startX.value - move > 0) return
    let dis = props.slideWidth - 40
    let w = -Math.floor(startX.value - move) >= dis ? dis : -Math.floor(startX.value - move)
    activeBarWidth.value = w
  }
}
const handleMouseUp = () => {
  moving.value = false
  transitionDuration.value = "0.6s"
  let dis = props.slideWidth - 40
  if (activeBarWidth.value < dis) {
    activeBarWidth.value = 0
  } else {
    activeBarWidth.value = dis
    status.value = "done"
    emits("success")
  }
}
const reset = () => {
  moving.value = false
  transitionDuration.value = "0.6s"
  activeBarWidth.value = 0
  status.value = "none"
}
defineExpose({
  reset,
})
</script>

<style lang="scss" scoped>
.cc-slide-verify {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &-drag {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    transition: all;
    &-arrow {
      &:first-child {
        position: relative;
        left: 3px;
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    transition: all;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
svg {
  width: 14px;
  height: 14px;
}
</style>
