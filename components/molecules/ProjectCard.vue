<template lang="pug">
  article(class='flex flex-col h-full overflow-hidden bg-white shadow-md rounded-xl max-w-[336px] min-w-[272px]')
    A-Image(
      class='shadow-md w-full h-[160px] object-cover object-center-top'
      :imgPath='require(`assets/images/project-previews/${project.imgPath}.png`)'
    )
    div(class='flex flex-col items-center h-full py-6 text-center px-9')
      div(class='flex items-center mb-3')
        A-Icon(v-for='(name, index) in project.icons' :key='index' :icon='name' :class='index !== 0 && "ml-2"')
      A-Heading(tag='h2' :content='project.title' class='mb-2 font-body')
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
      icons: {
        type: Array,
      },
      imgPath: {
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
