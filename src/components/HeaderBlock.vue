<script setup lang="ts">
import Logo from '@/assets/logo.svg?url'
</script>

<template>
  <header class="header flex pt-24 font-mono text-gray-default">
    <div class="header__logo flex items-start justify-end">
      <img :src="Logo" class="fill-gray-default" />
    </div>
    <div class="header__title antialiased">
      <h1 class="font-bold">Christian Ewald</h1>
      <p class="">
        senior full-stack javascript developer<br />
        and software-engineer
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  .header__logo {
    width: 24rem + 1.5rem;
    padding-right: 1.5rem;

    img {
      width: 9rem;
    }
  }

  .header__title {
    margin-top: 2.9rem;
    line-height: 1.55rem;

    h1 {
      font-size: 2.225rem;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 1.11rem;
    }
  }
}
</style>
