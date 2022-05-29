<template>
  <el-card v-if="type === 'value'">
    <template #header>
      <el-row justify="space-between">
        <el-col :span="12">
          <slot name="title" v-if="$slots.title"></slot>
          <div v-else>{{ title }}</div>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-tag :type="tagType">{{ tag }}</el-tag>
        </el-col>
      </el-row>
    </template>
    <el-row justify="space-between" style="padding: 16px">
      <el-col :span="12" style="font-size: 24px;font-weight: 700;">
        <slot name="value" v-if="$slots.value"></slot>
        <div v-else>{{ value }}</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot name="avatar" v-if="$slots.avatar"></slot>
        <el-avatar v-else size="small" :src="avatar"></el-avatar>
      </el-col>
    </el-row>
    <el-row justify="space-between" style="padding: 8px 16px">
      <el-col :span="12">
        <slot name="descTitle" v-if="$slots.descTitle"></slot>
        <div v-else>{{ descTitle }}</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot name="desc" v-if="$slots.desc"></slot>
        <div v-else>{{ desc }}</div>
      </el-col>
    </el-row>
  </el-card>
  <div class="cc-desc-card" v-if="type === 'desc'">
    <div style="padding: 24px">
      <el-row>
        <el-col :span="2">
          <slot name="cc-desc-card-avatar" v-if="$slots.avatar"></slot>
          <el-avatar size="small" :src="avatar"></el-avatar>
        </el-col>
        <el-col class="cc-desc-card-title" :offset="2" :span="20">
          <slot name="title" v-if="$slots.title"></slot>
          <div v-else>{{ title }}</div>
        </el-col>
      </el-row>
      <el-row class="cc-desc-card-desc" :style="{color}">
        <el-col>
          <slot name="desc" v-if="$slots.desc"></slot>
          <div v-else>{{ desc }}</div>
        </el-col>
      </el-row>
      <el-row justify="space-between">
        <el-col :span="12" class="cc-desc-card-name" :style="{color}">
          <slot name="name" v-if="$slots.name"></slot>
          <div v-else>{{ name }}</div>
        </el-col>
        <el-col :span="12" class="cc-desc-card-date" :style="{color: dateColor}">
          <slot name="date" v-if="$slots.date"></slot>
          <div v-else>{{ date }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">import { useThemeMode } from '@/hooks/useThemeMode';
import { computed } from 'vue';

withDefaults(
  defineProps<{
    type?: "value" | "desc"
    title: string
    tag?: string
    tagType?: "" | "success" | "info" | "warnin" | "danger"
    value?: number | string
    avatar?: string
    descTitle?: string
    desc?: string
    name?: string
    date?: string
  }>(),
  {
    type: "value",
    tagType: "",
    value: "",
    avatar: "",
    descTitle: "",
    desc: "",
    name: "",
    date: "",
  }
)

const { themeMode } = useThemeMode()
const color = computed(() => {
  return themeMode.value === 'light' ? '#00000072' : '#fff'
})
const dateColor = computed(() => {
  return themeMode.value === 'light' ? '#0000003f' : '#fff'
})
</script>

<style scoped lang="scss">
.el-row {
  width: 100%;
  align-items: center;
}
.cc-desc-card {
  transition: all 0.3s;
  width: 100%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  }
  &-title {
    height: 30px;
  }
  &-desc {
    height: 44px;
    overflow: hidden;
    line-height: 22px;
  }
  &-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 12px;
  }
  &-date {
    text-align: right;
    font-size: 12px;
  }
}
</style>
