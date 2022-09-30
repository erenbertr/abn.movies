require('dotenv').config();

export default {

    ssr: false,
    target: 'static',

    server: {
        port: 46000,
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {

        title: 'abn.movies',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
            },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/styles/app.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/swiper.js', mode: 'client' },
        '~/plugins/maze',
        '~/plugins/utils',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        publicPath: '/nuxt/',
        extend: function (config, { isDev, isClient }) {
            config.node = {
                fs: 'empty'
            }
        },
    },
}
