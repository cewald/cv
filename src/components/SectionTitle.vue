<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <h2
    class="mb-4 font-mono text-lg font-bold text-gray-dark after:mt-1 after:block after:h-0.85 after:w-12 after:bg-gray-dark after:content-['']"
  >
    {{ title }}
    <span
      v-if="subTitle"
      class="text-sm font-medium text-gray-light"
    >{{
      subTitle
    }}</span>
  </h2>
</template>
