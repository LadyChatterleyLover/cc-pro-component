<template>
  <div class="cc-statistic-card-group" :style="{ flexDirection: direction }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide } from 'vue'
const props = withDefaults(
  defineProps<{
    direction?: 'row' | 'column'
  }>(),
  {
    direction: 'column',
  }
)

onMounted(() => {
  const cards = Array.from(document.querySelectorAll('.cc-statistic-card-group > .cc-statistic-card > .cc-card'))
  const statisticCards = Array.from(document.querySelectorAll('.cc-statistic-card-group > .cc-statistic-card'))
  cards.map((item) => {
    item.classList.remove('cc-card-bordered')
  })
  statisticCards.map((item, index) => {
    if (index !== cards.length && props.direction === 'row') {
      item.classList.add('cc-statistic-card-bordered')
    }
  })
})
</script>

<style scoped lang="scss">
.cc-statistic-card-group {
  display: flex;
  background: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 2px;
}
</style>
