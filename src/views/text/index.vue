<template>
  <div>
    <h3>基础使用</h3>
    <br />
    <cc-text text="来日纵使千千阙歌，飘于远方我路上"></cc-text>
    <br />
    <br />
    <h3>设置主题</h3>
    <br />
    <div style="display: flex">
      <div style="margin-right: 10px">
        <cc-text type="primary" text="主色"></cc-text>
      </div>
      <div style="margin-right: 10px">
        <cc-text type="danger" text="错误"></cc-text>
      </div>
      <div style="margin-right: 10px">
        <cc-text type="success" text="成功"></cc-text>
      </div>
      <div style="margin-right: 10px">
        <cc-text type="warning" text="警告"></cc-text>
      </div>
      <div style="margin-right: 10px">
        <cc-text type="info" text="信息"></cc-text>
      </div>
    </div>
    <br />
    <br />
    <h3>拨打电话</h3>
    <br />
    <cc-text mode="phone" text="123456789"></cc-text>
    <br />
    <br />
    <h3>日期格式化</h3>
    <br />
    <cc-text mode="date" :text="Date.now()"></cc-text>
    <br />
    <br />
    <h3>姓名脱敏</h3>
    <br />
    <cc-text mode="name" text="陈奕迅"></cc-text>
    <cc-text mode="name" text="欧阳菲菲"></cc-text>
    <br />
    <br />
    <h3>显示金额</h3>
    <br />
    <cc-text mode="price" prefix="￥" text="123456789.32"></cc-text>
    <br />
    <br />
    <h3>前缀后缀</h3>
    <br />
    <cc-text prefix="$" text="123"></cc-text>
    <br />
    <cc-text text="苹果">
      <template #suffix>
        <el-icon :size="20">
          <Search></Search>
        </el-icon>
      </template>
    </cc-text>
    <br />
    <br />
    <h3>超出隐藏</h3>
    <br />
    <div style="width: 250px">
      <cc-text
        :lines="2"
        text="Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。"
      ></cc-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue"
</script>

<style lang="scss" scoped></style>
