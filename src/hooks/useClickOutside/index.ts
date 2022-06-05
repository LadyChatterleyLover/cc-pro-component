import { onMounted, onUnmounted, ref } from 'vue'
import type { MaybeElementRef } from '../unrefElement'
import { useRefElement } from '../useRefElement'

interface Options {
  target: MaybeElementRef,
  callback: (event: any) => void
  eventName?: keyof DocumentEventMap
}

export function useClickOutside(options: Options) {
  const { target, callback, eventName = 'click' } = options
  const handler = ref()
  useRefElement(target, (el: any) => {
     handler.value = (e: any) => {
      e.preventDefault()
      if (!el || el.contains(e.target)) return
      callback(e)
    }
    document.addEventListener(eventName, handler.value)
  })
  onUnmounted(() => {
    document.removeEventListener(eventName, handler.value)
  })
}
