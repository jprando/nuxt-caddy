<template>
  <header>
    <h1>Sistema A</h1>
  </header>
  <Transition>
    <main v-cloak>
      <NuxtLoadingIndicator />
      <div>
        <p>
          <GBotaoSistemaB class="p-button-warning" />
        </p>
        <GBotaoInicio :inicioUrl="$config.public.inicioUrl" />
        <pre>{{ usuario }}</pre>
      </div>
    </main>
  </Transition>
</template>

<script setup lang="ts">
import { GBotaoInicio, GBotaoSistemaB } from "@garage/ui";
import { CriarNovoUsuarioNormal } from "@garage/core";

const usuario = CriarNovoUsuarioNormal(
  "Usuario Normal Teste 123",
  "teste.normal@garage.com.br"
);

const runtimeConfig = useRuntimeConfig();
const { baseURL, cdnURL } = runtimeConfig.app;
useServerSeoMeta({
  twitterCard: "summary_large_image",
  twitterImage:{
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    alt: "garage | sistema a em nuxtjs",
  },
  twitterSite: cdnURL,
  ogUrl: cdnURL,
  ogImage: {
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    type: "image/jpeg",
    alt: "garage | sistema a em nuxtjs",
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
</style>
