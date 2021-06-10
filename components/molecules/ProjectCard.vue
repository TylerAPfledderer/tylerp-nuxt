<template lang="pug">
  // 'min-w' provided to account for padding around the card to keep from shrinking too low
  section(class='flex flex-col h-full overflow-hidden bg-white shadow-md rounded-xl max-w-[336px] min-w-[272px] text-black')
    A-Image(
      class='w-full h-[160px] object-cover object-center-top'
      :imgPath='project.previewImg'
      width='336'
      height='336'
    )
    div(class='flex flex-col items-center h-full p-6')
      div(class='flex items-center mb-6')
        A-Icon(v-for='(name, index) in project.tags' :key='index' :icon='name' :class='index !== 0 && "ml-2"')
      A-Heading(tag='h3' :content='project.title' class='mb-2 font-normal text-gray-700 font-body')
      A-BodyText(:content='project.description')
      div(class='flex flex-col items-center mt-auto')
        span(class='mb-1') See it Live!
        A-Button(:path='project.demoUrl' appearance='primary' content='View Demo')
</template>
<script>
export default {
  props: {
    project: {
      required: true,
      type: Object,
      title: {
        type: String,
      },
      tags: {
        type: Array,
      },
      previewImg: {
        type: String,
      },
      description: {
        type: String,
      },
      demoUrl: {
        type: String,
      },
    },
  },
};
</script>
