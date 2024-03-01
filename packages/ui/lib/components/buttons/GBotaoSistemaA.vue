<template>
  <Button @click="irParaSistemaA" icon="pi pi-wallet" label="Sistema A" />
</template>

<script setup lang="ts">
import Button from "primevue/button"

function irParaSistemaA() {
  window.location.href = "/a/";
}
</script>
