import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  devtools: {
    enabled: true
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/style.css'
  ],

  app: {
    baseURL: '/slade-garden/',

    head: {
      title: 'Slade Gardens Adventure Playground',

      htmlAttrs: {
        lang: 'en-GB'
      },

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Slade Gardens, Adventure playground for children.'
        },
        {
          name: 'theme-color',
          content: '#132b45'
        }
      ],

      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/slade-garden/logo.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/slade-garden/apple-touch-icon.png'
        }
      ]
    }
  },
})