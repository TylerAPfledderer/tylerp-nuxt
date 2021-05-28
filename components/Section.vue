<template lang="pug">
  section(class='px-6 py-8')
    A-Heading(tag='h2' :content='sectionTitle' class='mb-6')
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
