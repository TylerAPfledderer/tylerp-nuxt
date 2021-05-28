<template lang="pug">
  div(class='flex flex-col items-center w-full max-w-[369px] text-center')
    div(class='flex mb-2 flex-center')
      A-Icon(
        v-for='(logo, index) in skill.logos'
        :key='index'
        :icon='logo'
        isLarge
        :class='index !== 0 && "ml-6"'
      )
    A-Heading(
      tag='h3'
      :content="skill.heading.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))"
      class='mb-2'
    )
    A-BodyText(:content='skill.description' class='max-w-[277px]')
</template>
<script>
export default {
  props: {
    skill: {
      required: true,
      type: Object,
      logos: {
        type: Array,
      },
      heading: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  },
};
</script>
<style lang="postcss" scoped></style>
