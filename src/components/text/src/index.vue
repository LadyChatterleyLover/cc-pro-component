<template>
  <div class="cc-text" :class="[`cc-text-${type}`]" @click="handleClick">
    <slot v-if="$slots.prefix" name="prefix"></slot>
    <span v-else>{{ prefix }}</span>
    <span style="margin: 0 2px">{{ value }}</span>
    <slot v-if="$slots.suffix" name="suffix"></slot>
    <span v-else>{{ suffix }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { dayjs } from 'element-plus'

const props = withDefaults(
  defineProps<{
    text?: string | number
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    mode?: 'phone' | 'date' | 'name' | 'price'
    dateFormat?: string
    prefix?: string | number
    suffix?: string | number
    lines?: number
  }>(),
  {
    text: '',
    dateFormat: 'YYYY-MM-DD',
    prefix: '',
    suffix: '',
  }
)

const emits = defineEmits(['click'])

const value = ref<string>()

const handleClick = (e: MouseEvent) => {
  if (props.mode === 'phone') {
    window.location.href = 'tel:' + props.text
  }
  emits('click', e)
}
// 默认的姓名脱敏规则
const formatName = (name: string) => {
  let value = ''
  if (name.length === 2) {
    value = name.slice(0, 1) + '*'
  } else if (name.length > 2) {
    let char = ''
    for (let i = 0, len = name.length - 2; i < len; i++) {
      char += '*'
    }
    value = name.slice(0, 1) + char + name.slice(-1, 1)
  } else {
    value = name
  }
  return value
}

onMounted(() => {
  if (props.mode === 'date') {
    value.value = dayjs(props.text).format(props.dateFormat)
  }
  if (props.mode === 'name') {
    value.value = formatName(value.value as string)
  }
  if (props.mode === 'price') {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    const int = value.value!.split('.')[0]
    const decimal = value.value!.split('.')[1]
    value.value = String(int).replace(reg, '$&,') + '.' + decimal
  }
})
watch(
  () => props.text,
  (val) => {
    value.value = String(val)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.cc-text {
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: v-bind('props.lines');
  -webkit-box-orient: vertical;
  &-primary {
    color: var(--el-color-primary);
  }
  &-success {
    color: var(--el-color-success);
  }
  &-warning {
    color: var(--el-color-warning);
  }
  &-danger {
    color: var(--el-color-danger);
  }
  &-info {
    color: var(--el-color-info);
  }
}
</style>
