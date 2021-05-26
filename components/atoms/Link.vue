<template lang="pug">
  a(:href='href' class='font-bold text-blue-700' :class='navLink && "text-gray-700 no-underline"') {{content}}
</template>
<script>
export default {
  props: {
    href: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="postcss" scoped></style>
