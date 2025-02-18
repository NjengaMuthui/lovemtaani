<template>
  <div class="card">
    <div class="card-image">
      <img :src="props.cause.image" alt="Cause Image" />
    </div>
    <div class="card-content">
      <h3>{{ props.cause.title }}</h3>
      <p>{{ props.cause.description }}</p>
      <a href="/donate" class="btn btn-nm">
        <div class="hover"></div>
        <span>Donate</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cause } from "~/scripts/interfaces";
const props = defineProps({
  cause: {
    type: Object as PropType<Cause>,
    required: true
  }
});
</script>

<style scoped>
.card {
  width: 95%;
  margin: 10px auto;
  background-color: var(--color-background-alt);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-image {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
}
.card-image img {
  width: 100%;
  object-fit: cover;
}
.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}
@media (min-width: 768px) {
  .card {
    border: 1px solid var(--color-border);
    border-radius: 15px 15px 0 0;
  }
}
</style>
