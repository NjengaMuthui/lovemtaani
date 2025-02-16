<template>
  <div class="shop">
    <div class="image-container">
      <img :src="props.image" :alt="alt" />
    </div>
    <div class="details">
      <h3>{{ props.name }}</h3>
      <p>{{ formatedPrice }}</p>
      <div class="btn btn-nm">
        <div class="hover"></div>
        <span>Buy</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
import { formatNumberWithCommas } from "~/scripts/helper";
const alt = computed(() => props.name + " Image");
const formatedPrice = computed(() => {
  return "KSHS " + formatNumberWithCommas(props.price);
});
</script>

<style scoped>
.shop {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0;
}
.image-container img {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
