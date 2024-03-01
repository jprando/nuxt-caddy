<template>
  <Button
    icon="pi pi-home"
    label="Voltar"
    class="p-button-secondary"
    @click="irParaInicio"
  />
</template>

<script setup lang="ts">
import Button from "primevue/button";

const { inicioUrl } = defineProps<{ inicioUrl?: string }>();

function irParaInicio() {
  if (!inicioUrl) return;
  window.location.href = inicioUrl;
}
</script>
