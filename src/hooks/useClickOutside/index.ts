import { onMounted, onUnmounted, ref } from 'vue'

interface Options {
  callback: (event: any) => void
  eventName?: keyof DocumentEventMap
}

export function useClickOutside(options: Options) {
  const { callback, eventName = 'click' } = options
  const el = ref()

  const handler = (e: any) => {
    e.preventDefault()
    if (!el || el.value.contains(e.target)) return
    callback(e)
  }

  onMounted(() => {
    document.addEventListener(eventName, handler)
  })
  onUnmounted(() => {
    document.removeEventListener(eventName, handler)
  })
  return [el]
}
