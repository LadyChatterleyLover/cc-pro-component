<template>
  <div>
    <h3>基础使用</h3>
    <br />
    <cc-avatar-group>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar>k</el-avatar>
    </cc-avatar-group>
  </div>
  <br />
  <br />
  <div>
    <h3>最多显示</h3>
    <br />
    <cc-avatar-group :maxCount="2">
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar>A</el-avatar>
      <el-avatar>B</el-avatar>
    </cc-avatar-group>
  </div>
  <br />
  <br />
  <div>
    <h3>尺寸</h3>
    <br />
    <cc-avatar-group size="small">
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
    </cc-avatar-group>
    <br />
    <cc-avatar-group>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
    </cc-avatar-group>
    <br />
    <cc-avatar-group size="large">
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
      <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
    </cc-avatar-group>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
