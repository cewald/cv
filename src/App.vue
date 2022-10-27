<template>
  <div
    class="din-container print:my-0 print:shadow-none"
    :class="[
      isFullscreen ? 'cursor-zoom-out' : 'my-4 cursor-zoom-in shadow-cnt'
    ]"
    ref="dinPage"
    @click="toggleFullScreen"
  >
    <HeaderBlock />
    <HelloWorld msg="Hallo Welt" class="p-8">
      <p>
        Experienced enthusiast in all stages of advanced full-stack development
        and engineering with strong knowledge in coding-paradigms,
        continuous-integration, testing and debugging processes. Bringing forth
        experience and expertise in designing, installation, testing and
        maintaining complex code-infrastructure, equipped with a diverse and
        promising skill-set.
      </p>
    </HelloWorld>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'

import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const isFullscreen = ref(false)

const dinPage = ref<HTMLInputElement | null>(null)
const doc = ref<HTMLElement>(document.documentElement)

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

const toggleFullScreen = () => {
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
</script>

<style lang="scss">
@page {
  size: A4;
  margin: 0;
}

.din-container {
  --pageWidthCm: 21;
  --oneCmInPx: 96 / 2.54;
  --oneEmInPx: 16;
  --pageWidthPx: calc(var(--oneCmInPx) * var(--pageWidthCm));
  --pageWidth: calc(var(--pageWidthPx) / var(--oneEmInPx) * 1em);

  position: relative;

  @media screen {
    margin: 0 auto;
    aspect-ratio: 210 / 297;
    width: var(--pageWidth);
  }
}
</style>
