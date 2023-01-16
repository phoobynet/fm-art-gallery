<script
  lang="ts"
  setup
>
import HomeHeaderHeroImg from '@/routes/home/HomeHeaderHeroImg.vue'
import LinkButton from '@/components/LinkButton.vue'

const onClick = () => {
  console.log('Hello, World!')
}
</script>

<template>
  <header class="home-header">
    <div class="hero-image">
      <HomeHeaderHeroImg />
    </div>
    <div class="hero-content">
      <div class="heading">
        <h1>modern art gallery</h1>
      </div>
      <div class="introduction">
        <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these
          pieces
          inspire you? Visit us and find out.</p>
      </div>
      <LinkButton
        @click="onClick"
        direction="right"
      >our location
      </LinkButton>
    </div>
  </header>
</template>

<style
  lang="scss"
  scoped
>
  .home-header {
    @apply grid;
  }
</style>

