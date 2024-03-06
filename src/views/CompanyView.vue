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

const plans = [
  {
    title: "200 Mega",
    subtitle: "+Wi-fi e Modem grátis",
    icon: "wifi",
  },
  {
    title: "300 Mega",
    subtitle: "+Wi-fi e Modem grátis",
    badge: "O melhor custo benefício",
    icon: "wifi",
  },
  {
    title: "600 Mega",
    subtitle: "+Wi-fi e Modem grátis",
    badge: "Oferta especial",
    icon: "wifi",
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
      <v-plan-card v-for="plan in plans" v-bind="plan">
        <template #action>
          <v-button color="green" text-color="white">
            Consultar cobertura
          </v-button>
        </template>
      </v-plan-card>
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
