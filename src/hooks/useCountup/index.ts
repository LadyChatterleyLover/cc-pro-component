import { ref, type Ref } from 'vue'
import type { CountUpOptions } from 'countup.js'
import { CountUp } from 'countup.js'
import { useRefElement } from '../useRefElement';

export interface Options {
  target: HTMLElement | Ref<HTMLElement>,
  autoplay?: boolean
  endValue: number
  options?: CountUpOptions
}

export function useCountup(opts: Options) {
  const { target, endValue, options, autoplay = true } = opts
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

  useRefElement(target, (el: HTMLElement) => {
    countUp.value = new CountUp(el, endValue, options)
    if (autoplay) {
      if (!countUp.value.error) {
        countUp.value.start()
      }
    }
  })

  return {
    start,
    pauseResume,
    reset,
    update,
  }
}
