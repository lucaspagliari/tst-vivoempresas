<script setup lang="ts">
import { computed } from "vue";
import { defineAsyncComponent } from "vue";

const props = defineProps<{
  icon: string;
  color?: string;
}>();

const currentIcon = computed(() =>
  defineAsyncComponent(
    () => import(`../assets/svg/${props.icon}.svg?component`)
  )
);
</script>
<template>
  <span class="v-icon">
    <component :is="currentIcon"  />
  </span>
</template>

<style scoped>
.v-icon {
  stroke: v-bind(color);
}
</style>
