import type { ComponentPublicInstance, Ref } from 'vue'
export type VueInstance = ComponentPublicInstance

export type MaybeRef<T> = Ref<T> | T
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null
