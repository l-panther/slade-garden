export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },

  // Bootstrap first (grid + utility classes), our own stylesheet after —
  // later source order lets our rules win when a class name collides.
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/style.css'],

  app: {
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
          content: 'Slade gardens, Adventure playground for children.'
        },
        {
          name: 'theme-color',
          content: '#132b45'
        },
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        }
      ]
    }
  }
})
