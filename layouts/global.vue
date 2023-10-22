<script setup lang="ts">
// useHead({
//    script: [
//       {
//          async: true,
//          // company_id: 'company_id',
//          // company_name: 'company_name',
//          src: '/Intercom.js',
//          type: 'text/javascript',
//          // user_email: 'user_email',
//          // user_full_name: 'user_full_name',
//          // user_id: 'user_id',
//       },
//    ],
//    titleTemplate: (page_title?: string): string => {
//       const site_title = 'MallWalk'
//       return page_title ? `${page_title} | ${site_title}` : site_title
//    },
// })
</script>

<template>
   <section
      id="global-layout"
      class="flex min-h-screen  bg-stone-50 font-inter"
   >
      <ConfirmPopup />
      <Toast />
      <NuxtLoadingIndicator />
      <slot name="header" />
      <slot name="default" />
      <slot name="footer" />
   </section>
</template>

<style>
* {
   --duration-page: 0.3s;
}

.page-enter-active {
   animation: fadeIn var(--duration-page);
}

.page-leave-active {
   animation: fadeOut var(--duration-page);
}

h1 {
   @apply text-4xl;
}

h2 {
   @apply text-2xl;
}

h3 {
   @apply text-lg;
}

h4 {
   @apply text-base;
}

h5 {
   @apply text-sm;
}

h6 {
   @apply text-xs;
}

.p-component,
.p-inputtext,
.p-link {
   @apply font-inter;
}
</style>
