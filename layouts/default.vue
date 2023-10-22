<template>
   <section id="default-layout">
      <NuxtLayout name="global">
         <template #header>
            <TheNavbar />
         </template>
         <slot name="default" />
      </NuxtLayout>
   </section>
</template>
