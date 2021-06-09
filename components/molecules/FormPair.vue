<template lang="pug">
  div(
    class='relative flex flex-col mb-4 text-left after:empty-content after:absolute after:right-2 after:top-[38px] after:w-4 after:h-4'
    :class='isError && "after:bg-error-icon"'
  )
    A-FormLabel(
      :forLabel='pairId'
      :content='label'
      class='mb-1'
    )
    A-FormInput(
      :isTextArea='isTextArea'
      :inputId='pairId'
      :inputType='inputType'
      :class='isError && "border-error"'
      v-on='$listeners'
    )
    b(
      v-if='isError'
      class='mt-1 text-error'
    ) {{isError}}
</template>
<script>
export default {
  props: {
    isError: {
      type: String,
      default: undefined,
    },
    pairId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: null,
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="postcss" scoped></style>
