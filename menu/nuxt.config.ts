// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-primevue"],
  primevue: {
    cssLayerOrder: "reset,primevue",
    components: {
      include: [],
    },
  },
  css: [
    "primeicons/primeicons.css",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    baseURL: "/menu/",
    head: {
      htmlAttrs: { lang: "pt-br" },
      title: "SISTEMA",
      meta: [
        { name: "description", content: "Sistema em Nuxtjs" },
        { name: "theme-color", content: "#059669" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: process.env.NUXT_APP_CDN_URL },
        { property: "og:title", content: "SISTEMA" },
        { property: "og:description", content: "Sistema em Nuxtjs" },
        { property: "twitter:url", content: process.env.NUXT_APP_CDN_URL },
        { property: "twitter:title", content: "SISTEMA" },
        { property: "twitter:description", content: "Sistema em Nuxtjs" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
