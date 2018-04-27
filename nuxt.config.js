const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tuturu !',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/tuturu.png' }
    ]
  },
  plugins: [
    '~/plugins/vue-awesome',
    '~/plugins/vue-markdown',
    '~/plugins/vue-motion',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    },
    vendor: [
      'vue-awesome',
      'vue-markdown',
      'vue-motion'
    ]
  }
}
