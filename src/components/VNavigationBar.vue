<script setup lang="ts">
const emits = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
}>();


export interface VNavigationBarItem {
  title: string
}

defineProps<{
  modelValue: boolean;
  items: VNavigationBarItem[]
}>();

function handleOverlayClick() {
  emits("update:modelValue", false);
}

</script>

<template>
  <nav class="navigation-bar" @click="handleOverlayClick">
    <Transition name="fade">
      <div v-if="modelValue" class="navigation-bar__overlay"></div>
    </Transition>

    <Transition name="slide" mode="in-out">
      <div
        v-if="modelValue"
        class="navigation-bar__drawer"
        @click.stop=""
      >
        <div v-for="item in items" :key="item.title" class="navigation-bar__item">
          <a>
            {{ item.title }}
          </a>
          <hr class="navigation-bar__line" />
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped lang="scss">
.navigation-bar {
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.3s linear;
    inset: 0;
    z-index: 3;
  }

  &__drawer {
    position: absolute;
    left: 0;
    top: 0;
    width: 420px;
    max-width: 100%;
    height: 100vh;
    padding-top: calc(90px + 40px);
    color: $black;
    background-color: $white;
    z-index: 5;
  }

  &__item {
    width: 100%;
    padding: 30px 30px 15px 30px;
    transition: $transition;
    cursor: pointer;
    font-size: $font-size-default;

    &:hover {
      background: $gray-light;
      color: $purple;
    }
  }

  &__line {
    margin: 1px 0;
    border-top: 1px solid rgba($purple, 0.5);
  }
}
</style>
