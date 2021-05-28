<template lang="pug">
  component(:is='tag' :aria-hidden='tag === "span"') {{ content }}
</template>
<script>
export default {
  props: {
    tag: {
      required: true,
      type: String,
      validator(value) {
        return ['h1', 'h2', 'h3', 'span'].includes(value);
      },
    },
    content: {
      required: true,
      type: String,
    },
  },
};
</script>
