<template lang="pug">
  main(class='flex flex-col flex-grow')
    slot
</template>
<script>
export default {};
</script>
<style lang="postcss" scoped>
main > * {
  @apply flex-grow;
}
main > section:nth-of-type(odd):not(div) {
  @apply bg-dark text-white;
}
</style>
