<script setup lang="ts"></script>

<template>
  <header class="v-menu">
    <slot name="default" />
    <VLogo />
  </header>
</template>

<style scoped lang="scss">
.v-menu {
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  gap: 1rem;
  height: 88px;
  box-shadow: $low-black-shadow;
  padding: 1rem 1.5rem;
  position: fixed;
  width: 100%;
  background: $white;
  z-index: 5;
  inset: 0;
}
</style>
