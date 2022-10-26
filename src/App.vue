<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
</script>

<template>
  <div class="din-container my-4 p-4 shadow-cnt">
    <HeaderBlock />
    <HelloWorld msg="Hallo Welt" class="p-8">
      <p>
        Experienced enthusiast in all stages of advanced full-stack development
        and engineering with strong knowledge in coding-paradigms,
        continuous-integration, testing and debugging processes. Bringing forth
        experience and expertise in designing, installation, testing and
        maintaining complex code-infrastructure, equipped with a diverse and
        promising skill-set.
      </p>
    </HelloWorld>
  </div>
</template>

<style lang="scss">
.din-container {
  margin: 0 auto;
  aspect-ratio: 210 / 297;
  width: 1280px;
  position: relative;
}
</style>
