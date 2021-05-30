<template lang="pug">
  nav(class='fixed top-0 z-50 w-full')
    //- Heading area of navbar
    //-   Mobile View: Header and menu toggle visible
    //-   Larger View: Header inline with navlinks
    div(class='flex items-center justify-between p-2 bg-gray-700')
      nuxt-link(to='/' @click.native='menuOpen && hideMobileNavOnClickedLink($event)')
        A-Heading(tag='span' content='Tyler Pfledderer' class='text-white font-heading ms-2')
      //- Mobile menu toggle
      button(class='bg-gray-600 rounded-md cursor-pointer w-11 h-11 py-[10px] px-2 active:bg-gray-700' @click='toggleNav()')
        div(
          class='flex flex-col items-center justify-between h-full transition-transform duration-300'
          :class='menuOpen && "transform rotate-180"'
        )
          span(
            class='toggle-icon-line'
            :class='menuOpen && "transform rotate-45 translate-x-[4px]"'
          )
          span(
            class='toggle-icon-line'
            :class='menuOpen && "opacity-0 w-0"'
          )
          span(
            class='toggle-icon-line'
            :class='menuOpen && "transform -rotate-45 translate-x-[4px]"'
          )
    div(
      class='fixed left-0 z-50 flex flex-col w-full overflow-hidden transition-all duration-300 bg-white flex-center nav-mobile-h-adjust'
      :class='menuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"'
      @click='hideMobileNavOnClickedLink($event)'
    )
      M-NavLinks
      M-SocialLinks(class='mt-14')
</template>
<script>
import { ref } from '@nuxtjs/composition-api';
import VueScreenSize from 'vue-screen-size';
import disableScroll from 'disable-scroll';
export default {
  mixins: [VueScreenSize.VueScreenSizeMixin],
  setup() {
    const menuOpen = ref(false);

    /**
     * Function to toggle the showing of the Nav Menu on mobile screens
     * It also runs an API to disable scrolling while the menu is shown
     */
    const toggleNav = () => {
      menuOpen.value = !menuOpen.value;
      menuOpen.value ? disableScroll.on() : disableScroll.off();
    };

    return {
      menuOpen,
      toggleNav,
    };
  },
  methods: {
    /**
     * Method that checks if browser is in mobile screen size and if a nav or social link is clicked.
     * If both above are true, close the nav menu
     */
    hideMobileNavOnClickedLink({ target }) {
      console.log('hideMobileNavOnClickedLink triggered');
      if (this.$vssWidth < 500 && target.tagName !== 'DIV') {
        // Set menuOpen to false to trigger the menu to hide
        this.menuOpen = false;
        // Ensure body scrolling is enabled.
        disableScroll.off();
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
.nav-mobile-h-adjust {
  height: calc(100vh - 60px);
}
.toggle-icon-line {
  @apply bg-white block h-1 w-full rounded-[10%/50%] origin-left transition-nav-toggle duration-300;
}
</style>
