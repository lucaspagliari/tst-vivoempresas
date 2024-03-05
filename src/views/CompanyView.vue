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

    <div class="title">
      <h1>Tecnologias</h1>
    </div>

    <div class="home__technologies">
      <VTechCarousel :techs="techs" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  &__technologies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .title {
    margin: 0 15%;
  }
}
</style>
