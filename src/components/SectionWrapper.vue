<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'

defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <section class="mb-7 text-xs leading-normal text-gray-base antialiased">
    <SectionTitle
      :title="title"
      :sub-title="subTitle"
    />
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  &:deep(h3) {
    @apply mb-1.5 font-medium uppercase text-gray-base;
  }

  &:deep(p):not(:last-child) {
    @apply mb-3;
  }
}
</style>
