<template lang="pug">
  ul(class='flex flex-center' aria-label='Social Links')
    li(
      v-for='(link, index) in socialLinks'
      :key='index'
      :class='index !== 0 && "ml-6"'
    )
      A-Icon(isLink :href='link.href' :icon='link.icon')
</template>
<script>
export default {
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
