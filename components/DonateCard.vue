<template>
  <div class="donate-page">
    <div class="head-donate">
      <slot></slot>
    </div>
    <div class="donate-body-card">
      <div
        class="pay-item"
        v-for="item in props.items"
        :key="item.accountNumber"
      >
        <div class="donate-name">{{ item.accountNumber }}</div>
        <div class="donate-number">{{ item.amount }}</div>
      </div>
      <div class="donate-logo-image">
        <img src="~/assets/love.png" alt="Love mtaani logo" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Payment } from "~/scripts/interfaces";
const props = defineProps({
  items: {
    type: Array as PropType<Payment[]>,
    required: true
  }
});
</script>
<style>
.donate-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-background-alt);
  width: 90%;
  margin: 40px auto;
}
.head-donate {
  width: 100%;
}
.head-donate img,
.head-donate svg {
  width: 100%;
  object-fit: cover;
}
.donate-logo-image {
  width: 80px;
  margin: 0 auto;
}
.donate-logo-image img {
  width: 100%;
  object-fit: cover;
}
.donate-body-card,
.pay-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.donate-body-card {
  gap: 1rem;
  margin-bottom: 30px;
}
.pay-item {
  margin: 30px 0;
}
.donate-name {
  font-size: 1.5rem;
  font-weight: 600;
}
.donate-number {
  font-size: 3rem;
  font-weight: 500;
}
</style>
