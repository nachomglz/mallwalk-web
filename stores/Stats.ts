export type Data<T> = {
    data: T
    status: number
    message?: string
} 

export type Bill = {
   id: number
   amount: number
   status?: boolean
   device: string
   date: Date
   store_name: string 
}


export const useStatsStore = defineStore(
   'stats',
   () => {
    const env = useRuntimeConfig()
    const prefix = 'api'

        // function getBills() {
        //     const {
        //        data: response ,
        //        pending: is_loading,
        //        error,
        //        refresh,
        //     } = useLazyFetch<Data<Bill[] | null>>(`${prefix}/getBills/all`, {
        //         baseURL: env.public.baseURL,
        //         key: `getBills ${Date.now()}`,
        //         method: 'GET',
        //     })
        //     return { error, is_loading, refresh, response }
        // },

        function getBills(): Data<Bill[]> {
            const response = {
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
                      store_name: 'Bershka'
                   },
                   {
                      id: 12,
                      amount: 100,
                      status: true,
                      device: '1234', //id de device de usuario
                      date: new Date(),
                      store_name: 'Pull & Bear'
                   },
                ],
                status: 200,
                message: 'OK',
             }
            return response
         }

         return {
            getBills,
       }
      
   },
   {
      persist: true,
   },
 
)
