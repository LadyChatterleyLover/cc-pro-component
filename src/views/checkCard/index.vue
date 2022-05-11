<template>
  <div class="container">
    <h3>基础使用</h3>
    <br />
    <cc-check-card
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    ></cc-check-card>
    <br />
    <br />
    <h3>单选模式</h3>
    <br />
    <cc-check-card-group>
      <cc-check-card title="Card A" description="选项一" value="A"></cc-check-card>
      <cc-check-card title="Card B" description="选项二" value="B"></cc-check-card>
      <cc-check-card title="Card C" value="C" disabled description="选项三，这是一个不可选项"></cc-check-card>
    </cc-check-card-group>
    <br />
    <br />
    <h3>多选模式</h3>
    <br />
    <cc-check-card-group multiple>
      <cc-check-card title="Card A" description="选项一" value="A"></cc-check-card>
      <cc-check-card title="Card B" description="选项二" value="B"></cc-check-card>
      <cc-check-card title="Card C" value="C" disabled description="选项三，这是一个不可选项"></cc-check-card>
    </cc-check-card-group>
    <br />
    <br />
    <h3>不同尺寸</h3>
    <br />
    <el-radio-group v-model="size">
      <el-radio-button label="small" />
      <el-radio-button label="default" />
      <el-radio-button label="large" />
    </el-radio-group>
    <br />
    <br />
    <cc-check-card title="Card title" description="This is the description" :size="size"></cc-check-card>
    <br />
    <br />
    <h3>自定义尺寸</h3>
    <br />
    <cc-check-card
      title="Card title"
      description="This is the description"
      style="width: 300px; height: 300px"
    ></cc-check-card>
    <br />
    <br />
    <h3>默认选中</h3>
    <br />
    <cc-check-card title="Card title" description="This is the description" v-model="checked"></cc-check-card>
    <br />
    <cc-check-card-group v-model="checks" multiple>
      <cc-check-card title="Card A" description="选项一" value="A"></cc-check-card>
      <cc-check-card title="Card B" description="选项二" value="B"></cc-check-card>
      <cc-check-card title="Card C" value="C" description="选项三，这是一个不可选项"></cc-check-card>
    </cc-check-card-group>
    <br />
    <br />
    <h3>操作栏</h3>
    <br />
    <cc-check-card title="Card title" description="This is the description">
      <template #extra>
        <el-dropdown>
          <el-icon-more></el-icon-more>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>菜单</el-dropdown-item>
              <el-dropdown-item>列表</el-dropdown-item>
              <el-dropdown-item>表单</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </cc-check-card>
    <br />
    <br />
    <h3>加载中</h3>
    <br />
    <cc-check-card title="Card title" description="This is the description" loading></cc-check-card>
    <br />
    <br />
    <h3>应用列表示例</h3>
    <br />
    <cc-check-card-group :options="options"></cc-check-card-group>
    <br />
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref('default')
const checked = ref(true)
const checks = ref(['A', 'B'])

const options = [
  {
    title: '图像分类',
    avatar: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    description: '这是一段关于该算法的说明',
    value: 'A',
  },
  {
    title: '图像分类',
    avatar: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    description: '这是一段关于该算法的说明',
    value: 'B',
  },
  {
    title: '图像分类',
    avatar: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    description: '这是一段关于该算法的说明',
    value: 'C',
  },
  {
    title: '图像分类',
    avatar: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    description: '这是一段关于该算法的说明',
    value: 'D',
  },
  {
    title: '图像分类',
    avatar: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    description: '这是一段关于该算法的说明',
    value: 'F',
  },
]
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #f9fafb;
  padding: 20px;
  overflow-y: scroll;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
