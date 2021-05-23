<template lang="pug">
  img(:src='imgPath' :alt='altText || ""')
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
