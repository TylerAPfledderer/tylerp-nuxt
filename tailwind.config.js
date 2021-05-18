const plugin = require('tailwindcss/plugin');
const { darken, lighten } = require('polished');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['Titillium Web', 'sans-serif'],
      body: ['Muli', 'sans-serif'],
    },
    lineHeight: (theme) => ({
      1: theme('spacing.6'),
      2: theme('spacing.12'),
      3: theme('spacing.18'),
    }),
    modularScale: { ratio: 1.2 },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#297B91',
        },
        btn: {
          light: lighten(0.1, '#FFB700'),
          DEFAULT: '#FFB700',
          dark: darken(0.1, '#FFB700'),
        },
        'btn-alt': {
          DEFAULT: colors.white,
          dark: darken(0.42, colors.white),
        },
        'focus-border': '#333',
      },
      spacing: {
        'screen-width': '100vw',
      },
      transitionProperty: {
        'shadow-background': 'background, shadow',
        background: 'background',
      },
      keyframes: {
        swell: {
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        swell: 'swell 0.5s infinite',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['hover-focus'],
      fontWeight: ['hover-focus'],
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const ratio = theme('modularScale.ratio');
      const leading = theme('lineHeight');
      addUtilities({
        '.ms-small': {
          fontSize: `${ratio ** -1}rem`,
          lineHeight: leading[1],
        },
        '.ms-1': { fontSize: `${ratio ** 1}rem`, lineHeight: leading[1] },
        '.ms-2': { fontSize: `${ratio ** 2}rem`, lineHeight: leading[1] },
        '.ms-3': { fontSize: `${ratio ** 3}rem`, lineHeight: leading[2] },
        '.ms-4': { fontSize: `${ratio ** 4}rem`, lineHeight: leading[2] },
        '.ms-5': { fontSize: `${ratio ** 5}rem`, lineHeight: leading[2] },
        '.ms-6': { fontSize: `${ratio ** 6}rem`, lineHeight: leading[3] },
        '.ms-7': { fontSize: `${ratio ** 7}rem`, lineHeight: leading[3] },
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant('hover-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`hover-focus${separator}${className}`)}:hover, .${e(
            `hover-focus${separator}${className}`
          )}:focus`;
        });
      });
    }),
  ],
};
