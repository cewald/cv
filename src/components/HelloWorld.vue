<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1 class="text-xl mb-4 border-gray-600">{{ msg }}</h1>
    <slot />
  </div>
</template>
