<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

const navBar = ref(false);

const items = [{ title: "Meu Vivo empresas" }, { title: "Meu Vivo" }];
</script>

<template>
  <div id="vivo-empresas">
    <VNavigationBar v-model="navBar" :items="items" />

    <v-menu>
      <v-button @click="() => (navBar = !navBar)" data-testid="v-button-menu">
        <v-icon :icon="!navBar ? 'menu' : 'close'"></v-icon>
      </v-button>
    </v-menu>

    <RouterView class="main-content" />
  </div>
</template>

<style lang="scss">
#vivo-empresas {
  font-family: "Poppins";
  width: 100%;
  height: 100vh;

  .main-content {
    padding: 90px 0 20px 0;
    height: 100vh;
    overflow: auto;
  }
}
</style>
