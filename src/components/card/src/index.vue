<template>
  <div
    :style="{
      ...style,
      paddingLeft: (Array.isArray(gutterNum) ? gutterNum[0] : Number(gutterNum) / 2) + 'px',
      paddingRight: (Array.isArray(gutterNum) ? gutterNum[0] : Number(gutterNum) / 2) + 'px',
      marginTop: (Array.isArray(gutterNum) ? gutterNum[1] : 0) / 2 + 'px',
      marginBottom: (Array.isArray(gutterNum) ? gutterNum[1] : 0) / 2 + 'px',
    }"
    v-if="colSpan !== 0 && colSpan !== '0'"
  >
    <div
      class="cc-card"
      :class="[
        `cc-card-split-${splitValue}`,
        {
          'cc-card-bordered': bordered,
          'cc-card-shadow': hoverable,
          'cc-card-ghost': ghost,
          'cc-card-center': layout === 'center',
        },
      ]"
      v-if="colSpan > 0 || colSpan !== ''"
    >
      <el-skeleton animated v-if="loading">
        <template #template>
          <el-row style="margin: -4px 0" :gutter="4">
            <el-col :span="22"><el-skeleton-item variant="text" /></el-col>
          </el-row>
          <el-row style="margin: -4px 0" :gutter="4">
            <el-col :span="8"><el-skeleton-item variant="text" /></el-col>
            <el-col :span="15"><el-skeleton-item variant="text" /></el-col>
          </el-row>
          <el-row style="margin: -4px 0" :gutter="4">
            <el-col :span="6"><el-skeleton-item variant="text" /></el-col>
            <el-col :span="18"><el-skeleton-item variant="text" /></el-col>
          </el-row>
          <el-row style="margin: -4px 0" :gutter="4">
            <el-col :span="13"><el-skeleton-item variant="text" /></el-col>
            <el-col :span="9"><el-skeleton-item variant="text" /></el-col>
          </el-row>
          <el-row style="margin: -4px 0" :gutter="4">
            <el-col :span="4"><el-skeleton-item variant="text" /></el-col>
            <el-col :span="3"><el-skeleton-item variant="text" /></el-col>
            <el-col :span="16"><el-skeleton-item variant="text" /></el-col>
          </el-row>
        </template>
      </el-skeleton>
      <template v-else>
        <div
          class="cc-card-header"
          :class="[`cc-card-header-${size}`, { 'cc-card-header-bordered': headerBordered }]"
          v-if="title || $slots.title || extra || $slots.extra"
        >
          <div>
            <div class="cc-card-header-title">
              <div class="cc-card-header-title-text">
                <slot v-if="$slots.title" name="title"></slot>
                <div v-else>{{ title }}</div>
              </div>
              <div class="cc-card-header-title-tip" v-if="tooltip">
                <el-tooltip placement="top" :content="tooltip">
                  <el-icon-warning></el-icon-warning>
                </el-tooltip>
              </div>
            </div>
            <div class="cc-card-header-title-subtitle">
              <slot v-if="$slots.subTitle" name="subTitle"></slot>
              <div v-else>{{ subTitle }}</div>
            </div>
          </div>
          <div class="cc-card-header-extra">
            <slot v-if="$slots.extra" name="extra"></slot>
            <div v-else>{{ extra }}</div>
          </div>
        </div>
        <div
          class="cc-card-body"
          :class="[
            `cc-card-body-${size}`,
            {
              'cc-card-contain': contain,
              'cc-card-body-split': split,
              'cc-card-wrap': wrap,
            },
          ]"
          :style="{
            flexDirection: split ? flexDirection : direction,
            marginLeft: -(Array.isArray(gutterNum) ? gutterNum[0] : Number(gutterNum) / 2) + 'px',
            marginRight: -(Array.isArray(gutterNum) ? gutterNum[0] : Number(gutterNum) / 2) + 'px',
          }"
        >
          <slot></slot>
        </div>
        <div class="cc-card-action" v-if="actions && actions.length">
          <div
            class="cc-card-action-item"
            :class="{ 'cc-card-action-item-border': i !== actions!.length }"
            v-for="(action, i) in actions"
            :key="i"
            @click="clickAction(action, i)"
          >
            <div class="cc-card-action-item-icon" v-if="action.icon">
              <component :is="`ElIcon${action.icon}`"></component>
            </div>
            <div class="cc-card-action-item-name" v-if="action.name">{{ action.name }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "cc-card",
}
</script>

<script setup lang="ts">
export interface ActionItem {
  icon?: string
  name?: string
}

import { computed, useSlots, getCurrentInstance } from "vue"
import type { CSSProperties } from "vue"
import { useThemeMode } from "@/hooks/useThemeMode"

const { bgColor } = useThemeMode()

const slots: any = useSlots()
const instance = getCurrentInstance()

const props = withDefaults(
  defineProps<{
    title?: string
    subTitle?: string
    tooltip?: string
    extra?: string
    loading?: boolean
    bordered?: boolean
    ghost?: boolean
    headerBordered?: boolean
    wrap?: boolean
    size?: "default" | "small"
    layout?: "default" | "center"
    colSpan?: number | string
    gutter?: number | number[]
    direction?: "row" | "column"
    split?: "" | "vertical" | "horizontal"
    actions?: ActionItem[]
    hoverable?: boolean
  }>(),
  {
    subTitle: "",
    tooltip: "",
    extra: "",
    loading: false,
    bordered: false,
    headerBordered: false,
    ghost: false,
    size: "default",
    layout: "default",
    colSpan: 24,
    gutter: 0,
    direction: "row",
    wrap: false,
    hoverable: false,
  }
)

const emits = defineEmits(["clickAction"])

const gutterNum = computed(() => {
  const gutter = instance?.parent?.props.gutter
  if (Array.isArray(gutter)) {
    return gutter
  } else {
    return (gutter as string) !== "" || (gutter as number) > 0 ? gutter : 0
  }
})

const style = computed(() => {
  let computedStyle: CSSProperties = {}
  if (typeof props.colSpan === "number") {
    computedStyle = {
      width: (props.colSpan / 24) * 100 + "%",
    }
  } else if (typeof props.colSpan === "string") {
    if (props.colSpan.includes("px") || props.colSpan.includes("%")) {
      computedStyle = {
        width: props.colSpan,
        flexShrink: 0,
      }
    } else {
      computedStyle = {
        width: (Number(props.colSpan) / 24) * 100 + "%",
      }
    }
  } else {
    computedStyle = {
      width: "100%",
    }
  }
  return computedStyle
})

// 子组件是否是卡片组件
const contain = computed(() => {
  return slots.default?.().find((item: any) => item.type.name === "cc-card")
})

// 从父元素去split的值
const splitValue = computed(() => {
  return instance?.parent?.props.split
})

const flexDirection = computed(() => {
  if (props.split === "") return "row"
  if (props.split === "vertical") return "row"
  if (props.split === "horizontal") return "column"
})

const clickAction = (item: ActionItem, index: number) => {
  emits("clickAction", { item, index })
}
</script>

<style scoped lang="scss">
.cc-card {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 4px 0;
  padding: 0;
  background: v-bind(bgColor);
  border-radius: 2px;
  &-wrap {
    flex-wrap: wrap;
  }
  &-header-bordered {
    padding-bottom: 16px !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  &-contain {
    display: flex;
  }
  &-bordered {
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
  &-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-ghost {
    background: transparent;
  }
  &-shadow {
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      border-color: transparent;
      box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
    }
  }
  &-split-vertical {
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    & > .cc-card {
      padding: 0 !important;
    }
  }
  &-split-horizontal {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    & > .cc-card {
      padding: 0 !important;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-default {
      padding: 16px 24px 0;
    }
    &-small {
      padding: 8px 12px 0;
    }
    &-title {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      &-text {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
      }
      &-subtitle {
        color: rgba(0, 0, 0, 0.65);
        font-weight: 500;
        font-size: 12px;
      }
      &-tip {
        margin-left: 4px;
        margin-top: 4px;
        cursor: pointer;
      }
    }
    &-extra {
      color: rgba(0, 0, 0, 0.85);
    }
  }
  &-body {
    height: 100%;
    &-split {
      padding: 0 !important;
    }
    &-default {
      padding: 24px;
    }
    &-small {
      padding: 12px;
    }
  }
  &-action {
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    padding: 12px 0;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &-border {
        border-right: 1px solid #eee;
      }
      &-icon {
        margin-right: 4px;
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
