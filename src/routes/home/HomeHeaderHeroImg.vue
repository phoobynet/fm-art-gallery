<template>
  <picture>
    <source
      srcset="@/assets/desktop/image-hero.jpg, @/assets/desktop/image-hero@2x.jpg 2x"
      media="(min-width:1440px)"
      alt=""
    >

    <source
      srcset="@/assets/tablet/image-hero.jpg, @/assets/tablet/image-hero@2x.jpg 2x"
      media="(min-width:768px)"
      alt=""
    >

    <source
      srcset="@/assets/mobile/image-hero.jpg, @/assets/mobile/image-hero@2x.jpg 2x"
      media="(min-width:375px)"
      alt=""
    >
    <img
      src="@/assets/mobile/image-hero.jpg"
      alt=""
    >
  </picture>
</template>
