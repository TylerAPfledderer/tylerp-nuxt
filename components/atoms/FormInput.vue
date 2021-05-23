<template lang="pug">
  textarea(v-if='isTextArea' class='h-24 p-3 border-[5px] border-transparent rounded shadow-md focus:border-[#FFB700] focus:outline-none' :id='inputId' ref='inputRef' @blur='sendValue')
  input(v-else :input='inputType' :id='inputId' ref='inputRef' @blur='sendValue')
</template>
<script>
export default {
  props: {
    isTextArea: {
      default: false,
      type: Boolean,
    },
    inputId: {
      required: true,
      type: String,
    },
    inputType: {
      default: null,
      type: String,
      validator(value) {
        return [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ].includes(value);
      },
    },
  },
  methods: {
    // Send input value up to parent that defines that data entered
    sendValue({ target }) {
      this.$emit('send-value', [target.value, this.$refs.inputRef]);
    },
  },
};
</script>
<style lang="postcss" scoped></style>
