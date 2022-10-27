<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <h1 class="mb-4 border-black font-mono text-lg font-bold">
    {{ title }}
    <span v-if="subTitle">{{ subTitle }}</span>
  </h1>
</template>
