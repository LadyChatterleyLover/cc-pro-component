import { ref, onMounted, onUnmounted } from 'vue'
import styles from './index.module.scss'

export function useRipple(color: string = 'red') {
  const el = ref()
  const span = document.createElement('span')
  span.className = styles['cc--ripple--content']
  span.style.background = color

  const handler = (e: MouseEvent) => {
    if (el.value.contains(e.target)) {
      el.value.appendChild(span)
      el.value.classList.add(styles['cc--ripple--wrap'])

      span.classList.add(styles['cc--ripple--animation'])
      span.style.width = el.value.offsetWidth + 'px'
      span.style.height = el.value.offsetHeight + 'px'
      span.style.top = -(el.value.offsetHeight / 2 - e.offsetY) + 'px'
      span.style.left = -(el.value.offsetWidth / 2 - e.offsetX) + 'px'

      setTimeout(() => {
        span.classList.remove(styles['cc--ripple--content--ripple'])
        el.value.classList.remove(styles['cc--ripple--wrap'])
        el.value.removeChild(span)
      }, 500)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })

  return [el]
}
