<template lang="pug">
  ul(class='flex flex-wrap justify-center gap-y-8 md:gap-y-12 lg:gap-x-4 xl:gap-y-6 xl:gap-x-8')
    li(
      v-for='(skill, index) in skills'
      :key='index'
      class='m-[6px]'
    )
      M-SkillCard(:skill='skill')
</template>
<script>
import { useAsync, useContext } from '@nuxtjs/composition-api';
export default {
  setup() {
    const { $content } = useContext();
    const skills = useAsync(() => {
      return $content('skills')
        .only(['display-order', 'title', 'description', 'tags'])
        .sortBy('display-order', 'asc')
        .fetch();
    });
    return { skills };
  },
};
</script>
<style lang="postcss" scoped></style>
