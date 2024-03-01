<template>
  <Button @click="irParaSistemaB" icon="pi pi-compass" label="Sistema B" />
</template>

<script setup lang="ts">
import Button from "primevue/button"

function irParaSistemaB() {
  window.location.href = "/b/";
}
</script>
