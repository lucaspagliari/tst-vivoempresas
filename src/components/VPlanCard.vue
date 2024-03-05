<script setup lang="ts"></script>

<template>
  <div class="v-plan-card">
    <div class="v-plan-card__features">
      <div class="v-plan-card__badge">
        O MELHOR CUSTO BENEFÍCIO
      </div>

      <div>
        <v-icon icon="wifi"></v-icon>
      </div>
      <div>
        <h1 class="v-plan-card__title">200 Mega</h1>
        <p class="v-plan-card__subtitle">+Wi-fi e Modem grátis</p>
      </div>


    </div>
    
    <div class="v-plan-card__content">
    </div>

    <div class="v-plan-card__action">
      Consultar cobertura
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-plan-card {
  $self: &;
  
  position: relative;

  display: grid;
  grid-template-rows: 38% 40% 22%;
  box-shadow: $medium-black-shadow;
  border-radius: $border-radius-2;
  width: 216px;
  height: 187px;


  &__features {
    display: grid;
    padding: 10px 12px 5px 12px;
    grid-template-columns: 50px auto;
    justify-content: center;
    align-items: center;
    color: $purple;

    #{$self}__badge {
      width: 80%;
      max-width: 250px;
      height: 22px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 500;
      font-size: 0.625rem;
      color: $black;
      background-color: $purple-light;
      border-radius: $border-radius-1;
      text-wrap: nowrap;
    }

    #{$self}__title {
      font-weight: 500;
    }
    #{$self}__subtitle {
      font-size: 0.625rem;
    }
  }

  &__content {
    background-color: $gray-light;
  }
  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
