<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/stylesheets/swiper.scss";
import { computed, ref } from "vue";

export interface VCarouselItem {
  icon: string;
  title: string;
}

const props = defineProps<{
  techs?: VCarouselItem[];
}>();

const activeIndex = ref(0);
function handleSlideChange(v: any) {
  activeIndex.value = v.activeIndex;
}

function isActive(index: number) {
  return activeIndex.value === index;
}

const items = computed(() =>
  props.techs?.map((tech, index) => ({
    ...tech,
    title: isActive(index) ? tech.title : "",
  }))
);
</script>

<template>
  <swiper
    ref="swiperRef"
    :slides-per-view="3"
    auto-height
    centered-slides
    @activeIndexChange="handleSlideChange"
    navigation
    :modules="[Navigation]"
    setWrapperSize
  >
    <swiper-slide v-for="({ title, icon }, index) in items">
      <v-tech-card
        :class="{
          slide: true,
          'slide-active': isActive(index),
        }"
        :title="title"
        :icon="icon"
      >
      </v-tech-card>
    </swiper-slide>
  </swiper>
</template>
<style scoped lang="scss">
.swiper {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  text-align: center;
}
.swiper-slide {
  display: flex;
  justify-content: center;
}
.slide {
  color: $white;
  background-color: $purple;
  opacity: 0.33;
  transform: scale(0.5);
  transition: all 400ms ease-out;

  &-active {
    opacity: 1 !important;
    transform: scaleZ(1);
  }
}
</style>
