<template lang="pug">
  p {{ content }}
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
