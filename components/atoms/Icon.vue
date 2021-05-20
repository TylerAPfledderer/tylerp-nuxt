<template lang="pug">
  div(v-html='require(`../../assets/icons/${icon}.svg?raw`)' :class='large ? "w-16" : "w-6"' )
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
    large: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
