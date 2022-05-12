<template>
  <div class="cc-segmented">
    <div
      :id="`cc-segmented-item-${id}-${index}`"
      class="cc-segmented-item"
      :class="{
        'cc-segmented-item-selected': currentIndex === index,
        'cc-segmented-disabled': (isObject(item) && (item as OptionsItem).disabled) || disabled,
      }"
      :style="heightStyle"
      v-for="(item, index) in options"
      :key="index"
      @click="clickItem(item, index)"
    >
      <slot v-if="(item as OptionsItem).slot" :name="(item as OptionsItem).slot" :item="item" :index="index"></slot>
      <div v-else>{{ isObject(item) ? (item as OptionsItem).label : item }}</div>
    </div>
    <div
      class="cc-segmented-mask"
      :style="{ width: maskWidth + 'px', height: maskHeight + 'px', left: maskLeft + 'px' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, getCurrentInstance, computed } from 'vue'
export interface OptionsItem {
  label: string
  value?: string
  slot?: string
  disabled?: boolean
}
const id = getCurrentInstance()?.uid
const props = withDefaults(
  defineProps<{
    modelValue: string | number
    options: string[] | number[] | OptionsItem[]
    block?: boolean
    disabled?: boolean
    size?: 'default' | 'small' | 'large'
  }>(),
  {
    block: false,
    disabled: false,
    size: 'default',
  }
)
const emits = defineEmits(['update:modelValue', 'change'])

const currentIndex = ref<number>(Number(props.modelValue))
const maskWidth = ref<number>(0)
const maskHeight = ref<number>(0)
const maskLeft = ref<number>(0)

const isObject = (val: any) => {
  return typeof val === 'object' && val !== null
}

const clickItem = (item: string | number | OptionsItem, index: number) => {
  if (props.disabled || (isObject(item) && (item as OptionsItem).disabled)) {
    return
  }
  currentIndex.value = index
  init()
  emits('change', {
    item,
    index,
  })
  emits('update:modelValue', currentIndex.value)
}
const init = () => {
  const el = document.getElementById(`cc-segmented-item-${id}-${currentIndex.value}`)
  maskWidth.value = el?.getBoundingClientRect().width!
  maskHeight.value = el?.getBoundingClientRect().height!
  maskLeft.value = el?.offsetLeft!
}

const heightStyle = computed(() => {
  if (props.size === 'default') {
    return {
      minHeight: '28px',
      lineHeight: '28px',
    }
  } else if (props.size === 'small') {
    return {
      minHeight: '20px',
      lineHeight: '20px',
    }
  } else if (props.size === 'large') {
    return {
      minHeight: '36px',
      lineHeight: '36px',
    }
  }
})

onMounted(() => {
  nextTick(() => {
    init()
  })
})
</script>

<style lang="scss" scoped>
.cc-segmented {
  margin: 0;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  padding: 2px;
  background-color: #0000000a;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  &-item {
    padding: 0 11px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all;
    z-index: 1;
    cursor: pointer;
  }
  &-mask {
    border-radius: 2px;
    box-shadow: 0 2px 8px -2px #0000000d, 0 1px 4px -1px #00000012, 0 0 1px #00000014;
    color: #262626;
    background: #fff;
    position: absolute;
    z-index: 0;
    transition: all 0.35s ease 0s;
    height: 100%;
  }
  &-disabled {
    color: #00000040;
    cursor: not-allowed;
  }
}
</style>
