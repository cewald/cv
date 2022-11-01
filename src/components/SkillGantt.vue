<template>
  {{ startDate.getFullYear() }} -
  {{ endDate.getFullYear() }}
</template>
<script lang="ts">
import Skillset from '@/data/skillset.json'
export default {
  computed: {
    skillset() {
      return Skillset
    },
    startDate() {
      const startSlots: number[] = []
      Skillset.forEach((section) => {
        for (const skill of section.skills) {
          startSlots.push(
            ...skill.timeslots.map(
              (slot) => slot.split('-').map((v) => parseInt(v))[0]
            )
          )
        }
      })

      const yearAsString = startSlots
        .reduce((a, b) => (a > b ? b : a))
        .toString()

      return new Date(yearAsString)
    },
    endDate() {
      return new Date()
    }
  }
}
</script>
