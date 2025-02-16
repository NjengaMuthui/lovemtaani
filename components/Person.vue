<template>
  <article class="person">
    <img :src="props.image" :alt="name" />
    <div class="person-info">
      <h4>{{ props.name }}</h4>
      <p>{{ props.title }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.person {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.person img {
  width: 100px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
}
.person-info {
  margin-left: 1rem;
}
</style>
