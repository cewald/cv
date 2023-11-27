<template>
  <div
    ref="dinPage"
    class="din-container flex flex-col justify-items-stretch print:my-0 print:border-0"
    :class="[isFullscreen ? 'cursor-zoom-out' : 'my-4 border border-gray-lightest-2']"
    @click="isFullscreen && toggleFullscreen()"
  >
    <HeaderBlock />
    <div class="flex grow px-12 py-8">
      <div class="order-2 grow pl-12 pt-4">
        <SectionWrapper title="Profile">
          A devoted professional with a fervor for advanced full-stack development and engineering,
          showcasing comprehensive expertise throughout the entire software development lifecycle.
          My proficiency encompasses coding paradigms, continuous integration, rigorous testing, and
          adept debugging processes. I have a proven record of effectively designing, implementing,
          testing, and maintaining intricate code infrastructure.
        </SectionWrapper>
        <SectionWrapper
          title="Skillset "
          sub-title="_chronolocical"
        >
          <SkillGantt />
        </SectionWrapper>
      </div>
      <div class="order-1 flex w-42 flex-col pr-10 pt-4">
        <SectionWrapper title="Details">
          <h3>Based in</h3>
          <p>
            04105 Leipzig<br>
            Germany
          </p>
          <h3>Age</h3>
          <p>{{ age }} years</p>
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
              href="mailto:hello@cewald.de"
              title="Email"
              target="_blank"
              class="hover:underline"
            >
              hello@cewald.de
            </a>
          </p>
        </SectionWrapper>
        <SectionWrapper title="Links">
          <a
            href="https://www.cewald.de"
            target="_blank"
            class="mb-1.5 flex items-center hover:underline"
          >
            <IconLanguage
              class="mr-1.5 flex-fix"
              width="1rem"
              height="1rem"
            />
            www.cewald.de
          </a>
          <a
            href="https://github.com/cewald"
            target="_blank"
            class="mb-1.5 flex items-center hover:underline"
          >
            <IconGitHub
              class="mr-1.5 flex-fix"
              width="1rem"
              height="1rem"
            />
            github.com/cewald
          </a>
          <a
            href="https://linkedin.com/in/ewaldtm"
            target="_blank"
            class="flex items-center hover:underline"
          >
            <IconLinkedIn
              class="mr-1.5 flex-fix"
              width="1rem"
              height="1rem"
            />
            linkedin.com/in/ewaldtm
          </a>
        </SectionWrapper>
        <SectionWrapper title="Languages">
          <span class="lowercase">German</span>
          <span class="text-xxxs text-gray-light">_native speaker</span><br>
          <span class="lowercase">English</span>
          <span class="text-xxxs text-gray-light">_highly proficient</span>
        </SectionWrapper>
        <div class="grow" />
        <img
          :src="QRCode"
          class="mb-4 h-20 w-20"
        >
      </div>
    </div>
    <Toolbar
      class="absolute right-0 top-0 translate-x-full"
      :is-fullscreen="isFullscreen"
      :toggle-full-screen="toggleFullscreen"
    />
  </div>
</template>

<script setup lang="ts">
import HeaderBlock from '@/components/HeaderBlock.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'
import SkillGantt from '@/components/SkillGantt.vue'
import IconGitHub from '~icons/fa-brands/github'
import IconLinkedIn from '~icons/fa-brands/linkedin'
import IconLanguage from '~icons/fa6-regular/id-card'
import QRCode from '@/assets/qrcode.svg?url'
import Toolbar from '@/components/ToolbarBlock.vue'

import { ref } from 'vue'
import emScaling from '@/composables/scaleEm'
import dayjs from 'dayjs'

const dinPage = ref<HTMLInputElement | null>(null)
const doc = ref<HTMLElement>(document.documentElement)

const { isFullscreen, toggleFullscreen } = emScaling(dinPage, doc)

const now = dayjs()
const dob = dayjs.unix(550627200)
const age = now.diff(dob, 'years')

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
