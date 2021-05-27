<template lang="pug">
  div(class='flex flex-col flex-center')
    A-Heading(tag='h1' content='Hey, I\'m Tyler!' class='mb-3')
    A-BodyText(content='A Front-End Web Developer' class='ms-1 sm:ms-2 opacity-70')
    A-Button(buttonType='nuxtLink' path='/projects' appearance='primary' hasIcon content='See My Works')
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped></style>
