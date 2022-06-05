import { unrefElement } from "../unrefElement"
import type { MaybeElementRef } from "../unrefElement"
import { watch, unref } from "vue"

export type Callback = (el: MaybeElementRef) => void

export const useRefElement = (target: MaybeElementRef, callback: Callback) => {
  watch(
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
}
