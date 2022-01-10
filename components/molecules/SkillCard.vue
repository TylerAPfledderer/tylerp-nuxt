<template lang="pug">
  div(class='flex flex-col items-center lg:w-[369px]')
    div(class='flex mb-3 flex-center')
      A-Icon(
        v-for='(logo, index) in skill.tags'
        :key='index'
        :icon='logo'
        isLarge
        :class='index !== 0 && "ml-4"'
      )
    A-Heading(
      tag='h3'
      :content="skill.title"
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
      tags: {
        type: Array,
      },
      title: {
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
