<template lang="pug">
  div(class='mt-[60px] flex flex-col justify-between min-height-adjustment')
    O-Navbar
    Nuxt
    footer(class='py-2 text-white bg-gray-700')
      span(class='tracking-wider') {{`Copyright ${currYear} Tyler Pfledderer`}}
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
.min-height-adjustment {
  min-height: calc(100vh - 60px);
}

main > section:nth-of-type(odd):not(div) {
  @apply bg-dark text-white;
}
</style>
