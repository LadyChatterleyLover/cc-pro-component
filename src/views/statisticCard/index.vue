<template>
  <div class="container">
    <h3>基础使用</h3>
    <br />
    <cc-statistic-card style="width: 268px" :value="12345">
      <template #title>
        <el-space>
          <span>部门一</span>
          <el-icon-arrowright></el-icon-arrowright>
        </el-space>
      </template>
      <template #extra>
        <el-icon-more></el-icon-more>
      </template>
      <template #prefix>￥</template>
      <template #description>
        <el-space>
          <div style="display: flex; font-size: 12px">
            <span>实际完成度</span>
            <span style="color: rgba(0, 0, 0, 0.45); margin-left: 4px">82.3%</span>
          </div>
          <div style="display: flex; font-size: 12px">
            <span>当前目标</span>
            <span style="color: rgba(0, 0, 0, 0.45); margin-left: 4px">¥6000</span>
          </div>
        </el-space>
      </template>
      <template #chart>
        <el-image src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg" alt="chart" />
      </template>
    </cc-statistic-card>
    <br />
    <br />
    <h3>只展示图表</h3>
    <br />
    <cc-statistic-card style="max-width: 400px" :value="12345">
      <template #title>
        <el-space>
          <span>部门一</span>
          <el-icon-arrowright></el-icon-arrowright>
        </el-space>
      </template>
      <template #extra>
        <el-icon-more></el-icon-more>
      </template>
      <template #chart>
        <el-image src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg" alt="chart" />
      </template>
    </cc-statistic-card>
    <br />
    <br />
    <h3>只展示图表</h3>
    <br />
    <cc-statistic-card style="width: 268px" :value="12345">
      <template #title>
        <el-space>
          <span>部门一</span>
          <el-icon-arrowright></el-icon-arrowright>
        </el-space>
      </template>
      <template #extra>
        <el-icon-more></el-icon-more>
      </template>
      <template #prefix>￥</template>
      <template #footer>
        <div style="display: flex; justify-content: space-between">
          <div>累计注册数</div>
          <div>15.1万</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>本月注册数</div>
          <div>15.1万</div>
        </div>
      </template>
    </cc-statistic-card>
    <br />
    <br />
    <h3>总分/主次关系</h3>
    <br />
    <cc-statistic-card-group vertical>
      <cc-statistic-card title="总流量(人次)" :value="12345"> </cc-statistic-card>
      <cc-statistic-card title="总流量(人次)" :value="12345" description="占比61.5%">
        <template #chart>
          <el-image
            src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
            alt="百分比"
            style="width: 66px; height: 66px"
          ></el-image>
        </template>
      </cc-statistic-card>
      <cc-statistic-card title="免费流量" :value="12345" description="占比61.5%">
        <template #chart>
          <el-image
            src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
            alt="百分比"
            style="width: 66px; height: 66px"
          ></el-image>
        </template>
      </cc-statistic-card>
    </cc-statistic-card-group>
    <br />
    <br />
    <h3>总分/业绩目标</h3>
    <br />
    <cc-card split="vertical">
      <cc-card :bordered="false">
        <cc-statistic-card :bordered="false" title="财年业绩目标" :value="82.6" description="日同比61.5%">
          <template #suffix>亿</template>
          <template #chart>
            <el-image
              src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
              alt="折线图"
              style="width: 100%"
            ></el-image>
          </template>
          <template #footer>
            <div style="display: flex; justify-content: space-between">
              <div>累计注册数</div>
              <div>15.1万</div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>本月注册数</div>
              <div>15.1万</div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>本月注册数</div>
              <div>15.1万</div>
            </div>
          </template>
        </cc-statistic-card>
      </cc-card>
      <cc-card>
        <cc-statistic-card :bordered="false" title="财年业绩目标" :value="82.6" description="日同比61.5%">
          <template #suffix>亿</template>
          <template #chart>
            <el-image
              src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
              alt="折线图"
              style="width: 100%"
            ></el-image>
          </template>
        </cc-statistic-card>
      </cc-card>
      <cc-card>
        <cc-statistic-card :bordered="false" title="财年业绩目标" :value="82.6" description="日同比61.5%">
          <template #suffix>亿</template>
          <template #chart>
            <el-image
              src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
              alt="折线图"
              style="width: 100%"
            ></el-image>
          </template>
        </cc-statistic-card>
      </cc-card>
      <cc-card>
        <cc-statistic-card :bordered="false" title="财年业绩目标" :value="82.6" description="日同比61.5%">
          <template #suffix>亿</template>
          <template #chart>
            <el-image
              src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
              alt="折线图"
              style="width: 100%"
            ></el-image>
          </template>
        </cc-statistic-card>
      </cc-card>
    </cc-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #f9fafb;
  padding: 20px;
  overflow-y: scroll;
}
</style>
