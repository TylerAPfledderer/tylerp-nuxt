<template lang="pug">
  Fragment
    M-Hero
    MainWrap
      Section#about(sectionTitle='Who Am I?' class='relative slanted-edge')
        div
          A-BodyText(
            content='I am a front-end web developer, building unique and elegant websites with a focus in accessibility. I seek out problems in accessibility and efficient structure to provide sites that are fast, reliable and usable, while letting the personality of the business shine. I am curious about design and learning UX/UI fundamentals to help build better code.'
            class='max-w-lg m-auto'
          )
          i
            //- Add undraw image https://undraw.co/illustrations
      Section#skill(sectionTitle='Know My Tools')
        O-SkillList
        A-Button(class='m-auto mt-6' buttonType='nuxtLink' path='/projects' appearance='cta' content='See My Works' hasIcon)
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
@screen md {
  .slanted-edge {
    @apply pt-4 mt-12;
  }
  .slanted-edge:before {
    @apply empty-content h-52 w-screen bg-dark absolute left-0 top-[-2vw] transform -skew-y-2 block z-[-100];
  }
}
</style>
