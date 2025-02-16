<template>
  <section class="mvv-home">
    <Mvv :title="mission.title" :content="mission.content">
      <IconsRocket class="accent mvv-icon"></IconsRocket>
    </Mvv>
    <Mvv :title="vision.title" :content="vision.content">
      <IconsBino class="green mvv-icon"></IconsBino>
    </Mvv>
    <Mvv :title="values.title" :content="values.content">
      <IconsDiamond class="blue mvv-icon"></IconsDiamond>
    </Mvv>
  </section>
</template>

<script setup lang="ts">
const mission = ref({
  title: "MISSION",
  content:
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow " +
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow."
});
const vision = ref({
  title: "VISION",
  content:
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow " +
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow."
});
const values = ref({
  title: "VALUES",
  content:
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow " +
    "Our mission is to provide a safe and loving " +
    "environment for children to learn and grow."
});
</script>

<style scoped>
.mvv-icon {
  font-size: 180px;
}
@media (min-width: 768px) {
  .mvv-home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 20px;
  }
}
</style>
