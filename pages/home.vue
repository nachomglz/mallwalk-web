<script setup>
onMounted(() => {
   chartData.value = setChartData()
   chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const store_stats = useStatsStore()

const bills_information = store_stats.getBills()
const base_currency_symbol = '€'


const response_mock = {
   data: [
      {
         id: 1,
         amount: 100,
         status: true,
         device: '2345676543', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 2,
         amount: 100,
         status: true,
         device: '2', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 3,
         amount: 100,
         status: true,
         device: '33', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 4,
         amount: 100,
         status: true,
         device: '2345676543', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 5,
         amount: 100,
         status: true,
         device: '876543', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 6,
         amount: 100,
         status: true,
         device: '3333333', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 7,
         amount: 100,
         status: true,
         device: '222', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 8,
         amount: 100,
         status: true,
         device: '222', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 9,
         amount: 100,
         status: true,
         device: '3333', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 10,
         amount: 100,
         status: true,
         device: '9999', //id de device de usuario
         date: new Date(),
         store_name: 'ZARA',
      },
      {
         id: 11,
         amount: 100,
         status: true,
         device: '1234', //id de device de usuario
         date: new Date(),
      },
      {
         id: 12,
         amount: 100,
         status: true,
         device: '1234', //id de device de usuario
         date: new Date(),
      },
   ],
   status: 200,
   message: 'OK',
}

const total_registered_income = computed(() => {
   return response_mock.data.reduce((acc, item) => {
      return acc + item.amount
   }, 0)
})

const expenses_by_date = {};

response_mock.data.forEach(item => {
    const dateKey = item.date.toISOString().split('T')[0];
    if (!expenses_by_date[dateKey]) {
        expenses_by_date[dateKey] = {
            amount: item.amount,
            quantity: 1
        };
    } else {
        expenses_by_date[dateKey].amount += item.amount;
        expenses_by_date[dateKey].quantity++;
    }
});





const setChartData = () => {
   const documentStyle = getComputedStyle(document.documentElement)

   return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         {
            label: 'Dataset 1',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10],
         },
         {
            label: 'Dataset 2',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
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

const value = ref('Weekly')
const options = ref(['Daily', 'Weekly', 'Monthly'])

const visitors_counter = ref(20)

setInterval(() => {
   visitors_counter.value++
}, 2000)
</script>

<template>
   <section class="p-10">
      <p class="mb-6 text-xs text-zinc-500">Pages / Home</p>

      <h2 class="mb-8 text-zinc-800">Dashboard</h2>

      <p class="mb-6 text-sm text-zinc-500">
         Current visitors: <span>{{ visitors_counter }} </span>
      </p>
      <p class="mb-6 text-sm text-zinc-500">
         Total Expenses Registered: <span>{{ total_registered_income }} {{ base_currency_symbol }}</span>
      </p>

      <!-- fecha de compra: {{ expenses_by_date }} -->

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

      <section id="charts" class="grid grid-cols-2 gap-8">
         <div class="w-96 rounded-lg bg-white">
            <h3>Cantidad de compras por fecha</h3>
            <Chart
               type="line"
               :data="chartData"
               :options="chartOptions"
               class="h-30rem"
            />
         </div>
         <div class="w-96 rounded-lg bg-white">
            <h3>Ingresos registrados por tienda</h3>

            <Chart
               type="line"
               :data="chartData"
               :options="chartOptions"
               class="h-30rem"
            />
         </div>
         <div class="w-96 rounded-lg bg-white">
            <h3>Cantidad de compras por dia y tienda</h3>

            <Chart
               type="line"
               :data="chartData"
               :options="chartOptions"
               class="h-30rem"
            />
         </div>
         <div class="w-96 rounded-lg bg-white">
            <h3>Dias mas frecuentados</h3>

            <Chart type="bar" :data="chartData" :options="chartOptions" />
         </div>
      </section>
   </section>
</template>
