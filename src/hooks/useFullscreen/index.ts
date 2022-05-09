import { ref, onUnmounted, nextTick } from 'vue'
import screenfull from 'screenfull'
import {} from 'process'

export interface Options {
  onExit?: () => void
  onEnter?: () => void
}

export function useFullscreen(options?: Options) {
  const { onExit, onEnter } = options || {}
  const state = ref<boolean>(false)
  const target = ref<HTMLElement>(document.body)

  const onChange = () => {
    if (screenfull.isEnabled) {
      const { isFullscreen } = screenfull
      if (isFullscreen) {
        onEnter?.()
      } else {
        screenfull.off('change', onChange)
        onExit?.()
      }
      state.value = isFullscreen
    }
  }

  const enterFullscreen = () => {
    const el = target.value
    if (!el) {
      return
    }
    if (screenfull.isEnabled) {
      try {
        screenfull.request(el)
        screenfull.on('change', onChange)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const exitFullscreen = () => {
    if (!state.value) {
      return
    }
    if (screenfull.isEnabled) {
      screenfull.exit()
    }
  }

  const toggleFullscreen = () => {
    if (state.value) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  onUnmounted(() => {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange)
    }
  })

  return {
    el: target,
    isFullscreen: state.value,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
    isEnabled: screenfull.isEnabled,
  }
}
