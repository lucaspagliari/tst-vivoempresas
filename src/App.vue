<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<template>
  <div id="vivo-empresas">
    <v-menu>
      <v-icon icon="menu"></v-icon>
    </v-menu>
    <RouterView  />
  </div>
</template>

<style lang="scss">
#vivo-empresas {
  font-family: "Poppins";
  width: 100%;
  min-height: 100vh;
  overflow: auto;
}
</style>
