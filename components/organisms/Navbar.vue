<template lang="pug">
  nav(class='fixed top-0 z-50 w-full' :class='test')
    //- Heading area of navbar
    //-   Mobile View: Header and menu toggle visible
    //-   Larger View: Header inline with navlinks
    div(class='flex items-center justify-between p-2 bg-gray-700')
      nuxt-link(to='/' @click.native='hideNavMenuOnClickedLink($event)')
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
      @click='hideNavMenuOnClickedLink($event)'
    )
      M-NavLinks
      M-SocialLinks(class='mt-14')
</template>
<script>
import disableScroll from 'disable-scroll';
export default {
  data() {
    return {
      menuOpen: false,
      windowWidth: 0,
    };
  },
  computed: {
    test() {
      if (process.client) {
        if (window.innerWidth < 500) {
          return console.log('This window is small.');
        } else {
          return console.log('This window is big!');
        }
      } else {
        return null;
      }
    },
  },
  // CURRENTLY NOT USED
  watch: {
    // Watch change in the width of the browser screen
    windowWidth(newWidth) {
      // console.log(newWidth, oldWidth);
    },
  },
  // CURRENTLY NOT USED
  mounted() {
    // Wrap in this.$nextTick??
    window.addEventListener('resize', this.onResize);
  },
  // CURRENTLY NOT USED
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleNav() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        disableScroll.on();
      } else {
        disableScroll.off();
      }
    },
    // CURRENTLY NOT USED
    // Updated the data value of the browser window's width
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    /**
     * Method that checks if browser is in mobile screen size and if a nav or social link is clicked.
     * If both above are true, close the nav menu
     */
    hideNavMenuOnClickedLink({ target }) {
      console.log(this);
      if (this.windowWidth < 500 && target.tagName !== 'DIV') {
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
