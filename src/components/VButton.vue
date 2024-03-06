<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    textColor?: string;
    color?: string;
    dataTestid?: string;
  }>(),
  {
    dataTestid: "v-button",
  }
);

function getColor(name?: string): string | undefined {
  return name ? `var(--color-${name})` : undefined;
}

const buttonStyle = computed<Record<string, any>>(() => ({
  color: getColor(props.textColor),
  backgroundColor: getColor(props.color),
}));
</script>

<template>
  <button class="v-button" :style="buttonStyle" :data-testid="dataTestid">
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
  background-color: transparent;
  cursor: pointer;
  opacity: 1;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 0.85;
  }
}
</style>
