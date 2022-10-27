<template>
  <div
    class="din-container flex flex-col justify-items-stretch print:my-0 print:shadow-none"
    :class="[
      isFullscreen ? 'cursor-zoom-out' : 'my-4 cursor-zoom-in shadow-cnt'
    ]"
    ref="dinPage"
    @click="toggleFullScreen"
  >
    <HeaderBlock />
    <div class="flex grow px-12 py-8">
      <div class="w-40 border-r border-gray-300 pt-4 pr-12">
        <SectionWrapper title="Details">
          Address<br />
          <p>
            Fregestr. 26<br />
            04105 Leipzig<br />
            Germany
          </p>
          <p>
            Phone<br />
            +49 (0) 163 877 822 8<br />
            Email<br />
            hello@christianewald.de
          </p>
        </SectionWrapper>
      </div>
      <div class="w-2/3 grow pt-4 pl-12">
        <SectionWrapper title="Profile">
          Experienced enthusiast in all stages of advanced full-stack
          development and engineering with strong knowledge in coding-paradigms,
          continuous-integration, testing and debugging processes. Bringing
          forth experience and expertise in designing, installation, testing and
          maintaining complex code-infrastructure, equipped with a diverse and
          promising skill-set.
        </SectionWrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderBlock from '@/components/HeaderBlock.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'

import { ref } from 'vue'
import emScaling from '@/composables/scaleEm'

const dinPage = ref<HTMLInputElement | null>(null)
const doc = ref<HTMLElement>(document.documentElement)

const { isFullscreen, toggleFullScreen } = emScaling(dinPage, doc)
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
