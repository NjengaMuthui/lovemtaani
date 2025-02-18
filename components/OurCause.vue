<template>
  <section class="our-cause">
    <div class="top">
      <div class="red-line mt">Our Causes</div>
      <p class="intro">
        Love Mtaani is a non-profit organization that involves itself in various
        causes to help the less privileged in the community. We aim to create a
        world where everyone feels cherished and loved.
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
    title: "LISHA JAMII INITIATIVE",
    description:
      "We visit and carry out food distribution to marginalized communities remotely located allover Kenya. Its food drive initiative program for the community is a coordinated effort to collect and distribute food donations to those in need within the community",
    image: feed
  },
  {
    title: "GIRLS AND BOYS EMPOWERMENT",
    description:
      "Girls and boys empowerment refers to the process of building confidence, self – esteem and agency in young boys and girls regardless of their gender it involves.",
    image: helptomothers
  },
  {
    title: "PAD FOR GIRLS (SANITARY TOWELS)",
    description:
      "Research was carried out and it showed increased. School dropouts among girls in rural areas due to lack proper of sanitary/ lack of menstrual products.",
    image: clean
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
