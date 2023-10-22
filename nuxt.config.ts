// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   build: {
      transpile: ['primevue'],
   },
   css: [
      'primevue/resources/themes/lara-light-blue/theme.css',
      'primevue/resources/primevue.min.css',
      'primeicons/primeicons.css',
      'assets/fonts/Inter/v12.css',
      'assets/fonts/Font-Awesome-Pro/v6.4.2.css',
   ],
   devtools: { enabled: true },
   imports: {
      dirs: ['stores'],
   },
   modules: [
      '@nuxt/devtools',
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      ['@pinia/nuxt', { autoImports: ['defineStore'] }],
      '@pinia-plugin-persistedstate/nuxt',
      'nuxt-lodash',
      ['@vee-validate/nuxt', { autoImports: true }],
      'nuxt-svgo',
   ],
   runtimeConfig: {
      // The private keys which are only available within server-side
      // apiSecret: '123',

      // Keys within public, will be also exposed to the client-side
      public: {
         baseURL: 'https://07a0-62-87-103-225.ngrok-free.app/'
      },
   },
   ssr: false,
   svgo: {
      componentPrefix: 'svg',
   },
})
