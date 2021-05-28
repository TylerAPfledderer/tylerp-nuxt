<template lang="pug">
  Fragment
    M-Hero
    main
      Section#about(sectionTitle='Who Am I?')
        A-BodyText(
          content='I am a front-end web developer, building unique and elegant websites with a focus in accessibility. I seek out problems in accessibility and efficient structure to provide sites that are fast, reliable and usable, while letting the personality of the business shine. I am curious about design and learning UX/UI fundamentals to help build better code.'
        )
      Section#skill(sectionTitle='Know My Tools')
        O-SkillList
</template>

<script>
export default {};
</script>
<style lang="postcss">
section:nth-of-type(odd) {
  @apply bg-dark text-white;
}
</style>
