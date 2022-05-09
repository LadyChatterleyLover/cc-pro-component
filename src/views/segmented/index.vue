<template>
  <div>
    <h3>基础使用</h3>
    <br />
    <cc-segmented v-model="value1" :options="options1"></cc-segmented>
    <br />
    <br />
    <h3>禁用状态</h3>
    <br />
    <cc-segmented v-model="value2" disabled :options="options1"></cc-segmented>
    <br />
    <cc-segmented v-model="value3" :options="options2"></cc-segmented>
    <br />
    <br />
    <h3>自定义内容</h3>
    <br />
    <cc-segmented v-model="value4" :options="options3">
      <template #user1="{ item }">
        <div class="flex">
          <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
          <div>user1</div>
        </div>
      </template>
      <template #user2="{ item }">
        <div class="flex">
          <el-avatar style="background: #f56a00">K</el-avatar>
          <div>user2</div>
        </div>
      </template>
      <template #user3="{ item }">
        <div class="flex">
          <el-avatar style="background: #87d068">Z</el-avatar>
          <div>user3</div>
        </div>
      </template>
    </cc-segmented>
    <br />
    <br />
    <h3>不同尺寸</h3>
    <cc-segmented v-model="value5" :options="options1" size="large"></cc-segmented>
    <br />
    <cc-segmented v-model="value5" :options="options1"></cc-segmented>
    <br />
    <cc-segmented v-model="value5" :options="options1" size="small"></cc-segmented>
  </div>
</template>

<script lang="ts" setup>
const value1 = 0
const value2 = 0
const value3 = 0
const value4 = 0
const value5 = 0
const options1 = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]
const options2 = [
  "Daily",
  { label: "Weekly", value: "Weekly", disabled: true },
  "Monthly",
  { label: "Quarterly", value: "Quarterly", disabled: true },
  "Yearly",
]
const options3 = [
  { label: "Weekly", value: "Weekly", slot: "user1" },
  { label: "Quarterly", value: "Quarterly", slot: "user2" },
  { label: "Quarterly", value: "Quarterly", slot: "user3" },
]
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
