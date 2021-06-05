const plugin = require('tailwindcss/plugin');
const {
  darken,
  lighten
} = require('polished');
const colors = require('tailwindcss/colors');
const _ = require('lodash');

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
      heading: ['Titillium Web', 'Arial', 'Helvetica', 'sans-serif'],
      body: [
        'Mulish',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    lineHeight: (theme) => ({
      1: theme('spacing.6'),
      2: theme('spacing.12'),
      3: theme('spacing.16'),
    }),
    modularScale: {
      ratio: 1.2
    },
    screens: {
      xs: '375px',
      sm: '425px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1280px',
    },
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
        error: '#f00',
      },
      spacing: {
        'screen-width': '100vw',
      },
      transitionProperty: {
        'shadow-background': 'background, shadow',
        background: 'background',
        'nav-toggle': 'transform, opacity, width',
      },
      keyframes: {
        swell: {
          '50%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },
        waggleScale: {
          '10%': {
            transform: 'scale(0.8) rotate(-20deg)',
          },
          '40%': {
            transform: 'scale(1.9) rotate(10deg)',
          },
          '60%': {
            transform: 'scale(1.6) rotate(-10deg)',
          },
          '100%': {
            transform: 'scale(1.4)',
          },
        },
      },
      animation: {
        swell: 'swell 0.5s infinite',
        waggleScale: 'waggleScale forwards .5s',
      },
      backgroundImage: () => ({
        // Error icon that appears next to invalid input field in FormPair component
        'error-icon': "url('~/assets/icons/error-icon.svg')",
        // Check icon that appears next to valid input field in FormPair component
        'valid-icon': "url('~/assets/icons/check-icon.svg')",
      }),
      objectPosition: {
        'center-top': 'center top',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['hover-focus'],
      fontWeight: ['hover-focus'],
      position: ['after'],
      backgroundImage: ['after'],
    },
  },
  plugins: [
    // This Modular Scale plugin scheme courtesy of Rico Sta. Cruz - https://ricostacruz.com/til/another-look-at-tailwind
    plugin(({
      addUtilities,
      theme
    }) => {
      const ratio = theme('modularScale.ratio');
      const leading = theme('lineHeight');
      addUtilities({
        '.ms-small': {
          fontSize: `${ratio ** -1}rem`,
          lineHeight: leading[1],
        },
        '.ms-1': {
          fontSize: `${ratio ** 1}rem`,
          lineHeight: leading[1]
        },
        '.ms-2': {
          fontSize: `${ratio ** 2}rem`,
          lineHeight: leading[1]
        },
        '.ms-3': {
          fontSize: `${ratio ** 3}rem`,
          lineHeight: leading[2]
        },
        '.ms-4': {
          fontSize: `${ratio ** 4}rem`,
          lineHeight: leading[2]
        },
        '.ms-5': {
          fontSize: `${ratio ** 5}rem`,
          lineHeight: leading[2]
        },
        '.ms-6': {
          fontSize: `${ratio ** 6}rem`,
          lineHeight: leading[3]
        },
        '.ms-7': {
          fontSize: `${ratio ** 7}rem`,
          lineHeight: leading[3]
        },
      });
    }),
    plugin(({
      addVariant,
      e
    }) => {
      addVariant('hover-focus', ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(({
          className
        }) => {
          return `.${e(`hover-focus${separator}${className}`)}:hover, .${e(
            `hover-focus${separator}${className}`
          )}:focus`;
        });
      });
    }),
    require('tailwindcss-pseudo-elements'),
    // Apply utility for a fully centered [group of] item(s) in flexbox
    plugin(({
      addUtilities
    }) => {
      const newUtility = {
        '.flex-center': {
          'justify-content': 'center',
          'align-items': 'center',
        },
      };

      addUtilities(newUtility, ['responsive']);
    }),
    // Render width and height of equal value
    plugin(({
      addUtilities,
      theme,
      e
    }) => {
      const squareShapeUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`square-${key}`)}`]: {
            width: value,
            height: value
          }
        };
      });

      addUtilities(squareShapeUtilities);
    }),
  ],
};
