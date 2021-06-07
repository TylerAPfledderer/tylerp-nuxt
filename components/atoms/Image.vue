<template lang="pug">
  nuxt-img(:src='imgPath' :alt='altText || ""' format='webp')
</template>
<script>
export default {
  props: {
    imgPath: {
      required: true,
      type: String,
    },
    altText: {
      default: null,
      type: String,
    },
  },
};
</script>
<style lang="postcss" scoped></style>
