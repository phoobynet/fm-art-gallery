<script
  lang="ts"
  setup
>
import { onMounted } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps<{ direction: 'left' | 'right' }>()
onMounted(() => {
  console.log(props.direction)
})
</script>

<template>
  <div
    class="link-button group"
    :class="direction"
    role="button"
    @click="emit('click')"
  >
    <div class="content bg-almost-black group-hover:bg-gold duration-500 transition-colors select-none">
      <slot></slot>
    </div>
    <div class="arrow bg-gold group-hover:bg-almost-black duration-500 transition-colors">
      <img
        src="@/assets/icon-arrow-right.svg"
        alt=""
        v-if="direction === 'right'"
      />
      <img
        src="@/assets/icon-arrow-left.svg"
        alt=""
        v-if="direction === 'left'"
      />
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .link-button {
    @apply grid items-center justify-between h-[72px];
    @apply grid-rows-1;

    &.right {
      @apply grid-cols-[1fr_auto];

      .content {
        grid-column: 1;
      }

      .arrow {
        grid-column: 2;
      }
    }

    &.left {
      @apply grid-cols-[auto_1fr];

      .content {
        grid-row: 1;
        grid-column: 2;
      }

      .arrow {
        grid-row: 1;
        grid-column: 1;
      }
    }

    .content {
      @apply flex items-center justify-center;
      @apply uppercase font-heading font-extrabold text-white text-[20px] tracking-[3.64px] h-full;
    }

    .arrow {
      @apply flex w-[56px] self-stretch items-center justify-center;

      img {
        @apply w-[11px] h-[28px];
      }
    }
  }
</style>

