<template lang="pug">
  a(v-if='isLink' :href='path' v-html='require(`~/assets/icons/${icon}.svg?raw`)' class='block p-2 w-11 svgLink' target='_blank')
  div(v-else v-html='require(`assets/icons/${icon}.svg?raw`)' :class='isLarge ? "w-20" : "w-6"' )
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
          'nuxt',
          'gatsby',
          'styled-components',
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
    path: {
      default: '/#',
      type: String,
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
