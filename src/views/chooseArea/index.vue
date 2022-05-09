<template>
  <cc-choose-area @change="changeArea"></cc-choose-area>
</template>

<script lang="ts" setup>
const changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
