import path from 'path';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 8000,
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tylerpweb-nuxtalt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio Site of Tyler Pfledderer, Web Development. Building Efficient and accessible websites with Vue, React, WordPress, and more!',
      },
      { name: 'robots', content: 'index. nofollow' },
      { name: 'revisit-after', content: '30 days' },
      { name: 'author', content: 'Tyler Pfledderer' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  vue: {
    config: {
      devtools: true,
    },
  },
  // Google Fonts Import: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      'Titillium+Web': {
        wght: [600, 700, 900],
      },
      Mulish: {
        wght: [500, 700],
      },
    },
    // preconnect: true,
    download: true,
    fontsDir: 'fonts',
    overwriting: true,
    display: 'swap',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    {
      path: '~/components/atoms/',
      prefix: 'A-',
    },
    {
      path: '~/components/molecules',
      prefix: 'M-',
    },
    {
      path: '~/components/organisms',
      prefix: 'O-',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  generate: {
    fallback: '404.html',
    interval: 2000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        options: {
          data: {},
        },
      });
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
  },
};
