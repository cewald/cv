<template>
  <div class="browser-actions h-full" v-if="!isFullscreen">
    <div class="sticky top-0 px-4 pt-4">
      <ToolbarButton
        title="Zoom"
        href="#zoom"
        @click.prevent.stop="toggleFullScreen"
      >
        <IconZoom width="2rem" height="2rem" />
      </ToolbarButton>
      <ToolbarButton title="Download" href="cewald-cv.pdf" download>
        <IconDownload width="2rem" height="2rem" />
      </ToolbarButton>
      <ToolbarButton title="Print" href="#print" @click.prevent="print">
        <IconPrint width="2rem" height="2rem" />
      </ToolbarButton>
      <ToolbarButton
        title="Source"
        href="https://github.com/cewald/cv"
        target="_blank"
      >
        <IconSource width="2rem" height="2rem" />
      </ToolbarButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToolbarButton from '@/components/ToolbarBlockButton.vue'
import IconZoom from '~icons/ic/baseline-zoom-in'
import IconDownload from '~icons/ic/baseline-sim-card-download'
import IconPrint from '~icons/ic/baseline-local-printshop'
import IconSource from '~icons/ic/baseline-code-off'

defineProps<{
  isFullscreen: boolean
  toggleFullScreen: any
}>()

const print = () => {
  window.print()
}
</script>

<style lang="scss">
.browser-actions {
  @media print {
    @apply hidden;
  }
}
</style>
