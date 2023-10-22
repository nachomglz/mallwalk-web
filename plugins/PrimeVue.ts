import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import SelectButton from 'primevue/selectbutton'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.use(PrimeVue, { ripple: true })
   nuxtApp.vueApp.use(ConfirmationService)
   nuxtApp.vueApp.component('Card', Card)
   nuxtApp.vueApp.component('Chart', Chart)
   nuxtApp.vueApp.component('SelectButton', SelectButton)
})
