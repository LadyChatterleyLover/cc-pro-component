<template>
  <el-card>
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
      <el-col :span="12" style="font-size: 18px">
        <slot name="value" v-if="$slots.value"></slot>
        <div v-else>{{ value }}</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot name="image" v-if="$slots.image"></slot>
        <div v-else>{{ image }}</div>
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
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    tag?: string
    tagType: '' | 'success' | 'info' | 'warnin' | 'danger'
    value?: number | string
    image?: string
    descTitle?: string
    desc?: string
  }>(),
  {
    tagType: '',
    value: '',
    image: '',
    descTitle: '',
    desc: '',
  }
)
</script>

<style scoped></style>
