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
  title: "VISION",
  content:
    "Promoting and advancing the lives of disadvantaged and vulnerable children through" +
    "empowering lives and transforming communities with a holistic approach to education, spiritual" +
    "growth, economic and social development."
});
const vision = ref({
  title: "MISSION",
  content:
    "Giving hope and support to vulnerable children especially orphaned children via sponsorship" +
    "program me to have access to school fees, school requirements and other essential needs like" +
    "food, shelter, clothing and medical care for homeless children."
});
const values = ref({
  title: "VALUES",
  content:
    "Integrity, humility, equality, loyalty, passion, Touching lives and we are partners in giving hope," +
    "love and kindness." +
    "The foundation has a dream of being able to provide vocational training skills to vulnerable" +
    "teenage mothers, street families, widows and women in general. We aim to start a micro finance" +
    "program to help empower them financially and assisting elderly people and orphaned kids with" +
    "sufficient food and door-to-door medical assistance."
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
