<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in list" :key="index">
        <card
          :title="item.title"
          :tag="item.tag"
          :value="item.value"
          :tagType="item.tagType"
          :descTitle="item.descTitle"
          :desc="item.desc"
        >
          <template #image>
            <img
              style="width: 36px; height: 36px; border-radius: 50%"
              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            />
          </template>
        </card>
      </el-col>
    </el-row>
    <div>
      <el-button type="primary" @click="toggle">暗黑</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import card from '@/components/business/card/index.vue'

const list: any = [
  {
    title: '访问数',
    tag: '月',
    tagType: '',
    value: '$2,000',
    descTitle: '总访问数',
    desc: '$120,000',
  },
  {
    title: '访问数',
    tag: '月',
    tagType: '',
    value: '$2,000',
    descTitle: '总访问数',
    desc: '$120,000',
  },
  {
    title: '访问数',
    tag: '月',
    tagType: '',
    value: '$2,000',
    descTitle: '总访问数',
    desc: '$120,000',
  },
  {
    title: '访问数',
    tag: '月',
    tagType: '',
    value: '$2,000',
    descTitle: '总访问数',
    desc: '$120,000',
  },
]

const toggle = () => {
  const html = document.getElementsByTagName('html')[0]
  html.classList.toggle('dark')
}
</script>

<style lang="scss" scoped></style>
