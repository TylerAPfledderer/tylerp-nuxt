<template lang="pug">
Fragment
  h4(:id='ariaId' class='sr-only') Pages
  ul(class='flex flex-col flex-center md:flex-row' :aria-labelledby='ariaId')
    li(v-for="(link, index) in links" :key='index' :class='index !== 0 && "mt-6 md:mt-0 md:ml-2"')
      A-Button(buttonType='nuxtLink' :path='link.url' :content='link.name' :appearance='link.appearance')
</template>
<script>
export default {
  props: {
    ariaId: {
      required: true,
      type: String,
    },
  },
  setup() {
    const links = [
      {
        url: '/projects',
        name: 'Projects',
      },
      {
        url: '/contact',
        name: 'Reach Out',
        appearance: 'secondary',
      },
    ];

    return { links };
  },
};
</script>
