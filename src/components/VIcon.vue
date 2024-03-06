<script setup lang="ts">
import { watch, shallowRef } from "vue";

const props = defineProps<{
  icon: string;
}>();

const loadedIcon = shallowRef();
watch(
  () => props.icon,
  async () => {
    try {
      const icon = await import(`@/assets/svg/${props.icon}.svg`);
      loadedIcon.value = icon.default;
    } catch (error) {
      console.warn(`icon ${props.icon} not found`);
    }
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <Transition name="fade" mode="out-in">
    <component :is="loadedIcon" />
  </Transition>
</template>

<style scoped lang="scss">
.v-icon {
  width: fit-content;
  height: min-content;
}
</style>
