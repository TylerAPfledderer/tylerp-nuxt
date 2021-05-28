<template lang="pug">
  header(class='flex flex-col px-6 py-12 flex-center')
    A-Heading(tag='h1' content='Hey, I\'m Tyler!' class='mb-5')
    A-BodyText(content='A Front-End Web Developer' class='ms-1 sm:ms-2 opacity-70 width')
    i(v-html='require("~/assets/icons/version-control.svg?raw")' class='w-40 text-gray-500 mt-7 mb-14')
    A-Button(buttonType='nuxtLink' path='/projects' appearance='primary' hasIcon content='See My Works')
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped></style>
