<script
  lang="ts"
  setup
>
import HomeMainImageGrid1 from '@/routes/home/HomeMainImageGrid1.vue'
import HomeMainImageGrid2 from '@/routes/home/HomeMainImageGrid2.vue'
import HomeMainImageGrid3 from '@/routes/home/HomeMainImageGrid3.vue'
import Heading from '@/components/Heading.vue'
import HomeMainComeCta from '@/routes/home/HomeMainComeCta.vue'
</script>

<template>
  <main>
    <HomeMainImageGrid1 />
    <Heading size="l">your day at the gallery</Heading>
    <p>
      Wander through our distinct collections and find new insights about our artists. Dive into the details of their
      creative process.
    </p>
    <HomeMainImageGrid2 />
    <HomeMainImageGrid3 />
    <HomeMainComeCta />
  </main>
</template>

