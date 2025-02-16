<template>
  <div>
    <TopContainer :image="ShopImage" alt="Shop" title="Shop" />
    <div class="shop-items">
      <ShopItem name="Hoodie" :price="2000" :image="Shop1" />
      <ShopItem name="T-shirt" :price="3000" :image="Shop2" />
    </div>
    <div class="shop-items">
      <ShopItem name="Hat" :price="4000" :image="Shop3" />
      <ShopItem name="T-shirt v2" :price="5000" :image="Shop4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShopImage from "~/assets/shop.jpg";
import Shop1 from "~/assets/shop1.jpg";
import Shop2 from "~/assets/shop2.jpg";
import Shop3 from "~/assets/shop3.jpg";
import Shop4 from "~/assets/shop4.jpg";
</script>

<style scoped>
.shop-items {
  display: flex;
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  flex-direction: column;
}
@media (min-width: 768px) {
  .shop-items {
    flex-direction: row;
  }
}
</style>
