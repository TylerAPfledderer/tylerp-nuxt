<template lang="pug">
  div(class='flex flex-col items-center lg:w-[369px]')
    div(class='flex mb-3 flex-center')
      A-Icon(
        v-for='(logo, index) in skill.logos'
        :key='index'
        :icon='logo'
        isLarge
        :class='index !== 0 && "ml-4"'
      )
    A-Heading(
      tag='h3'
      :content="skill.heading"
      class='mb-2'
    )
    A-BodyText(:content='skill.description' class='max-w-[277px] mb-0')
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
