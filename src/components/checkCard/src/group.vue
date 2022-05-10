<template>
  <div class="cc-check-card-group">
    <div
      class="cc-check-card"
      :class="[
        {
          'cc-check-card-bordered': bordered,
          'cc-check-card-checked': item.checked,
          'cc-check-card-disabled': item.disabled,
        },
        `cc-check-card-${size}`,
      ]"
      v-for="(item, index) in list"
      :key="index"
      @click="handleClick(item, index)"
    >
      <el-row class="cc-check-card-content">
        <el-col :span="6" v-if="$slots.avatar || item.avatar">
          <slot v-if="$slots.avatar"></slot>
          <el-avatar v-else :src="item.avatar"></el-avatar>
        </el-col>

        <el-col :span="item.avatar || $slots.avatar ? 12 : 24">
          <el-row
            style="margin-bottom: 6px"
            v-if="$slots.title || item.title || item.extra || $slots.extra"
            justify="space-between"
          >
            <el-col :span="item.extra || $slots.extra ? 20 : 24">
              <slot v-if="$slots.title"></slot>
              <div v-else>{{ item.title }}</div>
            </el-col>
            <el-col :span="$slots.extra || item.extra ? 4 : 0">
              <slot v-if="$slots.extra" name="extra"></slot>
              <div v-else>{{ item.extra }}</div>
            </el-col>
          </el-row>
          <el-row v-if="$slots.description || item.description">
            <el-col
              :span="24"
              :style="{
                color: item.disabled ? 'rgba(0, 0, 0, 0.25)' : '#8c8c8c',
              }"
            >
              <slot v-if="$slots.description"></slot>
              <div v-else>{{ item.description }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="cc-check-card-icon" v-if="item.checked"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, useSlots, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    multiple?: boolean
    bordered?: boolean
    modelValue?: string | string[]
    size?: 'default' | 'small' | 'large'
  }>(),
  {
    multiple: false,
    bordered: true,
    size: 'default',
    modelValue: '',
  }
)
const slots = useSlots()?.default?.()
const list = ref<any[]>([])
slots?.map((item) => {
  list.value.push(item.props)
})!
list.value.map((item: any) => {
  if (item.disabled === '') item.disabled = true
  item.checked = false
})

const handleClick = (item: any, index: number) => {
  if (item.disabled) {
    return
  }
  item.clickCount++
  if (props.multiple && !item.disabled) {
    item.checked = !item.checked
  } else {
    item.checked = !item.checked
    const arr = list.value.filter((i) => {
      return i !== item
    })
    arr.map((c) => {
      c.checked = false
    })
  }
}

watch(
  () => props.modelValue,
  (val) => {
    let arr: string[] = []
    if (typeof val !== 'object') arr.push(val)
    else arr = [...(val as string[])]
    console.log(arr)
    list.value.map((item) => {
      if (arr.includes(item.value)) {
        item.checked = true
      }
    })
  },
  { immediate: true }
)

// provide('current', props.modelValue)
// provide('bordered', props.bordered)
// provide('size', props.size)
// provide('multiple', props.multiple)
</script>

<style scoped lang="scss">
.cc-check-card-group {
  display: flex;
}

.cc-check-card {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  vertical-align: top;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease 0s;
  &-default {
    width: 320px;
  }
  &-large {
    width: 440px;
  }
  &-small {
    width: 212px;
  }
  &-checked {
    background: #e6f7ff;
    position: relative;
    border-color: #1890ff !important;
  }
  &:hover {
    border-color: #1890ff;
  }
  &-bordered {
    border: 1px solid #d9d9d9;
  }
  &-disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    border-color: #d9d9d9 !important;
  }
  &-content {
    padding: 12px 16px;
  }
  &-icon {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 0;
    height: 0;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 12px solid #1890ff;
    transform: rotate(45deg);
    border-top-right-radius: 2px;
  }
}
</style>
