<template lang="pug">
  ul(class='flex flex-wrap justify-center gap-y-8 md:gap-y-12 lg:gap-x-4 xl:gap-y-6 xl:gap-x-8')
    li(
      v-for='(skill, index) in skills'
      :key='index'
      class='m-[6px]'
    )
      M-SkillCard(:skill='skill')
</template>
<script>
export default {
  setup() {
    const skills = [
      {
        logos: ['universal-access'],
        heading: 'Web Accessibility',
        description:
          'Attention to detail with the use of the NVDA screen reader to test interactions with web pages and components. This is essential for universal usuability and design.',
      },
      {
        logos: ['react'],
        heading: 'Quick Building With React',
        description:
          'With my fundamental knowledge of React and the Gatsby framework, they can provide high usability to your complex project.',
      },
      {
        logos: ['vuejs', 'nuxt'],
        heading: 'Or Maybe You Prefer Vue?',
        description:
          'Vue can provide you a lighter load for a smaller application.<br/> <strong>(This very site is built in NuxtJS!)</strong>',
      },
      {
        logos: ['sass'],
        heading: 'Preprocessing with SASS',
        description:
          'This matters in making stylesheet creation programmatic . . . Which means fast building and scaling of the design!',
      },
      {
        logos: ['tailwindcss', 'bootstrap'],
        heading: 'CSS Frameworks',
        description:
          'Knowledge with Bootstrap and TailwindCSS to provide quick UI layouts and Utility styling. <br /> <strong>(This site implements TailwindCSS)</strong>',
      },
      {
        logos: ['html', 'css', 'js'],
        heading: "Don't Forget the Basics!",
        description: 'Proficient in HTML, CSS, and JavaScript. Simple.',
      },
      {
        logos: ['laptop-code'],
        heading: 'Code Review',
        description:
          "It's just as important to keep attention to detail on a team to ensure everyone succeeds!",
      },
    ];

    return { skills };
  },
};
</script>
<style lang="postcss" scoped></style>
