<template lang="pug">
  p(v-html='content')
</template>
<script>
export default {
  props: {
    content: {
      required: true,
      type: String,
    },
  },
};
</script>
