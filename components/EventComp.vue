<template>
  <div class="event">
    <img :src="props.image" :alt="alt" />
  </div>
  <div class="event-details">
    <h1>{{ props.title }}</h1>
    <p>{{ props.info }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  }
});
const alt = computed(() => props.title + " Image");
</script>

<style scoped>
.event {
  width: 95%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
}
.event img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.event-details {
  text-align: center;
  margin-bottom: 50px;
}
</style>
