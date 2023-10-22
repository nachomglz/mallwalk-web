<script setup lang="ts">
export type Role = 'administrator' | 'company' | 'subuser' | 'data_entry'

export type Option = {
   readonly icon: string
   readonly name: string
   readonly roles?: Role[]
   readonly url: string
}

export type Item = {
   readonly options?: Option[]
   readonly roles?: Role[]
   readonly title: string
   readonly url?: string
   readonly icon_class?: string
}

const menu_items = ref<Item[]>([
   {
      title: 'Home',
      icon_class: 'fa-regular fa-house',
   },
   {
      title: 'Profile',
      icon_class: 'fa-regular fa-user',
   },
])
</script>

<template>
   <header class="h-screen w-52 items-center bg-white py-5 text-zinc-800 shadow-sm">
      <h4 class="mx-auto w-fit font-light text-zinc-600">
         <span class="font-black text-zinc-800">MallWalk</span> Dashboard
      </h4>

      <hr class="my-8" />

      <ul class="ml-4">
         <li
            v-for="menu_item in menu_items"
            class="mb-4 flex items-center gap-3 cursor-pointer hover:text-yellow-500"
         >
            <i :class="menu_item.icon_class"></i>
            {{ menu_item.title }}
         </li>
      </ul>
   </header>
</template>
