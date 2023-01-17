<script
  lang="ts"
  setup
>
import HomeHeaderHeroImg from '@/routes/home/HomeHeaderHeroImg.vue'
import LinkButton from '@/components/LinkButton.vue'
import Heading from '@/components/Heading.vue'

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
        <Heading size="xl">
          modern art gallery
        </Heading>
      </div>
      <div class="introduction">
        <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these
          pieces
          inspire you? Visit us and find out.</p>
      </div>
      <div class="link-button">
        <LinkButton
          @click="onClick"
          direction="right"
        >our location
        </LinkButton>
      </div>
    </div>
  </header>
</template>

<style
  lang="scss"
  scoped
>
  .home-header {
    .hero-content {
      @apply grid mt-9 px-[1.1rem];
      grid-template-rows: 9rem 8.5rem auto;

      .link-button {
        width: 90%;
      }
    }
  }
</style>

