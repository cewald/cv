<template>
  <a
    class="mb-3 flex items-center text-gray-lightest-1 hover:text-gray-base"
    :title="title"
  >
    <slot />
    <span
      class="sr-only"
      v-text="title"
    />
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
