import { unrefElement } from "../unrefElement"
import { watch, unref, type Ref, onUnmounted } from "vue"

export type Callback = (el: HTMLElement) => void

export const useRefElement = (target: HTMLElement | Ref<HTMLElement>, callback: Callback) => {
  const stopWatch = watch(
    () => unrefElement(target),
    (val) => {
      if (val) {
        callback(unref(val))
      }
    },
    {
      immediate: true,
      flush: "post",
    }
  )
  onUnmounted(() => {
    stopWatch()
  })
}
