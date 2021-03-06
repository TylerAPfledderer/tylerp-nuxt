<template lang="pug">
  NuxtLink(v-if='buttonType === "nuxtLink"' :to='path' :class='this.baseClasses')
    span {{content}}
    img(v-if='hasIcon' src='../../assets/icons/angle-right.svg' alt="" aria-hidden class='btn-icon')
  button(v-else-if='buttonType === "form"' :class='this.baseClasses') {{content}}
  a(v-else :href='path' rel="noreferrer" :class='this.baseClasses' target="_blank")
    span {{content}}
    img(v-if='hasIcon' src='../../assets/icons/external-link.svg' alt="" aria-hidden class='btn-icon')
</template>
<script>
export default {
  props: {
    content: {
      required: true,
      type: String,
    },
    buttonType: {
      default: null, // Default value relates to a normal anchor tag rendered.
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
    hasIcon: {
      default: false,
      type: Boolean,
    },
  },
  setup({ appearance }) {
    const baseClasses = [
      'base',
      'focus:!border-[#444]',
      appearance,
      [null, 'base--dark'].includes(appearance) &&
        'transform hover-focus:underline hover-focus:!font-black active:scale-90 visited:text-[#ededed]',
    ];

    return {
      baseClasses,
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
   * 'overflow-hidden' - to prevent icon animations from going outside of the button
  */
  @apply bg-none rounded border-transparent border-solid border-4 text-gray-700 cursor-pointer flex justify-center font-bold text-base py-2 px-4 overflow-hidden max-w-[173px] min-w-[128px];

  /* Not allow stretch, and is enough length to cover all text used in this project */
  /* max-width: 150px; */

  /* To be added by conditional */
  &--dark {
    @apply text-white;
  }

  &:hover,
  &:focus {
    & > .btn-icon {
      @apply animate-swell;
    }
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

.btn-icon {
  @apply ml-2 w-[1em];
}
</style>
