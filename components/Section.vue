<template lang="pug">
  section(class='px-4 py-8 sm:py-12')
    div(class='page-max-w')
      A-Heading(tag='h2' :content='sectionTitle' class='mb-6 md:mb-12')
      slot
</template>
<script>
export default {
  props: {
    sectionTitle: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="postcss" scoped></style>
