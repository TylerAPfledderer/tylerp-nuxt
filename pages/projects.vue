<template lang="pug">
  MainWrap
    Section(sectionTitle='My Works')
      A-BodyText(
        content='Learning involves a cumulation of knowledge. See below my projects using fundamental code, or use of frameworks and libraries like ReactJS and Bootstrap.'
        class='mb-12'
      )
      O-ProjectList(:projects='projects')
      div(class='mt-6')
        span(class='inline-block mb-5 ms-2') Ready to Get to Work?
        A-Button(buttonType='nuxtLink' path='/contact' appearance='secondary--dark' content='Reach Out' class='m-auto')
</template>
<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .only(['title', 'description', 'previewImg', 'demoUrl', 'tags'])
      .fetch();

    return {
      projects,
    };
  },
  head() {
    return {
      title: 'My Works',
    };
  },
};
</script>
<style lang="postcss" scoped></style>
