import { computed } from "vue"
import { useSettingStore } from "@/stores/setting"


export const useThemeMode = () => {
  const store = useSettingStore()
  const themeMode = computed(() => store.themeMode)
  const bgColor = computed(() => {
    return themeMode.value === "light" ? "#fff" : "#1d1e1f"
  })
  const color = computed(() => {
    return themeMode.value === "light" ? "#fff" : "#1d1e1f"
  })
  return {
    bgColor,
    color,
    themeMode
  }
}