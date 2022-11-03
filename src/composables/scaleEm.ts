import { computed, nextTick, onMounted, onUnmounted, ref, type Ref } from 'vue'

export default (
  dinPage: Ref<HTMLInputElement | null>,
  doc: Ref<HTMLElement>
) => {
  const isFullscreen = ref(false)

  const rootEmInPx = ref(parseFloat(getComputedStyle(doc.value).fontSize))
  const oneEmInPx = computed(() => {
    return parseFloat(getComputedStyle(doc.value).fontSize)
  })

  const fullScreenEmPxSize = computed(() => {
    const dinWidth = dinPage.value?.clientWidth || 0
    const dinWidthInEm = dinWidth / oneEmInPx.value
    return winWidth.value / dinWidthInEm
  })

  const winWidth = ref(window.innerWidth)
  const onResize = () => {
    isFullscreen.value = false
    winWidth.value = window.innerWidth
  }

  const resizeRootFont = () => {
    doc.value.style.setProperty('font-size', `${fullScreenEmPxSize.value}px`)
  }

  const toggleFullscreen = () => {
    if (!dinPage.value) return

    dinPage.value?.style.setProperty('--oneEmInPx', `${rootEmInPx.value}`)

    if (isFullscreen.value) {
      doc.value.style.removeProperty('font-size')
      isFullscreen.value = false
      return
    }

    resizeRootFont()

    isFullscreen.value = true
  }

  onMounted(() => {
    nextTick(() => {
      window.addEventListener('resize', onResize)
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    toggleFullscreen,
    isFullscreen,
    fullScreenEmPxSize
  }
}
