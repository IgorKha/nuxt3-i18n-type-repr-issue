// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    debug: true,
    types: 'composition',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-GB',
        file: 'en-GB.json',
      },
    ],
  },
})
