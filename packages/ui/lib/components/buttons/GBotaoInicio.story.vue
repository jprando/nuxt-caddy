<template>
  <Story>
    <GBotaoInicio @click.stop="logEvent('click', {mensagem:'usuario clicou no botao'})"/>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'
import GBotaoInicio from "./GBotaoInicio.vue";
</script>
