<template>
  <el-card>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <cc-trend text="营业额"></cc-trend>
      </div>
      <div>
        <cc-trend text="销售额" type="down"></cc-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div>
        <cc-trend text="销售额" reverseColor></cc-trend>
      </div>
      <div>
        <cc-trend text="营业额" type="down" reverseColor></cc-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <cc-trend text="营业额" upIconColor="blue"></cc-trend>
      </div>
      <div>
        <cc-trend text="销售额" type="down" downIconColor="#123456"></cc-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div>
        <cc-trend text="营业额" upTextColor="blue"></cc-trend>
      </div>
      <div>
        <cc-trend text="销售额" type="down" downTextColor="yellow"></cc-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div>
        <cc-trend upIcon="CaretTop">营业额</cc-trend>
      </div>
      <div>
        <cc-trend type="down" downIcon="CaretBottom">销售额</cc-trend>
      </div>
    </div>
  </el-card>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>