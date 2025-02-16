<template>
  <section class="info-dual" :class="{ info_reverse: props.isReversed }">
    <div class="image-side">
      <img :src="props.image" :alt="props.title" />
    </div>
    <div class="info-side">
      <IconsQuotes class="info-quotes" />
      <article class="info">
        <div class="info-title">{{ props.title }}</div>
        <p class="info-p">{{ props.info }}</p>
        <IconsQuotes class="end" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isReversed: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.info-dual {
  display: flex;
  flex-direction: column;
  margin: 50px 0;
}
.image-side {
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
.image-side img {
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
}
.info-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  position: relative;
}
.info-quotes {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.1;
  font-size: 100px;
}
.end {
  position: absolute;
  transform: rotate(180deg);
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.1;
  font-size: 100px;
}
.info-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px 0;
}
.info-p {
  font-size: 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .info-dual {
    flex-direction: row;
    gap: 2rem;
  }
  .image-side {
    width: 50%;
  }
  .info-side {
    width: 50%;
  }
  .info_reverse {
    flex-direction: row-reverse;
  }
}
</style>
