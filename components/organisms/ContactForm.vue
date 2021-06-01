<template lang="pug">
  form(action='POST' class='max-w-[400px]' @submit.prevent='handleSubmit')
    M-FormPair(
      pairId='name'
      label='Full Name'
      inputType='text'
      errorMessage='Please supply your full name with no extra special characters'
    )
    M-FormPair(
      pairId='email'
      label='Email Address'
      inputType='email'
      errorMessage='This email field is either empty or does not have a valid address'
    )
    M-FormPair(
      pairId='message'
      label='Your Message'
      isTextArea
      errorMessage='This message field is empty. Please provide a message.'
    )
    div(class='flex mt-4 flex-center')
      A-Button(
        buttonType='form'
        type='submit'
        appearance='primary'
        content='Send'
      )
      A-Button(buttonType='form' type='reset' appearance='secondary' content='Reset' class='ml-4')
</template>
<script>
export default {
  methods: {
    handleSubmit(event) {
      // const inputFields = event.srcElement.filter(
      //   (item) => item.tagName === 'INPUT' || item.tagName === 'TEXTAREA'
      // );
      console.table('Submit fired', this.$refs);
    },
  },
};
</script>
<style lang="postcss" scoped></style>
