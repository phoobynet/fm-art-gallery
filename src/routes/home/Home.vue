<script
  lang="ts"
  setup
>
import HomeHeader from '@/routes/home/HomeHeader.vue'
import HomeMain from '@/routes/home/HomeMain.vue'
import HomeFooter from '@/routes/home/HomeFooter.vue'
</script>

<template>
  <div class="home">
    <HomeHeader />
    <HomeMain />
    <HomeFooter />
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .home {
    @apply grid;
  }
</style>

