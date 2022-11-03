<template>
  <a
    class="mb-2 flex items-center text-gray-lighter hover:text-gray-base"
    :title="title"
  >
    <slot />
    <span v-text="title" class="sr-only" />
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
