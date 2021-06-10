export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Web Developer',
    titleTemplate: 'Tyler Pfledderer | %s',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio Site of Tyler Pfledderer, Web Development. Building Efficient and accessible websites with Vue, React, WordPress, and more!',
      },
      {
        name: 'robots',
        content: 'index. nofollow',
      },
      {
        name: 'revisit-after',
        content: '30 days',
      },
      {
        name: 'author',
        content: 'Tyler Pfledderer',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  sitemap: {
    hostname: 'https://tylerpweb-nuxt.netlify.app',
  },
  robots: {
    Sitemap: 'https://tylerpweb-nuxt.netlify.app/sitemap.xml',
    UserAgent: '*',
    Disallow: '/admin',
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

  htmlValidator: {
    usePrettier: true,
    options: {
      rules: {
        'no-redundant-role': 'off',
        'heading-level': 'warn',
      },
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
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
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    [
      'nuxt-social-meta',
      {
        url: 'https://tylerpweb-nuxt.netlify.app',
        title: 'Tyler Pfledderer - Web Developer',
        description:
          'Portfolio Site of Tyler Pfledderer, Web Development. Building Efficient and accessible websites with Vue, React, WordPress, and more!',
        img: 'icon.png',
        locale: 'en_US',
        twitter: '@t_pfledderer',
        twitter_card: 'summary_large_image',
      },
    ],
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://html-validator.nuxtjs.org
    '@nuxtjs/html-validator',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://content.nuxtjs.org/
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  // Nuxt Content: https://content.nuxtjs.org/configuration
  content: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    meta: {
      theme_color: '#297b91',
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
      plugins: [
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
};
