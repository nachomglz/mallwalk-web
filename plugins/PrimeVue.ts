import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.use(PrimeVue, { ripple: true })
   nuxtApp.vueApp.use(ConfirmationService)
})
