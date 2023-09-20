<template>
  <a
    class="mb-3 flex items-center text-gray-lightest-1 hover:text-gray-base"
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
