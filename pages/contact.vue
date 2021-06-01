<template lang="pug">
  Section(sectionTitle='Reach Out!')
    A-BodyText(
      content='I am available for private consultation with web design and development, or if you need a new developer on your team! Simply fill out the form below and I will contact you in the next 24-48 hours.<br/><strong>Thank you!</strong>'
    )
    form(
      class='max-w-[400px]'
      @submit='checkSubmit'
      action='https://vuejs.org'
      method='POST'
      novalidate='true'
    )
      //- Input field for Full Name
      M-FormPair(
        :isError='errors.name'
        pairId='name'
        label='Full Name'
        inputType='text'
        v-model='name'
      )
      //- Input field for Email
      M-FormPair(
        :isError='errors.email'
        pairId='email'
        label='Email Address'
        inputType='email'
        v-model='email'
      )
      //- Multiline field for User Message
      M-FormPair(
        isTextArea
        :isError='errors.message'
        pairId='message'
        label='Your Message'
        v-model='message'
      )

      div(class='flex mt-4 flex-center')
        A-Button(buttonType='form' type='submit' appearance='primary' content='Send')
</template>
<script>
export default {
  data() {
    return {
      errors: {},
      // Below data acquired from v-model directives
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    checkSubmit(event) {
      this.errors = {};

      if (!this.name) {
        this.errors.name = 'Name required.';
      } else if (!this.validName(this.name)) {
        this.errors.name =
          'Please provide a first and last name with no extra special characters.';
      }

      if (!this.email) {
        this.errors.email =
          'Email field empty. Please provide an email address';
      } else if (!this.validEmail(this.email)) {
        this.errors.email = 'Not a valid email';
      }

      if (!this.message || !this.validMessage(this.message)) {
        this.errors.message = 'Message to Tyler required with no leading space';
      }

      // If no errors are pushed
      if (!Object.keys(this.errors).length) {
        // return true to push submit and skip preventDefault action
        return true;
      }

      // Place preventDefault last to ensure that form does submit when name and email return true
      event.preventDefault();
    },
    validName(name) {
      const re = /^[a-zA-Z.]+\s[a-zA-Z]+(\s[a-zA-Z.]+)?$/;
      return re.test(name);
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validMessage(message) {
      const re = /^\S.+\S$/;
      return re.test(message);
    },
  },
};
</script>
<style lang="postcss" scoped>
.input-base {
  @apply py-[5px] px-2 border border-gray-500 rounded-sm shadow focus:border-[#FFB700] focus:outline-none;
}
</style>
