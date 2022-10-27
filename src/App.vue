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
      <div class="w-42 border-r border-gray-300 pt-4 pr-12">
        <SectionWrapper title="Details">
          <h3>Address</h3>
          <p>
            Fregestr. 26<br />
            04105 Leipzig<br />
            Germany
          </p>
          <h3>Phone</h3>
          <p>
            <a href="tel:+491638778228"> +49 (0) 163 877 822 8 </a>
          </p>
          <h3>Email</h3>
          <p>
            <a
              href="mailto:hello@christianewald.de"
              title="Email"
              target="_blank"
            >
              hello@christianewald.de
            </a>
          </p>
          <h3>DOB</h3>
          <p>14.06.1987</p>
        </SectionWrapper>
        <SectionWrapper title="Links">
          <a href="https://www.christianewald.de" target="_blank">
            www.christianewald.de
          </a>
          <br />
          <a href="https://github.com/cewald" target="_blank">
            github.com/cewald
          </a>
          <br />
          <a href="https://linkedin.com/in/ewaldtm" target="_blank">
            linkedin.com/in/ewaldtm
          </a>
        </SectionWrapper>
        <SectionWrapper title="Languages">
          German
          <span class="text-xxs text-gray-light">_native speaker</span><br />
          English
          <span class="text-xxs text-gray-light">_highly proficient</span>
        </SectionWrapper>
        <SectionWrapper title="Persona">
          _my dog _books _art _running _3d printing _coffee _woodworking
        </SectionWrapper>
      </div>
      <div class="pt-4 pl-12">
        <SectionWrapper title="Profile">
          Experienced enthusiast in all stages of advanced full-stack
          development and engineering with strong knowledge in coding-paradigms,
          continuous-integration, testing and debugging processes. Bringing
          forth experience and expertise in designing, installation, testing and
          maintaining complex code-infrastructure, equipped with a diverse and
          promising skill-set.
        </SectionWrapper>
        <SectionWrapper title="Skillset " sub-title="_chronolocical">
          ... lorem ipsum
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
