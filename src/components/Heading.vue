<script
  lang="ts"
  setup
>
import { computed } from 'vue'

type Size = 'xl' | 'l' | 'm' | 's'

interface Props {
  size: 'xl' | 'l' | 'm' | 's'
}

const props = defineProps<Props>()

const ariaLevel = computed(() => {
  switch (props.size) {
    case 'xl':
      return 1
    case 'l':
      return 2
    case 'm':
      return 3
    case 's':
      return 4
  }

  throw new Error('Heading size not recognised')
})
</script>

<template>
  <div
    role="heading"
    :aria-level="ariaLevel"
  >
    <slot>
    </slot>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  div[role='heading'] {
    &[aria-level='1'] {
      @apply text-[60px] uppercase font-heading font-black leading-[55px] text-almost-black;

      // tablet
      @apply tablet:text-[70px] tablet:leading-[65px];

      // desktop
      @apply desktop:text-[96px] desktop:leading-[88px];
    }

    &[aria-level='2'] {
      @apply text-[50px] uppercase font-heading font-black leading-[55px] text-almost-black;

      // tablet
      @apply tablet:leading-[45px];

      // desktop
      @apply desktop:text-[60px] desktop:leading-[60px];
    }
  }
</style>

