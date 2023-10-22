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

        function getBills() {
            const {
               data: response ,
               pending: is_loading,
               error,
               refresh,
            } = useLazyFetch<Data<Bill[] | null>>(`${prefix}/getBills/all`, {
                baseURL: env.public.baseURL,
                key: `getBills ${Date.now()}`,
                method: 'GET',
            })
            return { error, is_loading, refresh, response }
        }

         return {
            getBills,
       }
      
   },
   {
      persist: true,
   },
 
)
