<template lang="pug">
  div(class='mt-[60px] min-h-[calc(100vh-60px)] md:mt-[80px] md:min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden')
    O-Navbar
    Nuxt
    footer(class='px-4 py-2 text-white bg-gray-700')
      div(class='flex page-max-w flex-center md:justify-between')
        span(class='tracking-wider') {{`Copyright ${currYear} Tyler Pfledderer`}}
        M-SocialLinks(class='hidden md:flex' ariaId='social-links-footer')
</template>
<script>
export default {
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>
<style lang="postcss">
.page-max-w {
  @apply max-w-7xl m-auto;
}
</style>
