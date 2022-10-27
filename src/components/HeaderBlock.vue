<script setup lang="ts">
import Logo from '@/assets/logo.svg?url'
</script>

<template>
  <header class="header flex font-mono text-gray-default">
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
  font-size: 1em;
  padding-top: 3.5em;

  .header__logo {
    width: 13em + 1em;
    padding-right: 1em;

    img {
      width: 6.5em;
    }
  }

  .header__title {
    margin-top: 2em;
    line-height: 1.2em;

    h1 {
      font-size: 1.65em;
      margin-bottom: 0.45em;
    }

    p {
      font-size: 0.8em;
    }
  }
}
</style>
