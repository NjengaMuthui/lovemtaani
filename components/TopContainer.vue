<template>
  <div class="top-container">
    <img :src="props.image" :alt="props.alt" />
    <div class="center-container">{{ props.title }}</div>
    <div class="overlay-container"></div>
    <div class="bottom-container">
      <NuxtLink href="/" class="bottom-link">LoveMtaani</NuxtLink>
      <IconsChevRight class="current-page" />
      <div class="current-page">{{ props.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.top-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  clip-path: ellipse(120% 100% at 50% 0%);
}
.top-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-text-inverse);
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 2;
}
.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #161c2d66 0,
    #161c2d99 25%,
    #161c2dcc 50%,
    #161c2d
  );
  z-index: 1;
}
.bottom-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 2;
}
.current-page {
  color: var(--color-primary-light);
}
@media (min-width: 768px) {
  .top-container {
    clip-path: ellipse(100% 100% at 50% 0%);
  }
}
</style>
