<template>
  <section>
    <p>
      <GBotaoSistemaA />
    </p>
    <GBotaoSistemaB />
    <p>
      <NuxtLink to="/outra/">outra tela</NuxtLink>
    </p>
    <pre>{{ usuario }}</pre>
    <pre>{{ usuarioAdmin }}</pre>
  </section>
</template>

<script setup lang="ts">
import { GBotaoSistemaA, GBotaoSistemaB } from "@garage/ui";
import {
  CriarNovoUsuarioAdministrador,
  CriarNovoUsuarioNormal,
} from "@garage/core";

const usuario = CriarNovoUsuarioNormal(
  "Fulano de Tal normal",
  "fulano.normal@garage.com.br"
);
const usuarioAdmin = CriarNovoUsuarioAdministrador(
  "Ciclano de Tal administrador",
  "ciclano.admin@garage.dev.br"
);
</script>
