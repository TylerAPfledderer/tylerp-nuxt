<template lang="pug">
  ul
    li(
      v-for='(skill, index) in skills'
      :key='index'
      :class='index !== 0 && "mt-20"'
    )
      M-SkillCard(:skill='skill')
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          logos: ['universal-access'],
          heading: 'Web Accessibility',
          description:
            'Attention to detail with the use of the NVDA screen reader to test interactions with web pages and components. This is essential for universal usuability and design.',
        },
        {
          logos: ['react', 'gatsby'],
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
          logos: ['sass', 'styled-components'],
          heading: 'SASS Style Preprocessing',
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
      ],
    };
  },
};
</script>
<style lang="postcss" scoped></style>
