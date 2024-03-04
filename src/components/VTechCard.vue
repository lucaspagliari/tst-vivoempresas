<script setup lang="ts">
export interface VTechCardItem {
  title: string;
  icon: string;
}

defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div class="v-tech-card">
    <div class="v-tech-card__title">
      {{ title }}
      <slot name="title"></slot>
    </div>
    <div class="v-tech-card__icon">
      <v-icon :icon="icon"></v-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-tech-card {
  display: grid;
  grid-template-rows: 1.5fr 2fr;
  gap: 30;
  width: 122px;
  height: 150px;

  box-shadow: $low-black-shadow;
  border-radius: $border-radius-3;
  background-color: $purple;
  color: $white;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
