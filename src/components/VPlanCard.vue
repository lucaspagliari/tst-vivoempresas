<script setup lang="ts">
const p = defineProps<{
  title?: string;
  subtitle?: string;
  icon?: string;
  badge?: string;
}>();
</script>

<template>
  <div class="v-plan-card" data-testid="v-plan-card">
    <div class="v-plan-card__features">
      <div v-if="badge" class="v-plan-card__badge">{{ badge }}</div>

      <div>
        <v-icon v-if="icon" :icon="icon"></v-icon>
      </div>
      <div>
        <h1 class="v-plan-card__title">{{ title }}</h1>
        <p class="v-plan-card__subtitle">{{ subtitle }}</p>
      </div>
    </div>

    <div class="v-plan-card__content">
      <slot name="content" />
    </div>

    <div class="v-plan-card__action">
      <slot name="action" />
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
      text-transform: uppercase;
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
    padding: 5px 0;
  }
}
</style>
