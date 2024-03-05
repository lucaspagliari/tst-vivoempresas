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
  <div class="company">
    <VSpacer :size="6" />

    <h1 class="company__title">Tecnologias</h1>
    <div class="company__technologies">
      <VTechCarousel :techs="techs" />
    </div>

    <h1 class="company__title">Descobrir</h1>
    <div class="company__plans">
      <v-plan-card></v-plan-card>
      <v-plan-card></v-plan-card>
      <v-plan-card></v-plan-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company {
  &__technologies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    margin: 0 15%;
  }

  &__plans {
    display: grid;
    align-items: center;
    justify-content: center;

    grid-template-columns: repeat(3, auto);
    gap: 18px;
  }
}
</style>
