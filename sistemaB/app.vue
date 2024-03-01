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

const { BASE_URL } = import.meta.env;
const runtimeConfig = useRuntimeConfig();
let { cdnURL } = runtimeConfig.app;
cdnURL = cdnURL || `http://127.0.0.1:3002/${BASE_URL}`;
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
