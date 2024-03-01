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
const { BASE_URL } = import.meta.env;
const runtimeConfig = useRuntimeConfig();
let { cdnURL } = runtimeConfig.app;
cdnURL = cdnURL || `http://127.0.0.1:3001/${BASE_URL}`;
const ogImageUrl = new URL(`/og-image.jpg`, cdnURL).href;

useServerSeoMeta({
  twitterCard: "summary_large_image",
  twitterImage: {
    url: ogImageUrl,
    alt: "garage | sistema b em nuxtjs",
  },
  twitterSite: cdnURL,
  ogUrl: cdnURL,
  ogImage: {
    url: ogImageUrl,
    type: "image/jpeg",
    alt: "garage | sistema em nuxtjs",
    height: 630,
    width: 1200,
  },
  robots: "index, follow",
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
