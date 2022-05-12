<template>
  <div class="container">
   <h3>List</h3>
   <br>
   <cc-skeleton type="list"></cc-skeleton>
   <br>
   <br>
   <h3>结果页</h3>
   <br>
   <cc-skeleton type="result"></cc-skeleton>
   <br>
   <br>
   <h3>详情页</h3>
   <br>
   <cc-skeleton type="descriptions"></cc-skeleton>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f9fafb;
  padding: 20px;
  overflow-y: scroll;
}
</style>
