<template>
  <div class="cc-grid-item" :style="{ width: 100 / rows + '%', padding: $slots.default ? 0 : '24px' }">
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <div>
        <el-image
          :src="image"
          :style="{
            width: imageWidth + 'px',
            height: imageHeight + 'px',
          }"
        >
        </el-image>
      </div>
      <div class="cc-grid-item-text">
        {{ text }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue';


const rows = inject<number>("rows")!

const props = withDefaults(
  defineProps<{
    image?: string
    text?: string
    imageWidth?: number | string
    imageHeight?: number | string
  }>(),
  {
    image: "",
    text: "",
    imageWidth: 20,
    imageHeight: 20,
  }
)
</script>

<style lang="scss" scoped>
.cc-grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0 0 0 rgb(0 0 0 / 6%), 0 1px 0 0 rgb(0 0 0 / 6%), 1px 1px 0 0 rgb(0 0 0 / 6%),
    inset 1px 0 0 0 rgb(0 0 0 / 6%), inset 0 1px 0 0 rgb(0 0 0 / 6%);
  transition: all 0.3s;
  height: fit-content;

  &-text {
    font-size: 14px;
  }
}
</style>
