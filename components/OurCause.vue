<template>
  <section class="our-cause">
    <div class="top">
      <div class="red-line mt">Our Causes</div>
      <p class="intro">
        Love Mtaani is a non profit organisation that strives to eliminate
        hunger by implementing the Mid Day Meal Programme
      </p>
    </div>

    <div class="causes">
      <CausesCard v-for="cause in Causes" :key="cause.title" :cause="cause" />
    </div>
  </section>
</template>

<script setup lang="ts">
import clean from "~/assets/clean.jpg";
import feed from "~/assets/feed.jpg";
import helptomothers from "~/assets/helptomothers.jpg";
const Causes = ref([
  {
    title: "Mid Day Meal Programme",
    description:
      "The Mid Day Meal Programme is a school meal programme in India designed to improve the nutritional status of school-age children nationwide.",
    image: feed
  },
  {
    title: "Clean Water for Schools",
    description:
      "Food for Education is a non-profit organization that provides free school meals to children in Kenya.",
    image: clean
  },
  {
    title: "Help to Mothers",
    description:
      "Food for Education is a non-profit organization that provides free school meals to children in Kenya.",
    image: helptomothers
  }
]);
</script>

<style scoped>
.mt {
  font-size: 40px;
  font-weight: 700;
  position: relative;
}
.our-cause {
  width: 100%;
}
.top {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 30px 20px;
}
@media (min-width: 768px) {
  .top {
    margin: 30px 50px;
  }
  .causes {
    display: flex;
    gap: 20px;
    margin: 30px 50px;
  }
}
</style>
