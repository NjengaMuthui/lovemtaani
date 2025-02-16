<template>
  <section class="slider" ref="slider">
    <div class="blury"></div>
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div class="slider-item" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>
    <div class="section-inner">
      <h4>A Helping Hand For A Hoping heart</h4>
      <h2>LOVE MTAANI</h2>
      <a href="#" class="btn">
        <div class="hover"></div>
        <span>Donate</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import slide from "~/assets/slide.jpg";
import slide2 from "~/assets/slide2.jpg";
import slide3 from "~/assets/slide3.jpg";
import slide4 from "~/assets/slide4.jpg";
import slide5 from "~/assets/slide5.jpg";
import slide6 from "~/assets/slide6.jpg";
import { ref, onMounted, onUnmounted } from "vue";
const currentSlide = ref(0);
let slideInterval: NodeJS.Timeout | undefined = undefined;
const images = ref([slide, slide2, slide3, slide4, slide5, slide6]);
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 8000);
};
const stopAutoSlide = () => {
  clearInterval(slideInterval);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slider-item {
  flex: 0 0 100%;
  height: 100%;
}

.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blury {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #161c2d66 0,
    #161c2d99 25%,
    #161c2dcc 50%,
    #161c2d
  );
}
</style>
