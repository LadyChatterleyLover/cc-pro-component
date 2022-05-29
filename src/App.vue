<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue"
import { useSettingStore } from "@/stores/setting"

const store = useSettingStore()

const themeMode = computed(() => store.themeMode)

const isDarkBackground = ref<string>("")
const isDarkColor = ref<string>("")

watch(
  () => themeMode.value,
  (val) => {
    const html = document.getElementsByTagName('html')[0]
    if (val === "light") {
      isDarkBackground.value = "#f0f2f5"
      isDarkColor.value = "#303133"
      html.classList.remove('dark')
    } else {
      isDarkBackground.value = "#1D1E1F"
      isDarkColor.value = "#fff"
      html.classList.add('dark')
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
@import "./styles/base.scss";
@import "./styles/ui.scss";
.el-main {
  background: v-bind(isDarkBackground) !important;
  color: v-bind(isDarkColor) !important;
}
</style>
