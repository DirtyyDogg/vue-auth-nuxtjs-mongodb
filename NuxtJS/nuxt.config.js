import colors from 'vuetify/es5/util/colors'
import Api from './api/config/api.config'
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Express CRUD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      // ssr: false alleen include op client-side
      { src: '~/plugins/vue-js-modal.js', ssr: true },
      { src: '~/plugins/PluginModal.js', ssr: false },
      { src: '~/plugins/IframePlugin.js', ssr: false },
      { src: '~/plugins/VueFriendlyIframe.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
      '@nuxtjs/vuetify',
  ],
  server: {
      port: 3000, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false
    },
    /*
    ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    //'@nuxtjs/bulma',    
    'nuxt-buefy',
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: true,
          user: {
            url: '/api/users/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: '/user/login', // User will be redirected to this path if login is required
      logout: '/', // User will be redirected to this path if after logout, current route is protected
      home: '/' // User will be redirect to this path after login if accessed login page directly
    },
    rewriteRedirects: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    method:'post',
    url:'logout',
    baseURL: '/',
   },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
    vuetify: {
        customVariables: ['./assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                }
            }
        }
    },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
        preset: {
          features: {
            customProperties: false
          }
        }
      },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  serverMiddleware: [
    '~/api/index.js'
  ]
}
