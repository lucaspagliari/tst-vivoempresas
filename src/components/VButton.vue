<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  textColor?: string;
  color?: string;
}>();

const buttonStyle = computed(() => ({
  color: `var(--color-${props.textColor})`,
  backgroundColor: `var(--color-${props.color})`,
}));
</script>

<template>
  <button class="v-button" :style="buttonStyle">
    <slot name="default"></slot>
  </button>
</template>

<style scoped lang="scss">

.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  padding: 8px;
  border: none;
  border-radius: $border-radius-1;
  font-family: $font-family;
  cursor: pointer;
  opacity: 1;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 0.85;
  }
}
</style>
