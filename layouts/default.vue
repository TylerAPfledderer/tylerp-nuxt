<template lang="pug">
  div(class='mt-[60px] min-h-[calc(100vh-60px)] md:mt-[80px] md:min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden')
    div
      a(href="#content" class="p-[6px] absolute -top-10 bg-red-600 text-white z-[1000] block transition-top hover-focus:top-0") Skip navigation
    O-Navbar
    <div id="#content">
      Nuxt
    </div>
    footer(class='px-4 py-2 text-white bg-gray-700')
      div(class='flex page-max-w flex-center md:justify-between')
        span(class='tracking-wider') {{`Copyright ${currYear} Tyler Pfledderer`}}
        M-SocialLinks(class='hidden md:flex' ariaId='social-links-footer')
</template>
<script>
export default {
  setup() {
    const currYear = new Date().getFullYear();

    return { currYear };
  },
};
</script>
<style lang="postcss">
.page-max-w {
  @apply max-w-[87rem] m-auto;
}
</style>
