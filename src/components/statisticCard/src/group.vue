<template>
  <div class="cc-statistic-card-group" :style="{ flexDirection: vertical ? 'row' : 'column' }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
const props = withDefaults(
  defineProps<{
    vertical?: boolean
  }>(),
  {
    vertical: true,
  }
)

onMounted(() => {
  const cards = Array.from(document.querySelectorAll('.cc-statistic-card-group > .cc-statistic-card > .cc-card'))
  const statisticCards = Array.from(document.querySelectorAll('.cc-statistic-card-group > .cc-statistic-card'))
  cards.map((item) => {
    item.classList.remove('cc-card-bordered')
  })
  statisticCards.map((item, index) => {
    if (index !== statisticCards.length && props.vertical) {
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
