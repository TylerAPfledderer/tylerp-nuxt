<template lang="pug">
  textarea(
    v-if='isTextArea'
    class='h-24 input-base'
    :id='inputId'
    :name='`user-${inputId}`'
    v-model='inputVal'
  )
  input(
    v-else
    class='input-base'
    :id='inputId'
    :name='`user-${inputId}`'
    :type='inputType'
    v-model='inputVal'
  )
  //- v-model applied to element to run computed property on value change
</template>
<script>
export default {
  /**
   * Credit to this stackOverflow answer on passing data to the parent with v-model
   * https://stackoverflow.com/a/47312172/14374568
   */
  props: {
    value: {
      type: String,
      default: '',
    },
    inputId: {
      type: String,
      required: true,
    },
    isTextArea: {
      type: Boolean,
      default: false,
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
  computed: {
    // Sending input value data back up to the parent component via 'v-model'
    inputVal: {
      get() {
        return this.value;
      },
      // Setter grabbing value from getter
      set(val) {
        /**
         * The $emit 'event' name has to equal '@input'
         * which is a part of v-model tied to the parent component
         */
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style lang="postcss" scoped>
.input-base {
  @apply py-[5px] px-2 border border-gray-500 rounded-sm shadow focus:border-[#FFB700] focus:outline-none;
}
</style>
