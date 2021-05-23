<template lang="pug">
  label(:for='forLabel' class='font-bold') {{content}}
</template>
<script>
export default {
  props: {
    forLabel: {
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
