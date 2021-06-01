<template lang="pug">
  main
    Section(sectionTitle='My Works')
      A-BodyText(
        content='Learning involves a cumulation of knowledge. See below my projects using fundamental code, or use of frameworks and libraries like ReactJS and Bootstrap.'
      )
      O-ProjectList
      div(class='mt-6')
        span(class='inline-block mb-5 ms-2') Ready to Get to Work?
        A-Button(buttonType='nuxtLink' path='/contact' appearance='secondary--dark' content='Reach Out' class='m-auto')
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped></style>
