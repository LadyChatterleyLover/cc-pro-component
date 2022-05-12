<template>
  <div class="cc-statistic">
    <div class="cc-statistic-title">
      <span v-if="title">{{ title }}</span>
      <span>
        <slot name="title"></slot>
      </span>
    </div>
    <div>
      <span>
        <slot name="prefix"></slot>
      </span>
      <el-skeleton v-if="loading" :rows="1" animated>
        <template #template>
          <el-skeleton-item variant="p" style="width: 15%" />
        </template>
      </el-skeleton>
      <span v-else class="cc-statistic-value" :id="`cc-statistic-${uid}`">{{ num }}</span>
      <span>
        <slot name="suffix"></slot>
      </span>
    </div>
    <div class="cc-statistic-title">
      <span v-if="extra">{{ extra }}</span>
      <span>
        <slot name="extra"></slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, ref, watch, onMounted, getCurrentInstance } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

const uid = getCurrentInstance()!.uid

const props = withDefaults(
  defineProps<{
    title?: string
    value: number
    extra?: string
    precision?: number
    separator?: string
    showGroupSeparator?: boolean
    start?: boolean
    loading?: boolean
    animation?: boolean
    animationDuration?: number
  }>(),
  {
    title: '',
    extra: '',
    precision: 0,
    separator: ',',
    showGroupSeparator: false,
    start: true,
    loading: false,
    animation: false,
    animationDuration: 2000,
  }
)

const num = ref<string>('')
const countup = ref<CountUp | null>(null)

const splitArr = (data: any[], n: number) => {
  let result = []
  for (let i = 0; i < data.length; i += n) {
    result.push(data.slice(i, i + n))
  }
  return result
}
const renderNum = () => {
  num.value = ''
  let arr = splitArr(String(props.value).split(''), 3)
  let strArr = arr.map((item) => {
    return item.join('')
  })
  strArr.map((item) => {
    num.value += `${item}${props.showGroupSeparator ? props.separator : ''}`
  })
  num.value = num.value.slice(0, num.value.length - 1)
  let n = num.value.split('.')
  num.value = n.length > 1 ? n[0] + '.' + n[1].slice(1) : n[0]
  if (props.precision > 0) {
    num.value += '.'
    for (let i = 0; i < props.precision; i++) {
      num.value += '0'
    }
  }
}
onMounted(() => {
  if (props.animation) {
    let options: CountUpOptions = {
      startVal: 0,
      duration: props.animationDuration / 1000,
      separator: props.showGroupSeparator ? props.separator : '',
      decimalPlaces: props.precision,
    }
    countup.value = new CountUp(`cc-statistic-${uid}`, props.value, options)
    if (props.start) countup.value.start()
  } else {
    renderNum()
  }
})

watch(
  () => props.value,
  () => {
    if (props.animation) {
      countup.value!.start()
    } else {
      renderNum()
    }
  }
)

watch(
  () => props.start,
  (val) => {
    if (val) countup.value!.start()
  }
)
</script>

<style lang="scss" scoped>
.cc-statistic {
  &-title {
    margin-bottom: 4px;
    color: #00000073;
    font-size: 14px;
  }
  &-value {
    font-weight: 500;
    font-size: 26px;
    white-space: nowrap;
    color: #000;
  }
}
</style>
