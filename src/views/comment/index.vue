<template>
  <div style="width: 500px">
    <cc-comment
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      author="Socrates"
      content="Comment body content."
      datetime="1 hour"
    >
      <template #action>
        <div><el-icon-star></el-icon-star>66</div>
        <div class="mx-4"><el-icon-pointer></el-icon-pointer>88</div>
        <div><el-icon-documentcopy></el-icon-documentcopy>reply</div>
      </template>
    </cc-comment>
    <br />
    <br />
    <cc-comment
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      author="Socrates"
      content="Comment body content."
      datetime="1 hour"
    >
      <template #action>
        <div><el-icon-star></el-icon-star>66</div>
        <div class="mx-4"><el-icon-pointer></el-icon-pointer>88</div>
        <div><el-icon-documentcopy></el-icon-documentcopy>reply</div>
      </template>
      <cc-comment
        avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        author="Socrates"
        content="Comment body content."
        datetime="1 hour"
      >
        <template #action>
          <div><el-icon-star></el-icon-star>66</div>
          <div class="mx-4"><el-icon-pointer></el-icon-pointer>88</div>
          <div><el-icon-documentcopy></el-icon-documentcopy>reply</div>
        </template>
      </cc-comment>
    </cc-comment>
    <br />
    <br />
    <cc-comment
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      author="Socrates"
      datetime="1 hour"
      align="right"
    >
      <template #action>
        <el-button size="small">Cancel</el-button>
        <el-button size="small" type="primary" style="margin-left: 10px">Reply</el-button>
      </template>
      <template #content>
        <el-input size="small" placeholder="Here is you content."></el-input>
      </template>
    </cc-comment>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-right: 4px;
}
</style>
