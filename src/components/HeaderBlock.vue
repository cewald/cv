<script setup lang="ts">
import Logo from '@/assets/logo.svg?url'
</script>

<template>
  <header class="header flex font-mono text-gray-dark">
    <div class="header__logo flex items-start justify-end">
      <img :src="Logo" alt="Logo" class="fill-gray-default" />
    </div>
    <div class="header__title antialiased">
      <h1 class="font-bold">Christian Ewald</h1>
      <p>
        senior full-stack javascript developer<br />
        and software-engineer
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  font-size: 1rem;
  padding-top: 3.5rem;

  .header__logo {
    width: 13rem + 1rem;
    padding-right: 1rem;

    img {
      width: 6.5rem;
    }
  }

  .header__title {
    margin-top: 2rem;
    line-height: 1.2rem;

    h1 {
      font-size: 1.65rem;
      margin-bottom: 0.45rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
}
</style>
