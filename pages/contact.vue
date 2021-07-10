<template lang="pug">
  MainWrap
    Section(sectionTitle='Reach Out!')
      A-BodyText(
        content='I am available for private consultation with web design and development, or if you need a new developer on your team! Simply fill out the form below and I will contact you in the next 24-48 hours.<br/><strong>Thank you!</strong>'
        class='max-w-md mx-auto'
      )
      form(
        class='max-w-[400px] mx-auto'
        @submit='checkSubmit'
        netlify
        netlify-honeypot='bot-field'
        name='contact-us'
        method='POST'
        novalidate='true'
      )
        //- Hidden Input for the Netlify Forms
        input(type='hidden' name='form-name' value='contact-us')
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
import { reactive, ref } from '@vue/composition-api';
export default {
  setup() {
    // ref and reactive properties to allow for reactive values inside setup.
    // ref for primitives and reactive for objects

    // Set up reactive object for resetting
    const initialErrMsgStates = {
      name: '',
      email: '',
      message: '',
    };

    // Data for the v-models attached to the input fields
    const name = ref('');
    const email = ref('');
    const message = ref('');

    // Spread reactive object
    const errors = reactive({ ...initialErrMsgStates });

    /** Function to reset reactive object back to initial state */
    function resetErrorMessages() {
      Object.assign(errors, initialErrMsgStates);
    }

    /** Function to run validation on form submit */
    const checkSubmit = (event) => {
      resetErrorMessages();
      if (!name.value) {
        errors.name = 'Name required.';
      } else if (!validName(name.value)) {
        errors.name =
          'Please provide a first and last name with no extra special characters.';
      }

      if (!email.value) {
        errors.email = 'Email field empty. Please provide an email address';
      } else if (!validEmail(email.value)) {
        errors.email = 'Not a valid email';
      }

      if (!message.value) {
        errors.message = 'Message required';
      }

      // If no errors are pushed
      if (!Object.keys(errors).length) {
        // return true to push submit and skip preventDefault action
        return true;
      }

      // Place preventDefault last to ensure that form does submit when name and email return true
      event.preventDefault();
    };

    const validName = (name) => {
      const re = /^[a-zA-Z.]+\s[a-zA-Z]+(\s[a-zA-Z.]+)?$/;
      return re.test(name);
    };
    const validEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    return {
      errors,
      name,
      email,
      message,
      checkSubmit,
      validName,
      validEmail,
    };
  },
  head() {
    return {
      title: 'Reach Out!',
    };
  },
};
</script>
<style lang="postcss" scoped>
.input-base {
  @apply py-[5px] px-2 border border-gray-500 rounded-sm shadow focus:border-[#FFB700] focus:outline-none;
}
</style>
