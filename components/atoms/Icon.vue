<template lang="pug">
  a(v-if='isLink' v-html='require(`~/assets/icons/${icon}.svg?raw`)' class='p-1 w-11 svgLink')
  div(v-else-if='isLarge' v-html='require(`assets/icons/${icon}.svg?raw`)' class='w-16' )
</template>
<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
      validator(value) {
        return [
          'bootstrap',
          'css',
          'html',
          'js',
          'laptop-code',
          'react',
          'sass',
          'tailwindcss',
          'universal-access',
          'vuejs',
          'codepen',
          'twitter',
          'linkedin',
        ].includes(value);
      },
    },
    isLarge: {
      default: false,
      type: Boolean,
    },
    isLink: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="postcss">
.svgLink {
  &:hover svg {
    @apply animate-waggleScale;
  }

  &:hover path {
    @apply fill-[#ff0000];
  }
}
</style>
