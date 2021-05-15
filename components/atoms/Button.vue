<template lang="pug">
  nuxt-link(v-if='buttonType === "nuxtLink"' :to='path' :class='this.baseClasses' ) {{content}}
  button(v-else-if='buttonType === "form"' :class='this.baseClasses') {{content}}
  a(v-else :href='path' class='base' :class='this.baseClasses') {{content}}
</template>
<script>
export default {
  props: {
    content: {
      required: true,
      type: String,
    },
    buttonType: {
      default: null,
      type: String,
      validator(value) {
        return ['nuxtLink', 'form'].includes(value);
      },
    },
    path: {
      default: '',
      type: String,
    },
    appearance: {
      default: null,
      type: String,
      validator(value) {
        return [
          'primary',
          'secondary',
          'secondary--dark',
          'base--dark',
          'cta',
        ].includes(value);
      },
    },
  },
  data() {
    return {
      baseClasses: [
        'base',
        'focus:!border-[#444]',
        this.appearance,
        (this.appearance === null || this.appearance === 'base--dark') &&
          'transform hover-focus:underline hover-focus:!font-black active:scale-90 visited:text-[#ededed]',
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
/* To be added by conditional */
.base {
  /**
   * Note on the styles
   * 'text-base' - used to override default from the <button>
   * 'text-center' - ensure centered text when icons are included
   * 'overflow-hidden' - to prevent icon animations from going outside of the button
  */
  @apply bg-none
    rounded
    border-transparent
    border-solid
    border-4
    text-gray-700
    cursor-pointer
    inline-block
    font-bold
    text-base
    py-2
    px-4
    text-center
    overflow-hidden
    max-w-[150px];

  /* Not allow stretch, and is enough length to cover all text used in this project */
  /* max-width: 150px; */

  /* To be added by conditional */
  &--dark {
    @apply text-white;
  }
}

.primary,
.cta {
  @apply bg-btn transition-shadow-background duration-300;

  &:hover,
  &:focus {
    @apply bg-btn-light shadow-sm;
  }

  &:active {
    @apply bg-btn-dark transform-none transition-none;
  }
}

.secondary {
  @apply border-btn bg-none;

  &:hover,
  &:focus {
    @apply bg-btn transition-background duration-300;
  }

  &:active {
    @apply bg-btn-dark;
  }

  &--dark {
    @apply border-btn-alt text-white;
    &:hover,
    &:focus {
      @apply bg-btn-alt text-gray-700 transition-background duration-300;
    }

    &:active {
      @apply bg-btn-alt-dark;
    }
  }
}

.cta {
  @apply rounded-[15%/50%];
}
</style>
