import { onMounted, ref } from 'vue'
import type { CountUpOptions } from 'countup.js'
import { CountUp } from 'countup.js'

export interface Options {
  autoplay?: boolean
  endValue: number
  options?: CountUpOptions
}

export function useCountup(opts: Options) {
  const { endValue, options, autoplay = true } = opts
  const el = ref()
  const countUp = ref<CountUp>()

  const start = (callback?: (args?: any) => any) => {
    countUp.value!.start(callback)
  }

  const pauseResume = () => {
    countUp.value!.pauseResume()
  }
  const reset = () => {
    countUp.value!.reset()
  }
  const update = (val: number) => {
    countUp.value!.update(val)
  }

  onMounted(() => {
    countUp.value = new CountUp(el.value!, endValue, options)
    if (autoplay) {
      if (!countUp.value.error) {
        countUp.value.start()
      }
    }
  })

  return {
    el,
    start,
    pauseResume,
    reset,
    update,
  }
}
