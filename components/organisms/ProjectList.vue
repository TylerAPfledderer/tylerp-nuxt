<template lang="pug">
  // Flex gap trick from https://coryrylan.com/blog/css-gap-space-with-flexbox
  ul(class='inline-flex flex-wrap justify-center flex-gap')
    li(v-for='(project, index) in projects' :key='index')
      M-ProjectCard(:project='project')
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Project Name',
          icons: ['bootstrap', 'sass', 'html', 'js'],
          imageName: 'data-dash-preview',
          description: 'This is a project that was made. Duh!',
          demoUrl: 'https://www.example.com',
        },
        {
          title: 'Project Name',
          icons: ['bootstrap', 'sass', 'html', 'js'],
          imageName: 'data-dash-preview',
          description: 'This is a project that was made. Duh!',
          demoUrl: 'https://www.example.com',
        },
        {
          title: 'Project Name',
          icons: ['bootstrap', 'sass', 'html', 'js'],
          imageName: 'data-dash-preview',
          description: 'This is a project that was made. Duh!',
          demoUrl: 'https://www.example.com',
        },
        {
          title: 'Project Name',
          icons: ['bootstrap', 'sass', 'html', 'js'],
          imageName: 'data-dash-preview',
          description: 'This is a project that was made. Duh!',
          demoUrl: 'https://www.example.com',
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
.flex-gap {
  --gap: 32px;
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));

  & > * {
    margin: var(--gap) 0 0 var(--gap);
  }
}
</style>
