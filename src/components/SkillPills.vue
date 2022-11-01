<template>
  <div class="flex flex-wrap items-center">
    <template v-for="(skills, title) in skillpills" :key="title">
      <div v-text="`${title}:/`" class="mr-1 text-gray-lighter" />
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="font-mono text-xs"
        :class="{ ' mr-2': skills.length - 1 === i }"
      >
        {{ skill }}<template v-if="skills.length - 1 !== i">, </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Skillset from '@/data/skillset.json'

const skillpills = reactive<Record<string, string[]>>({})
for (const item of Skillset) {
  skillpills[item.section] = item.skills.map((s) => s.title)
}
</script>
