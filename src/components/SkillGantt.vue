<template>
  <div class="flex justify-between">
    <div v-for="year in yearScale" :key="`year-scale-${year}`" v-text="year" />
  </div>
  <div v-for="{ section, skills } in skillsetStruct" :key="section">
    <div
      v-for="{ title, percentTimeslots } in skills"
      :key="title"
      class="mb-1 flex"
    >
      <div class="flex w-full font-mono">
        <template
          v-for="({ width, start }, i) in percentTimeslots"
          :key="`bar-${title}-${i}`"
        >
          <div
            :style="{ width: 100 - start - width + '%' }"
            class="text-right text-gray-lighter"
          />
          <div
            class="h-full flex-fix whitespace-nowrap rounded bg-gray-lightest pl-2 text-gray-lighter"
            :style="{ width: width + '%' }"
          >
            {{ start >= 30 || width >= 30 ? title : '' }}
          </div>
        </template>
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
  percentTimeslots: { start: number; stop?: number; width: number }[]
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

          skill.percentTimeslots = skill.timestampedTimeslots
            .map((i) => ({
              start: this.timeStampToPercent(i.start),
              stop: i.stop ? this.timeStampToPercent(i.stop) : undefined
            }))
            .map(({ start, stop }) => {
              const width: number =
                stop && stop > 0 ? stop - start : 100 - start
              return { start, stop, width }
            })

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
    yearScale() {
      return this.getRange(
        this.endDate.getFullYear(),
        this.startDate.getFullYear(),
        4
      )
        .map((y) => Math.round(y))
        .reverse()
    }
  },
  methods: {
    timeStampToPercent(timestamp: Date): number {
      const start = this.startDate.getTime()
      const end = this.endDate.getTime()
      const scale = end - start
      const point = timestamp.getTime() - start
      return Math.round((point * 100) / scale)
    },
    getRange(upper: number, lower: number, steps: number) {
      const difference = upper - lower
      const increment = difference / (steps - 1)
      return [
        lower,
        ...Array(steps - 2)
          .fill('')
          .map((_, index) => lower + increment * (index + 1)),
        upper
      ]
    }
  }
}
</script>
