<template lang="pug">
  header(class='flex px-6 py-12 flex-center md:py-24')
    div(class='grid justify-items-center xl:grid-cols-2 xl:gap-y-4 xl:gap-x-6 2xl:gap-x-12')
      div(class='self-end')
        A-Heading(tag='h1' content='Hey, I\'m Tyler!' class='mb-5')
        A-BodyText(content='A Front-End Web Developer' class='opacity-70 width ms-1')
      i(v-html='require("~/assets/icons/version-control.svg?raw")' class='w-48 mb-10 mt-7 lg:w-72 xl:row-span-2 xl:my-0 xl:w-96 2xl:w-[32rem]')
      A-Button(buttonType='nuxtLink' path='/projects' appearance='cta' hasIcon content='See My Works' class='self-start')
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped></style>
