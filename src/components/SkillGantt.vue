<template>
  <div v-for="section in skillset" :key="section.section" class="hidden">
    <h3>{{ section.section }}</h3>
    <div v-for="skill in section.skills" :key="skill.title">
      {{ skill.timeslots }} – {{ skill.title }}
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Skillset from '@/data/skillset.json'

type SkillSetSkill = {
  title: string
  timeslots: string[]
  timestampedTimeslots: { start: Date; stop?: Date }[]
  percentTimeslots: { start: Number; stop?: Number }[]
}

type SkillSetSection = {
  section: string
  skills: SkillSetSkill[]
}

export default {
  setup() {
    const skillset = ref(Skillset)
    return {
      skillset
    }
  },
  computed: {
    skillsetStruct() {
      return ([...Skillset] as SkillSetSection[]).map((section) => {
        section.skills.map((skill) => {
          skill.timestampedTimeslots = skill.timeslots.map((s) => {
            const [start, stop] = s.split('-').map((v) => new Date(v))
            return { start, stop }
          })

          const startTS = this.startDate.getTime()
          const endTS = this.endDate.getTime()

          return skill
        })
        return section
      })
    },
    startDate() {
      const slots: number[] = []
      Skillset.forEach((section) => {
        for (const skill of section.skills) {
          const startSlots = skill.timeslots.map(
            (s) => s.split('-').map((v) => parseInt(v))[0]
          )

          slots.push(...startSlots)
        }
      })

      const firstYear = slots.reduce((a, b) => (a > b ? b : a))
      return new Date(firstYear.toString())
    },
    endDate() {
      return new Date()
    }
  }
}
</script>
