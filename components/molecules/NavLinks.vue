<template lang="pug">
  ul(class='flex flex-col items-center justify-center md:flex-row')
    li(v-for="(link, index) in links" :key='index' :class='index !== 0 && "mt-6 md:mt-0 md:ml-2"')
      A-Button(buttonType='nuxtLink' :path='link.url' :content='link.name' :appearance='link.appearance')
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          url: '/pages/about',
          name: 'About',
        },
        {
          url: '/#skills',
          name: 'Skills',
        },
        {
          url: '/pages/projects',
          name: 'Projects',
        },
        {
          url: '/pages/contact',
          name: 'Reach Out',
          appearance: 'secondary',
        },
      ],
    };
  },
};
</script>
