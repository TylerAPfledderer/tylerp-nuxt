<template lang="pug">
  //- Flex gap trick from https://coryrylan.com/blog/css-gap-space-with-flexbox
  ul(class='flex flex-wrap justify-center gap-y-6 lg:gap-x-6')
    li(v-for='(project, index) in projects' :key='index' class='max-w-[336px] min-w-[272px] w-full')
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
