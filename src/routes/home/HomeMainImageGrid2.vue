<script
  lang="ts"
  setup
>
</script>

<template>
  <picture>
    <source
      media="(min-width: 1440px)"
      srcset="@/assets/desktop/image-grid-2.jpg,@/assets/desktop/image-grid-2@2x.jpg 2x"
    >

    <source
      media="(min-width: 768px)"
      srcset="@/assets/tablet/image-grid-2.jpg, @/assets/tablet/image-grid-2@2x.jpg 2x"
    >

    <source
      media="(min-width: 375px)"
      srcset="@/assets/mobile/image-grid-2.jpg, @/assets/mobile/image-grid-2@2x.jpg 2x"
    >

    <img
      src="@/assets/mobile/image-grid-2.jpg"
      alt=""
    >
  </picture>
</template>

<style
  lang="scss"
  scoped
>
</style>

