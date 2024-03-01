<template>
  <header>
    <h1>Sistema B</h1>
  </header>
  <Transition>
    <main v-cloak>
      <NuxtLoadingIndicator />
      <div>
        <p>
          <GBotaoSistemaA class="p-button-danger" />
        </p>
        <GBotaoInicio :inicioUrl="$config.public.inicioUrl" />
        <pre>{{ usuario }}</pre>
      </div>
    </main>
  </Transition>
</template>

<script setup lang="ts">
import { GBotaoInicio, GBotaoSistemaA } from "@garage/ui";
import { CriarNovoUsuarioAdministrador } from "@garage/core";

const usuario = CriarNovoUsuarioAdministrador(
  "Usuario Administrador Teste 123",
  "teste.admin@garage.com.br"
);

const runtimeConfig = useRuntimeConfig();
const { baseURL, cdnURL } = runtimeConfig.app;
useServerSeoMeta({
  twitterCard: "summary_large_image",
  twitterImage: {
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    alt: "garage | sistema b em nuxtjs",
  },
  twitterSite: cdnURL,
  ogUrl: cdnURL,
  ogImage: {
    url: new URL(`${baseURL}og-image.jpg`, cdnURL).href,
    type: "image/jpeg",
    alt: "garage | sistema b em nuxtjs",
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
</style>
