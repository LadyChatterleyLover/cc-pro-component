<template>
  <el-row>
    <el-col :span="2" style="margin-right: 20px;">
      <el-avatar :src="avatar" v-if="avatar"></el-avatar>
      <slot name="avatar" v-else></slot>
    </el-col>
    <el-col :span="20">
      <div
        style="display: flex;"
        :style="{ justifyContent: align === 'left' ? 'flex-start' : author ? 'space-between' : 'flex-end' }"
      >
        <span v-if="author" class="cc-comment-author">{{ author }}</span>
        <slot name="author" v-else class="cc-comment-author"></slot>
        <span v-if="datetime" class="cc-comment-datetime">{{ datetime }}</span>
        <slot name="datetime" v-else class="cc-comment-datetime"></slot>
      </div>
      <div>
        <span v-if="content">{{ content }}</span>
        <slot name="content" v-else></slot>
      </div>
      <div
        v-if="$slots.action"
        class="cc-comment-action"
        style="display: flex;"
        :style="{ justifyContent: align === 'left' ? 'flex-start' : 'flex-end' }"
      >
        <slot name="action"></slot>
      </div>
     <div style="margin-top: 20px;">
       <slot v-if="$slots.default"></slot>
     </div>
    </el-col>
  </el-row>
</template>

<script lang='ts' setup>
import { withDefaults } from 'vue'

withDefaults(defineProps<{
  author?: string,
  avatar?: string,
  content?: string,
  datetime?: string,
  align?: 'left' | 'right'
}>(), {
  align: 'left'
})
</script>

<style lang='scss' scoped>
.cc-comment {
  &-author {
    margin-right: 8px;
    font-size: 14px;
    color: #00000073;
  }
  &-datetime {
    font-size: 12px;
    color: #ccc;
  }
  &-action {
    margin-top: 8px;
    font-size: 14px;
  }
}
</style>