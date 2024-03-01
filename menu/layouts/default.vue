<template>
  <header>
    <h1>Início</h1>
  </header>
  <Transition>
    <main v-cloak>
      <NuxtLoadingIndicator />
      <div>
        <NuxtPage />
      </div>
    </main>
  </Transition>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { baseURL, cdnURL } = runtimeConfig.app;
useServerSeoMeta({
  twitterCard: "summary_large_image",
  twitterImage:{
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    alt: "garage | sistema b em nuxtjs",
  },
  twitterSite: cdnURL,
  ogUrl: cdnURL,
  ogImage: {
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    type: "image/jpeg",
    alt: "garage | sistema em nuxtjs",
    height: 630,
    width: 1200,
  },
});
</script>

<style>
:root {
  color-scheme: dark light !important;
}

[v-cloak] {
  display: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
