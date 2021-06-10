<template lang="pug">
div
  h4(:id='ariaId' class='sr-only') Social Links
  ul(class='flex flex-center' :aria-labelledby='ariaId')
    li(
      v-for='(link, index) in socialLinks'
      :key='index'
      :class='index !== 0 && "ml-6"'
    )
      A-Icon(isLink :href='link.href' :icon='link.icon')
</template>
<script>
export default {
  props: {
    ariaId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      socialLinks: [
        {
          href: 'https://codepen.io/tylerapfledderer',
          icon: 'codepen',
        },
        {
          href: 'https://linkedin.com/in/tyler-pfledderer',
          icon: 'linkedin',
        },
        {
          href: 'https://twitter.com/t_pfledderer',
          icon: 'twitter',
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped></style>
