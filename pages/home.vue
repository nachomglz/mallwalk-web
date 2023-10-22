<script setup>
onMounted(() => {
   chartData.value = setChartData()
   chartOptions.value = setChartOptions()

   chartFrecuenedDays.value = setFrecuentedDaysData()
   chartCategories.value = setCategoriesData()
})

const chartData = ref()
const chartOptions = ref()

const chartFrecuenedDays = ref()
const chartCategories = ref()

const store_stats = useStatsStore()

const bills_information = store_stats.getBills()
const base_currency_symbol = '€'

const total_registered_income = computed(() => {
   return bills_information.data.reduce((acc, item) => {
      return acc + item.amount
   }, 0)
})

const expenses_by_date = {}

bills_information.data.forEach(item => {
   const dateKey = item.date.toISOString().split('T')[0]
   if (!expenses_by_date[dateKey]) {
      expenses_by_date[dateKey] = {
         amount: item.amount,
         quantity: 1,
      }
   } else {
      expenses_by_date[dateKey].amount += item.amount
      expenses_by_date[dateKey].quantity++
   }
})

const setChartData = () => {
   const documentStyle = getComputedStyle(document.documentElement)

   return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         {
            label: 'Zara',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10],
         },
         {
            label: 'Bershka',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
         },
         {
            label: 'Pull & Bear',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--orange-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [12, 33, 89, 19, 90, 76, 21],
         },
         {
            label: 'Adidas',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--red-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [11, 9, 4, 13, 16, 88, 1],
         },
         {
            label: 'Apple',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--yellow-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [6, 55, 98, 12, 3, 100, 298],
         },
      ],
   }
}

const setCategoriesData = () => {
   const documentStyle = getComputedStyle(document.documentElement)

   return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         {
            label: 'Tecnologia',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10],
         },
         {
            label: 'Comida',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
         },
         {
            label: 'Deportes',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--orange-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [12, 33, 89, 19, 90, 76, 21],
         },
         {
            label: 'Diversión',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--red-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [11, 9, 4, 13, 16, 88, 1],
         },
         {
            label: 'Hogar',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--yellow-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [6, 55, 98, 12, 3, 100, 298],
         },
      ],
   }
}


const setChartOptions = () => {
   const documentStyle = getComputedStyle(document.documentElement)
   const textColor = documentStyle.getPropertyValue('--text-color')
   const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
   )
   const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

   return {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
         legend: {
            labels: {
               color: textColor,
            },
         },
      },

      scales: {
         x: {
            ticks: {
               color: textColorSecondary,
            },
            grid: {
               color: surfaceBorder,
            },
         },
         y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
               color: textColorSecondary,
            },
            grid: {
               color: surfaceBorder,
            },
         },
         y1: {
            type: 'linear',
            display: true,
            position: 'right',
            ticks: {
               color: textColorSecondary,
            },
            grid: {
               drawOnChartArea: false,
               color: surfaceBorder,
            },
         },
      },
   }
}

const setFrecuentedDaysData = () => {
   const documentStyle = getComputedStyle(document.documentElement)

   return {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [
         {
            label:'Usuarios activos en la app',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10],
         },
         {
            label: 'Usuarios inactivos en la app',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
         },
      ],
   }
}

const value = ref('Monthly')
const options = ref(['Daily', 'Weekly', 'Monthly'])

const visitors_counter = ref(20)

const old_visitors_value = ref(20)

setInterval(() => {
   old_visitors_value.value = visitors_counter.value
   visitors_counter.value = Math.floor(Math.random() * 100)
}, 2000)


</script>

<template>
   <section class="p-10 h-screen overflow-y-auto w-full">
      <div class="flex justify-between">
         <div class="grid">
            <p class="mb-6 text-xs text-zinc-500">Pages / Home</p>
      
            <h2 class="mb-8 text-zinc-800">Dashboard</h2>
         </div>

         <div class="bg-white grid w-48 px-4  py-2 mb-5 border rounded-lg border-gray-200">
         <p class="text-zinc-500 mb-4 text-sm"> Current visitors:</p>

         <span class="text-4xl text-zinc-700"> {{ visitors_counter }} <i :class="old_visitors_value < visitors_counter ? 'fa-regular fa-arrow-up text-green-600' : 'fa-regular fa-arrow-down text-red-500'"></i> </span>
      </div>
      </div>

      <!-- <p class="mb-6 text-sm text-zinc-500">
         Current visitors: <span>{{ visitors_counter }} </span>
      </p>
      <p class="mb-6 text-sm text-zinc-500">
         Total Expenses Registered:
         <span>{{ total_registered_income }} {{ base_currency_symbol }}</span>
      </p> -->

      <!-- fecha de compra: {{ expenses_by_date }} -->

      

      <section id="charts" class="">
         <section class="mb-8 px-4 py-6  rounded-lg bg-white">
            <h3>Promedio de días más frecuentados</h3>

            <Chart type="bar" :data="chartFrecuenedDays" :options="chartOptions" />
         </section>

         <section>
            <SelectButton
               v-model="value"
               :options="options"
               optionDisabled="constant"
               class="mb-6"
               :pt="{
                  button: ({ context }) => ({
                     class: {
                        'h-10 hover:bg-zinc-500 hover:text-white': true,
                        'bg-zinc-500 border-zinc-500': context.active,
                        'bg-white border border-zinc-500 text-zinc-500':
                           !context.active,
                     },
                  }),
                  label: ({ context }) => ({
                     class: {
                        'text-xs hover:text-white': true,
                        'text-white': context.active,
                        'text-zinc-500': !context.active,
                     },
                  }),
               }"
            />

            <div class="grid grid-cols-2 gap-8">
               <div class="w-full px-4 py-6  rounded-lg bg-white">
                  <h3>Cantidad de compras por fecha</h3>
                  <Chart
                     type="line"
                     :data="chartData"
                     :options="chartOptions"
                     class="h-30rem"
                  />
               </div>
               <div class="w-full px-4 py-6  rounded-lg bg-white">
                  <h3>Ingresos registrados por tienda</h3>

                  <Chart
                     type="line"
                     :data="chartData"
                     :options="chartOptions"
                     class="h-30rem"
                  />
               </div>
               <div class="w-full px-4 py-6 rounded-lg bg-white">
                  <h3>Cantidad de compras por dia y tienda</h3>

                  <Chart
                     type="line"
                     :data="chartData"
                     :options="chartOptions"
                     class="h-30rem"
                  />
               </div>
               <div class="w-full px-4 py-6 rounded-lg bg-white">
                  <h3>Categorias de tiendas que mas venden</h3>

                  <Chart
                     type="line"
                     :data="chartCategories"
                     :options="chartOptions"
                     class="h-30rem"
                  />
               </div>
            </div>
         </section>
      </section>
   </section>
</template>
