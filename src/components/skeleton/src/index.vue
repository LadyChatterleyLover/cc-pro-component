<template>
  <div class="cc-skeleton">
    <template v-if="type === 'list'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3"></el-skeleton-item>
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px"></el-skeleton-item>
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <el-skeleton animated>
            <template #template>
              <div class="cc-skeleton-list-title">
                <div class="cc-skeleton-list-title-item" v-for="item in 6" :key="item">
                  <el-skeleton-item style="width: 100px" variant="h3"></el-skeleton-item>
                  <div>
                    <el-skeleton-item style="width: 64px; height: 48px" variant="text"></el-skeleton-item>
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </el-card>
        <br />
        <el-card>
          <el-skeleton animated>
            <template #template>
              <div style="display: flex; justify-content: space-between">
                <div>
                  <el-skeleton-item variant="h1" style="width: 200px"></el-skeleton-item>
                </div>
                <div style="display: flex">
                  <el-skeleton-item variant="h1" style="width: 120px; margin-right: 10px"></el-skeleton-item>
                  <el-skeleton-item variant="h1" style="width: 80px"></el-skeleton-item>
                </div>
              </div>
            </template>
          </el-skeleton>
          <el-skeleton animated>
            <template #template>
              <div class="cc-skeleton-list-content" v-for="item in 5" :key="item">
                <div style="flex: 1">
                  <div><el-skeleton-item variant="h3" style="width: 100px"></el-skeleton-item></div>
                  <div><el-skeleton-item variant="h3" style="width: 60%"></el-skeleton-item></div>
                </div>
                <div>
                  <el-skeleton-item variant="h1" style="width: 165px"></el-skeleton-item>
                </div>
              </div>
              <div class="cc-skeleton-list-content-footer">
                <el-skeleton-item variant="h1" style="width: 102px"></el-skeleton-item>
              </div>
            </template>
          </el-skeleton>
        </el-card>
      </div>
    </template>
    <template v-if="type === 'result'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3"></el-skeleton-item>
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px"></el-skeleton-item>
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <div class="cc-skeleton-result">
            <div>
              <el-skeleton style="--el-skeleton-circle-size: 64px">
                <template #template>
                  <el-skeleton-item variant="circle"></el-skeleton-item>
                </template>
              </el-skeleton>
            </div>
            <div class="flex" style="margin-top: 20px">
              <el-skeleton animated>
                <template #template>
                  <div class="flex">
                    <el-skeleton-item
                      variant="h1"
                      style="width: 214px; height: 32px; margin-bottom: 8px"
                    ></el-skeleton-item>
                  </div>
                  <div class="flex">
                    <el-skeleton-item variant="h1" style="width: 328px; height: 24px"></el-skeleton-item>
                  </div>
                  <el-space class="flex" :size="8" style="margin-top: 24px">
                    <el-skeleton-item variant="h1" style="width: 116px; height: 32px"></el-skeleton-item>
                    <el-skeleton-item variant="h1" style="width: 116px; height: 32px"></el-skeleton-item>
                  </el-space>
                </template>
              </el-skeleton>
            </div>
          </div>
        </el-card>
      </div>
    </template>
    <template v-if="type === 'descriptions'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3"></el-skeleton-item>
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px"></el-skeleton-item>
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <div v-for="item in 2" :key="item" style="margin-bottom: 16px">
            <el-skeleton animated>
              <template #template>
                <div><el-skeleton-item variant="h1" style="width: 100px; margin-bottom: 16px"></el-skeleton-item></div>
                <div class="cc-skeleton-descriptions-content" v-for="item in 3" :key="item">
                  <div class="cc-skeleton-descriptions-content-item" v-for="item1 in 3" :key="item1">
                   <el-skeleton-item style="height: 16px;margin-top: 8px;"></el-skeleton-item>
                  </div>
                </div>
              </template>
            </el-skeleton>
          </div>
          <el-divider></el-divider>
        </el-card>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: "list" | "result" | "descriptions"
    active?: boolean
  }>(),
  {
    type: "list",
    active: true,
  }
)
</script>

<style lang="scss" scoped>
.cc-skeleton {
  width: 100%;
  &-list {
    &-title {
      display: flex;
      align-items: center;
      &-item {
        padding-left: 42px;
        flex: 1;
        &:first-child {
          padding-left: 0;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
        }
      }
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      &-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 24px;
      }
    }
  }
  &-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 128px;
  }
  &-descriptions {
    &-content {
      width: 100%;
      justify-content: space-between;
      display: flex;
      &-item {
        flex: 1;
        padding: 0 24px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
