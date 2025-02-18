<template>
  <div class="slider-container">
    <div class="slider">
      <div
        class="slide"
        v-for="(image, index) in images"
        :key="index"
        :class="{
          active: index === currentIndex,
          left: index === prevIndex,
          right: index === nextIndex
        }"
        @click="goToSlide(index)"
      >
        <img :src="image" alt="Gallery Image" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button class="nav-button left" @click="prevSlide">
      <IconsChevLeft />
    </button>
    <button class="nav-button right" @click="nextSlide">
      <IconsChevRight />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import slide from "~/assets/slide.jpg";
import slide2 from "~/assets/slide2.jpg";
import slide3 from "~/assets/slide3.jpg";
import slide4 from "~/assets/slide4.jpg";
import slide5 from "~/assets/slide5.jpg";

const images = ref([slide, slide2, slide3, slide4, slide5]);

const currentIndex = ref(0);

const prevIndex = computed(
  () => (currentIndex.value - 1 + images.value.length) % images.value.length
);
const nextIndex = computed(
  () => (currentIndex.value + 1) % images.value.length
);

function goToSlide(index: number) {
  currentIndex.value = index;
}

function prevSlide(): void {
  currentIndex.value = prevIndex.value;
}

function nextSlide(): void {
  currentIndex.value = nextIndex.value;
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.slide {
  position: absolute;
  width: 50%;
  opacity: 0.5;
  transition: transform 0.5s ease, opacity 0.5s ease;
  z-index: 1;
}

.slide.active {
  width: 70%;
  opacity: 1;
  transform: scale(1.1);
  z-index: 2;
}

.slide.left {
  transform: translateX(-60%) scale(0.9);
}
.slide.right {
  transform: translateX(60%) scale(0.9);
}

.slide img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 100px;
  border: none;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.nav-button svg {
  width: 100%;
  height: 100%;
  fill: black;
}

.nav-button.left {
  left: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
}

.nav-button.right {
  right: 0;
}

.slider-container:hover .nav-button {
  opacity: 1;
}

@media (max-width: 768px) {
  .nav-button {
    opacity: 1;
  }
}
</style>
