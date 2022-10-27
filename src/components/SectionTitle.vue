<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <h1 class="mb-4 border-gray-600 text-xl">
    {{ title }}
    <span v-if="subTitle">{{ subTitle }}</span>
  </h1>
</template>
