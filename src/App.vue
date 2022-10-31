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
      <div class="flex w-42 flex-col border-r border-gray-300 pt-4 pr-12">
        <SectionWrapper title="Details">
          <h3>Address</h3>
          <p>
            Fregestr. 26<br />
            04105 Leipzig<br />
            Germany
          </p>
          <h3>Phone</h3>
          <p>
            <a
              href="tel:+491638778228"
              title="Telephone"
              class="hover:underline"
            >
              +49 (0) 163 877 822 8
            </a>
          </p>
          <h3>Email</h3>
          <p>
            <a
              href="mailto:hello@christianewald.de"
              title="Email"
              target="_blank"
              class="hover:underline"
            >
              hello@christianewald.de
            </a>
          </p>
          <h3>DOB</h3>
          <p>14.06.1987</p>
        </SectionWrapper>
        <SectionWrapper title="Links">
          <a
            href="https://www.christianewald.de"
            target="_blank"
            class="mb-1.5 flex items-center hover:underline"
          >
            <IconLanguage class="mr-1.5 flex-fix" width="1rem" height="1rem" />
            www.christianewald.de
          </a>
          <a
            href="https://github.com/cewald"
            target="_blank"
            class="mb-1.5 flex items-center hover:underline"
          >
            <IconGitHub class="mr-1.5 flex-fix" width="1rem" height="1rem" />
            github.com/cewald
          </a>
          <a
            href="https://linkedin.com/in/ewaldtm"
            target="_blank"
            class="flex items-center hover:underline"
          >
            <IconLinkedIn class="mr-1.5 flex-fix" width="1rem" height="1rem" />
            linkedin.com/in/ewaldtm
          </a>
        </SectionWrapper>
        <SectionWrapper title="Languages">
          German
          <span class="text-xxs text-gray-light">_native speaker</span><br />
          English
          <span class="text-xxs text-gray-light">_highly proficient</span>
        </SectionWrapper>
        <div class="grow"></div>
        <img :src="QRCode" class="mb-4 h-20 w-20" />
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
import IconGitHub from '~icons/fa-brands/github'
import IconLinkedIn from '~icons/fa-brands/linkedin'
import IconLanguage from '~icons/fa6-regular/id-card'
import QRCode from '@/assets/qrcode.svg?url'

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

:root {
  @media print {
    font-size: 16px !important;
  }
}

.din-container {
  --pageWidthCm: 21;
  --oneCmInPx: 96 / 2.54;
  --oneEmInPx: 16;
  --pageWidthPx: calc(var(--oneCmInPx) * var(--pageWidthCm));
  --pageWidth: calc(var(--pageWidthPx) / var(--oneEmInPx) * 1em);

  position: relative;
  aspect-ratio: 210 / 297;

  @media screen {
    margin: 0 auto;
    width: var(--pageWidth);
  }
}
</style>
