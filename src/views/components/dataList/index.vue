<template>
  <div style="width: 800px">
    <div>基础用法</div>
    <br />
    <cc-data-list>
      <template #header>List header</template>
      <cc-data-list-item>Racing car sprays burning fuel into crowd.</cc-data-list-item>
      <cc-data-list-item>Japanese princess to wed commoner.</cc-data-list-item>
      <cc-data-list-item>Australian walks 100km after outback crash.</cc-data-list-item>
      <cc-data-list-item>Man charged over missing wedding girl.</cc-data-list-item>
      <cc-data-list-item>Los Angeles battles huge wildfires.</cc-data-list-item>
      <template #footer>List footer</template>
    </cc-data-list>

    <br />
    <br />
    <div>自定义内容</div>
    <br />
    <cc-data-list>
      <template #header>List header</template>
      <cc-data-list-item>
        <cc-data-list-item-meta
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          title="cc-element-component title1"
          description="cc-element-component description1"
        ></cc-data-list-item-meta>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list-item-meta
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          title="cc-element-component title2"
          description="cc-element-component description2"
        ></cc-data-list-item-meta>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list-item-meta
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          title="cc-element-component title3"
          description="cc-element-component description3"
        ></cc-data-list-item-meta>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list-item-meta
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          title="cc-element-component title4"
          description="cc-element-component description4"
        ></cc-data-list-item-meta>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list-item-meta
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          title="cc-element-component title5"
          description="cc-element-component description5"
        ></cc-data-list-item-meta>
      </cc-data-list-item>
      <template #footer>List footer</template>
    </cc-data-list>
    <br />
    <br />
    <div>滚动触底</div>
    <br />
    <cc-data-list maxHeight="200" @reach-bottom="reachBottom">
      <template #header>List header</template>
      <cc-data-list-item>Racing car sprays burning fuel into crowd.</cc-data-list-item>
      <cc-data-list-item>Japanese princess to wed commoner.</cc-data-list-item>
      <cc-data-list-item>Australian walks 100km after outback crash.</cc-data-list-item>
      <cc-data-list-item>Man charged over missing wedding girl.</cc-data-list-item>
      <cc-data-list-item>Los Angeles battles huge wildfires.</cc-data-list-item>
      <template #footer>List footer</template>
    </cc-data-list>
    <br />
    <br />
    <div>栅格布局</div>
    <br />
    <cc-data-list grid :border="false">
      <cc-data-list-item>
        <cc-data-list>
          <template #header>Platform</template>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
        </cc-data-list>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list>
          <template #header>Platform</template>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
        </cc-data-list>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list>
          <template #header>Platform</template>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
        </cc-data-list>
      </cc-data-list-item>
      <cc-data-list-item>
        <cc-data-list>
          <template #header>Platform</template>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
          <cc-data-list-item>iOS</cc-data-list-item>
        </cc-data-list>
      </cc-data-list-item>
    </cc-data-list>
  </div>
</template>

<script lang="ts" setup>
const reachBottom = () => {
  console.log("触底了")
}
</script>

<style lang="scss" scoped></style>
