<template lang="pug">
  Fragment
    M-Hero()
    MainWrap
      Section#about(sectionTitle='Who Am I?' class='relative xl:pt-20 xl:pb-28 section-dark about-slanted-edge')
        div(class='flex justify-center')
          i(v-html='require("~/assets/icons/source-code.svg?raw")' class='hidden w-48 mr-6 xl:block')
          A-BodyText(
            content='I am a front-end web developer, building unique and elegant websites with a focus in accessibility. I seek out problems in accessibility and efficient structure to provide sites that are fast, reliable and usable, while letting the personality of the business shine. I am curious about design and learning UX/UI fundamentals to help build better code.'
            class='max-w-lg'
          )
      Section#skill(sectionTitle='Know My Tools' class='skill-slanted-edge')
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
  .about-slanted-edge {
    @apply relative;

    &::before {
      --tw-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.2) !important;
      @apply empty-content h-full bg-inherit w-screen absolute left-0 top-[-1vw] transform skew-y-1 block z-[-1] shadow;
    }
  }

  .skill-slanted-edge {
    @apply relative bg-white z-10;
    &::before {
      --tw-shadow: 0 -30px 20px -18px rgba(0, 0, 0, 0.2) !important;
      @apply empty-content h-full bg-inherit w-screen absolute left-0 top-[-1vw] z-[-10] transform skew-y-1 shadow;
    }
  }
}
</style>
