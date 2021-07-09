<template lang="pug">
  nuxt-img(:src='imgPath' :alt='altText || ""' format='webp' sizes="sm:272px md:442px xl:557px")
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
