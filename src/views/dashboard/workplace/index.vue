<template>
  <el-row>
    <el-col :span="15">
      <el-card>
        <cc-grid>
          <cc-grid-item v-for="item in 6" :key="item">
            <card
              type="desc"
              title="Alipay"
              avatar="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              desc="那是一种内在的东西，他们到达不了，也无法触及的"
              name="科学搬砖组"
              date="几秒前"
            ></card>
          </cc-grid-item>
        </cc-grid>
      </el-card>
    </el-col>
    <el-col :offset="1" :span="8">
      <cc-card>
        <cc-grid>
          <cc-grid-item v-for="item in 6" :key="item" text="首页" image="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"></cc-grid-item>
        </cc-grid>
      </cc-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Card from "../../../components/business/card/index.vue"
</script>

<style lang="scss" scoped></style>
