<template>
  <div class="flex justify-between">
    <div>{{ endDate.getFullYear() }}</div>
    <div>{{ yearScale }}</div>
    <div>{{ startDate.getFullYear() }}</div>
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
      const scale = this.endDate.getFullYear() - this.startDate.getFullYear()
      const test = Array(scale / 4)

      const years = [this.endDate.getFullYear()]
      // for (const i = this.endDate.getFullYear(); i) {
      //   years.push(this.endDate.getFullYear() - i * test)
      // }

      console.error(test)

      return years
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
