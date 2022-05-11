<template>
  <div class="container">
    <h3>基础使用</h3>
    <br />
    <cc-card title="默认尺寸" subTitle="副标题" extra="extra" tooltip="这是提示" style="max-width: 300px">
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </cc-card>
    <br />
    <cc-card title="小尺寸卡片" extra="extra" tooltip="这是提示" size="small" style="max-width: 300px">
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </cc-card>
    <br />
    <br />
    <h3>栅格布局</h3>
    <br />
    <cc-card ghost direction="column">
      <cc-card layout="center" bordered :colSpan="24"> colSpan - 24 </cc-card>
      <cc-card layout="center" bordered :colSpan="12"> colSpan - 12 </cc-card>
      <cc-card layout="center" bordered :colSpan="8"> colSpan - 8 </cc-card>
      <cc-card layout="center" bordered :colSpan="0"> colSpan - 0 </cc-card>
    </cc-card>
    <br />
    <br />
    <h3>24栅格</h3>
    <br />
    <cc-card :gutter="8" title="24栅格">
      <cc-card layout="center" bordered :colSpan="12"> colSpan - 24 </cc-card>
      <cc-card layout="center" bordered :colSpan="6"> colSpan - 12 </cc-card>
      <cc-card layout="center" bordered :colSpan="6"> colSpan - 8 </cc-card>
    </cc-card>
    <br />
    <cc-card :gutter="8">
      <cc-card layout="center" bordered colSpan="200px"> colSpan - 200px </cc-card>
      <cc-card layout="center" bordered> Auto </cc-card>
    </cc-card>
    <br />
    <cc-card :gutter="8">
      <cc-card layout="center" bordered> Auto </cc-card>
      <cc-card layout="center" bordered colSpan="30%"> colSpan - 30% </cc-card>
    </cc-card>
    <br />
    <br />
    <h3>卡片切分</h3>
    <br />
    <cc-card title="左右分栏带标题" extra="2019年9月28日" bordered headerBordered split="vertical">
      <cc-card title="左侧详情" colSpan="50%">
        <div style="height: 360px">左侧内容</div>
      </cc-card>
      <cc-card title="流量占用情况">
        <div style="height: 360px">右侧内容</div>
      </cc-card>
    </cc-card>
    <br />
    <br />
    <h3>左右分栏</h3>
    <br />
    <cc-card split="vertical">
      <cc-card title="左侧详情" colSpan="30%"> 左侧内容 </cc-card>
      <cc-card title="左右分栏子卡片带标题" headerBordered>
        <div style="height: 360px">右侧内容</div>
      </cc-card>
    </cc-card>
    <br />
    <br />
    <h3>复杂切分</h3>
    <br />
    <cc-card title="复杂切分" extra="2019年9月28日" bordered headerBordered split="vertical">
      <cc-card split="horizontal">
        <cc-card split="horizontal">
          <cc-card split="vertical">
            <cc-card title="昨日全部流量">123</cc-card>
            <cc-card title="本月累计流量">234</cc-card>
            <cc-card title="今年累计流量">345</cc-card>
          </cc-card>
          <cc-card split="vertical">
            <cc-card title="运行中试验">12/56</cc-card>
            <cc-card title="历史试验总数">134 个</cc-card>
          </cc-card>
        </cc-card>
        <cc-card title="流量趋势">
          <div>图表</div>
          <div>图表</div>
          <div>图表</div>
          <div>图表</div>
          <div>图表</div>
        </cc-card>
      </cc-card>
      <cc-card title="流量占用情况">右侧内容</cc-card>
    </cc-card>
    <br />
    <br />
    <h3>多行卡片</h3>
    <br />
    <cc-card :gutter="[16, 16]" wrap title="换行">
      <cc-card colSpan="12" layout="center" bordered> Col </cc-card>
      <cc-card colSpan="12" layout="center" bordered> Col </cc-card>
      <cc-card colSpan="12" layout="center" bordered> Col </cc-card>
      <cc-card colSpan="12" layout="center" bordered> Col </cc-card>
    </cc-card>
    <br />
    <br />
    <h3>加载中</h3>
    <br />
    <cc-card style="max-width: 300px" loading></cc-card>
    <br />
    <br />
    <h3>操作项</h3>
    <br />
    <cc-card style="max-width: 300px" title="Actions 操作项" :actions="actions">
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </cc-card>
    <br />
    <br />
    <h3>阴影效果</h3>
    <br />
    <cc-card style="max-width: 300px" title="Actions 操作项" hoverable>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </cc-card>
  </div>
</template>

<script setup lang="ts">
const actions = [
  {
    icon: 'Setting',
  },
  {
    icon: 'Edit',
  },
  {
    icon: 'More',
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
</style>
