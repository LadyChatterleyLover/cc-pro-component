<template>
  <cc-card class="cc-statistic-card" :loading="loading" :bordered="bordered" v-if="direction !== 'row'">
    <template #title>
      <div>
        <slot v-if="$slots.title" name="title"></slot>
        <div v-else>{{ title }}</div>
      </div>
    </template>
    <template #extra>
      <slot v-if="$slots.extra" name="extra"></slot>
      <div v-else>{{ extra }}</div>
    </template>
    <div>
      <cc-statistic :value="value" :showGroupSeparator="showGroupSeparator">
        <template #prefix>
          <slot name="prefix"></slot>
        </template>
        <template #suffix>
          <slot name="suffix"></slot>
        </template>
      </cc-statistic>
      <div style="width: 100%">
        <slot name="description" v-if="$slots.description"></slot>
        <div v-else>{{ description }}</div>
      </div>
    </div>
    <div v-if="$slots.chart" class="cc-statistic-card-chart">
      <slot name="chart"></slot>
    </div>
    <div class="cc-statistic-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </cc-card>
  <cc-card v-else class="cc-statistic-card">
    <div class="cc-statistic-card-vertical">
      <div v-if="$slots.chart" class="cc-statistic-card-chart cc-statistic-card-chart-vertical">
        <slot name="chart"></slot>
      </div>
      <div>
        <div class="cc-statistic-card-title">
          <slot v-if="$slots.title" name="title"></slot>
          <div v-else>{{ title }}</div>
        </div>
        <div>
          <cc-statistic :value="value" :showGroupSeparator="showGroupSeparator">
            <template #prefix>
              <slot name="prefix"></slot>
            </template>
            <template #suffix>
              <slot name="suffix"></slot>
            </template>
          </cc-statistic>
          <div style="width: 100%">
            <slot name="description" v-if="$slots.description"></slot>
            <div v-else>{{ description }}</div>
          </div>
        </div>
      </div>
    </div>
  </cc-card>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
withDefaults(
  defineProps<{
    title?: string
    extra?: string
    description?: string
    loading?: boolean
    bordered?: boolean
    value?: number
    chartPlacement?: 'left' | 'right' | 'bottom' | ''
    showGroupSeparator?: boolean
  }>(),
  {
    title: '',
    extra: '',
    description: '',
    loading: false,
    bordered: true,
    chartPlacement: '',
    value: 0,
    showGroupSeparator: true,
  }
)

const direction: any = computed(() => {
  return getCurrentInstance()?.parent?.props?.direction
})
</script>

<style scoped lang="scss">
.cc-statistic-card {
  position: relative;
  &-title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
  }
  &-chart {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 8px;
    height: 100%;
    &-vertical {
      margin-right: 16px;
      position: relative;
      top: -10px;
    }
  }
  &-footer {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  &-bordered {
    &::after {
      position: absolute;
      content: '';
      right: 30px;
      top: 15%;
      width: 1px;
      height: 70%;
      background: rgba(0, 0, 0, 0.06);
    }
  }
  &-vertical {
    display: flex;
    align-items: center;
  }
}
</style>
