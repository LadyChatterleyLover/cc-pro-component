<template>
  <div class="cc-count-down">
    <slot v-if="defaultSlots" :timeData="timeData"></slot>
    <template v-else>
      <div v-if="showDays && day > 0">{{ dayValue }}</div>
      <div
        v-if="showDays && day > 0"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '天' }}</div>
      <div v-if="showHours">{{ hourValue }}</div>
      <div
        v-if="showHours"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '时' }}</div>
      <div v-if="showMinutes">{{ minuteValue }}</div>
      <div
        v-if="showMinutes"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '分' }}</div>
      <div v-if="showSeconds">{{ secondValue }}</div>
      <div
        v-if="showSeconds"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? '' : '秒' }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref, useSlots, computed, onMounted, onUnmounted, watch } from 'vue'


const props = withDefaults(defineProps<{
  time?: number,
  separator?: string,
  separatorSize?: number | string,
  separatorColor?: string,
  gutter?: number | string,
  showDays?: boolean,
  showHours?: boolean,
  showMinutes?: boolean,
  showSeconds?: boolean,
  start?: boolean
}>(), {
  time: 0,
  separator: 'colon',
  separatorSize: 16,
  separatorColor: '#000',
  gutter: 0,
  showDays: false,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  start: true
})


const slots = useSlots()
const emits = defineEmits(['end', 'change'])

const day = ref<number>(0)
const hour = ref<number>(0)
const minute = ref<number>(0)
const second = ref<number>(0)
const timer = ref<any>()
const timeValue = ref<number>(0)
const timeData = ref<any>({})


const defaultSlots = ref()


const formatNum = (num: number) => {
  return num < 10 ? '0' + num : '' + num
}


const countDown = () => {
  clearInterval(timer.value)
  timer.value = setInterval(() => {
    if (hour.value === 0) {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59
        minute.value -= 1
      } else if (minute.value === 0 && second.value === 0) {
        clearInterval(timer.value)
        timer.value = null
      } else {
        second.value -= 1
      }
    } else {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59
        minute.value -= 1
      } else if (minute.value === 0 && second.value === 0) {
        hour.value -= 1
        minute.value = 59
        second.value = 59
      } else {
        second.value -= 1
      }
    }
    timeValue.value = hour.value * 1000 * 3600 + minute.value * 1000 * 60 + second.value * 1000
  }, 1000)
}

const dayValue = computed(() => formatNum(day.value))
const hourValue = computed(() => formatNum(hour.value))
const minuteValue = computed(() => formatNum(minute.value))
const secondValue = computed(() => formatNum(second.value))

onMounted(() => {
  if (slots.default) defaultSlots.value = slots.default
  if (props.time > 0 && props.time < 1000 * 60 * 60 * 24) {
    day.value = 0
    hour.value = Math.floor((props.time / 3600 / 1000) % 24)
    minute.value = Math.floor((props.time / 60 / 1000) % 60)
    second.value = Math.floor((props.time / 1000) % 60)
  } else {
    // 如果时间大于1天
    // 如果刚好是整数天
    if (props.time % (1000 * 60 * 60 * 24) === 0) {
      day.value = props.time / (1000 * 60 * 60 * 24)
      hour.value = 24 * day.value
      minute.value = 0
      second.value = 0
    } else {
      day.value = Math.floor(props.time / (1000 * 60 * 60 * 24))
      hour.value = day.value * 24 + Math.floor((props.time / 3600 / 1000) % 24)
      minute.value = Math.floor((props.time / 60 / 1000) % 60)
      second.value = Math.floor((props.time / 1000) % 60)
    }
  }
  timeData.value.days = dayValue.value
  timeData.value.hours = hourValue.value
  timeData.value.minutes = minuteValue.value
  timeData.value.seconds = secondValue.value
  if (props.start) countDown()
})

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = null
})

watch(() => timeValue.value, val => {
  timeData.value.days = dayValue.value
  timeData.value.hours = hourValue.value
  timeData.value.minutes = minuteValue.value
  timeData.value.seconds = secondValue.value
  emits('change', val)
  if (val === 0) emits('end')
}, { deep: true })

watch(() => props.start, val => {
  if (val) countDown()
})
</script>

<style scoped lang="scss">
.cc-count-down {
  display: flex;
  align-items: center;
}
</style>