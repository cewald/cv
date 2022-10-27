<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'

defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <div>
    <SectionTitle :title="title" :sub-title="subTitle" />
    <slot />
  </div>
</template>
