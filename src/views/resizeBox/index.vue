<template>
  <div>
    <h3>基础使用</h3>
    <br />
    <cc-resize-box
      :directions="['right', 'bottom']"
      :style="{ width: '500px', minWidth: '100px', maxWidth: '100%', height: '250px', textAlign: 'center' }"
    >
      <div>We are building the future of content discovery and creation.</div>
      <el-divider />
      <div>
        ByteDance's content platforms enable people to enjoy content powered by AI technology. We inform, entertain, and
        inspire people across language, culture and geography.
      </div>
      <el-divider>ByteDance</el-divider>
      <div>Yiming Zhang is the founder and CEO of ByteDance.</div>
    </cc-resize-box>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
