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
  <div class="company-view">
    <VSpacer :size="6" />

    <div class="company-view__content">
      <h1 class="company-view__title">Tecnologias</h1>
      <div class="company-view__technologies">
        <VTechCarousel :techs="techs" />
      </div>
    </div>

    <VSpacer :size="5" />

    <div class="company-view__content">
      <h1 class="company-view__title">Descobrir</h1>
      <div class="company-view__plans">
        <v-plan-card v-for="plan in plans" v-bind="plan">
          <template #action>
            <v-button color="green" text-color="white">
              Consultar cobertura
            </v-button>
          </template>
        </v-plan-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company-view {
  $self: &;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;


    #{$self}__technologies {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #{$self}__title {
      margin: 0 15%;
    }

    #{$self}__plans {
      display: grid;
      align-items: center;
      justify-content: center;

      grid-template-columns: repeat(3, auto);
      gap: 18px;
    }
  }
}
</style>
