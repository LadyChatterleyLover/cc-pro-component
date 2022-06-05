import { ref, onUnmounted, type Ref } from "vue"
import { useRefElement } from "../useRefElement"
import styles from "./index.module.scss"

export function useRipple(target: HTMLElement | Ref<HTMLElement>, color: string = "red") {
  const span = document.createElement("span")
  span.className = styles["cc--ripple--content"]
  span.style.background = color

  const handler = ref()

  useRefElement(target, (el: any) => {
    handler.value = (e: MouseEvent) => {
      if (el.contains(e.target)) {
        el.appendChild(span)
        el.classList.add(styles["cc--ripple--wrap"])

        span.classList.add(styles["cc--ripple--animation"])
        span.style.width = el.offsetWidth + "px"
        span.style.height = el.offsetHeight + "px"
        span.style.top = -(el.offsetHeight / 2 - e.offsetY) + "px"
        span.style.left = -(el.offsetWidth / 2 - e.offsetX) + "px"

        setTimeout(() => {
          span.classList.remove(styles["cc--ripple--content--ripple"])
          el.classList.remove(styles["cc--ripple--wrap"])
          el.removeChild(span)
        }, 400)
      }
    }
    document.addEventListener("click", handler.value)
  })
  onUnmounted(() => {
    document.removeEventListener("click", handler.value)
  })
}
