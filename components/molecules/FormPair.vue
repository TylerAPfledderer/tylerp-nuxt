<template lang="pug">
  // Pair provided in a div to control flex layout
  div(
    ref='container'
    class='relative flex flex-col mb-2 after:empty-content after:absolute after:right-2 after:top-[31px] after:w-4 after:h-4'
    :class='valid !== null && (valid ? "after:bg-valid-icon" : "after:bg-error-icon")'
  )
    A-FormLabel(:forLabel='pairId' :content='label' class='mb-1')
    A-FormInput(
      :inputId='pairId'
      :inputType='inputType'
      :isTextArea='isTextArea'
      @click='handleValidation' @send-value='handleValidation'
      :class='valid !== null && (valid ? "border-[#0f0]" : "border-[#f00]")'
    )
    // Provide an error message if input validation fails
    span(
      class='text-[#f00] font-bold mt-1 opacity-0'
      :class='valid !== null && !valid && "opacity-100"'
      aria-hidden='true'
    ) {{errorMessage}}
</template>
<script>
export default {
  props: {
    pairId: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    inputType: {
      required: true,
      type: String,
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      valid: null,
    };
  },
  methods: {
    /*
     * Params array come from 'send-value' method emitted in the FormInput component
     * 'Value' is the input value. '{ id }' is destructure from the object ref of the input element
     */
    handleValidation([value, { id }]) {
      const passValidState = (value, exp) => {
        const regex = exp;
        return value !== '' && regex.test(value);
      };

      let isValid;

      if (id === 'name') {
        isValid = passValidState(value, /^[a-zA-Z]+([a-zA-Z]+)+$/);
      }

      if (id === 'email') {
        isValid = passValidState(value, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      }

      if (id === 'message') {
        isValid = passValidState(value, /^[\w+ ]+/);
      }
      this.$data.valid = isValid;
    },
  },
};
</script>
<style lang="postcss" scoped></style>
