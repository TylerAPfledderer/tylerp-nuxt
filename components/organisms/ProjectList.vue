<template lang="pug">
  //- Flex gap trick from https://coryrylan.com/blog/css-gap-space-with-flexbox
  ul(class='inline-flex flex-wrap justify-center')
    li(v-for='(project, index) in projects' :key='index')
      M-ProjectCard(:project='project')
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="postcss" scoped>
.flex-gap {
  margin: calc(-1 * 32px) 0 0 calc(-1 * 32px);
  width: calc(100% + 32px);
}
.flex-gap > * {
  margin: 32px 0 0 32px;
}
</style>
