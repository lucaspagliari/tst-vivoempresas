<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size: number;
  }>(),
  {
    size: 1,
  }
);

const heightMultiplier = 8;
const style = computed(() => ({
  height: `${props.size * heightMultiplier}px`,
}));
</script>

<template>
  <div class="v-spacer" :style="style"></div>
</template>

<style scoped>
.v-spacer {
  width: 100%;
}
</style>
