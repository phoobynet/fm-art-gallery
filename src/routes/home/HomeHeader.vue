<script
  lang="ts"
  setup
>
</script>

<template>
  <header class="home-header">
    <img
      src=""
      alt=""
    >
    <h1>modern art gallery</h1>
  </header>
</template>

<style
  lang="scss"
  scoped
>
  .home-header {
    @apply grid;

    img {
      content: url('@/assets/mobile/image-hero.jpg')
    }

    h1 {
      @apply text-[60px] uppercase font-heading font-black leading-[55px];
    }
  }
</style>

