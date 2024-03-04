<script setup lang="ts">
const techs = [
  {
    title: "simCard",
    icon: "sim_card",
  },
  {
    title: "Esim",
    icon: "chip",
  },
  {
    title: "Tecnologia",
    icon: "5g",
  },
];
</script>

<template>
  <div class="home">
    <VSpacer :size="8" />

    <h1>Tecnologias</h1>

    <div class="home__technologies">
      <VTechCarousel :techs="techs" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  &__technologies {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
}
</style>
