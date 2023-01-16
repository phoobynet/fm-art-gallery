<template>
  <img
    src="@/assets/mobile/image-hero.jpg"
    alt=""
    class="hero-mobile"
  >

  <img
    src="@/assets/tablet/image-hero.jpg"
    alt=""
    class="hero-tablet"
  >

  <img
    src="@/assets/desktop/image-hero.jpg"
    alt=""
    class="hero-desktop"
  >
</template>
<style lang="scss">
  .hero-mobile {
    @apply mobile:block tablet:hidden desktop:hidden;
  }

  .hero-tablet {
    @apply mobile:hidden tablet:block desktop:hidden;
  }

  .hero-desktop {
    @apply mobile:hidden tablet:hidden desktop:block;
  }
</style>
