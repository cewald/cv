<template>
  <div class="flex justify-between">
    <div class="pl-4">{{ startDate.getFullYear() }}</div>
    <div>{{ endDate.getFullYear() }}</div>
  </div>
  <div
    v-for="{ section, skills } in skillsetStruct"
    :key="section"
    class="flex flex-wrap"
  >
    <div class="flex w-4 flex-fix">
      <div class="-rotate-90">{{ section }}</div>
    </div>
    <div class="grow">
      <div
        v-for="{ title, percentTimeslots } in skills"
        :key="title"
        class="mb-2 flex"
      >
        <div class="flex w-full">
          <div
            :style="{ width: percentTimeslots[0].start + '%' }"
            class="font-mono"
          >
            {{ title }}
          </div>
          <div
            v-for="({ start, stop }, i) in percentTimeslots"
            :key="`bar-${title}-${i}`"
            class="h-full rounded bg-gray-lighter opacity-30"
            :style="{ width: 100 - start - ((stop || 0) - start) + '%' }"
          />
        </div>
      </div>
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
  percentTimeslots: { start: number; stop?: number }[]
}

type SkillSetSection = {
  section: string
  skills: SkillSetSkill[]
}

export default {
  setup() {
    const skillset = ref(Skillset)
    const endDate = ref(new Date())

    return {
      skillset,
      endDate
    }
  },
  computed: {
    skillsetStruct() {
      return ([...this.skillset] as SkillSetSection[]).map((section) => {
        section.skills.map((skill) => {
          skill.timestampedTimeslots = skill.timeslots.map((s) => {
            const [start, stop] = s.split('-').map((v) => new Date(v))
            return { start, stop }
          })

          skill.percentTimeslots = skill.timestampedTimeslots.map((i) => ({
            start: this.timeStampToPercent(i.start),
            stop: i.stop ? this.timeStampToPercent(i.stop) : undefined
          }))

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
    }
  },
  methods: {
    timeStampToPercent(timestamp: Date): number {
      const start = this.startDate.getTime()
      const end = this.endDate.getTime()
      const scale = end - start
      const point = timestamp.getTime() - start
      return Math.round((point * 100) / scale)
    }
  }
}
</script>
