<template>
  <div class="mvv">
    <slot></slot>
    <div
      class="h-title"
      :class="{ accent: isAccent, green: isGreen, blue: isBlue }"
    >
      {{ props.title }}
    </div>
    <div class="content">{{ props.content }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const isAccent = computed(() => props.title === "MISSION");
const isGreen = computed(() => props.title === "VISION");
const isBlue = computed(() => props.title === "VALUES");
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.mvv {
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h-title {
  font-size: 2.5rem;
  margin: 20px 0 40px 0;
  font-weight: 700;
  color: var(--color-text);
  position: relative;
  width: fit-content;
}
.accent::after {
  content: ""; /* Creates the line */
  display: block; /* Makes it behave like a block element */
  width: 50%; /* Sets the width of the line to 50% of the parent */
  height: 5px; /* Adjust the thickness of the line */
  background-color: var(--color-accent); /* Color of the line */
  margin: 0 auto; /* Centers the line */
  position: absolute; /* Positions the line relative to the parent */
  bottom: -10px; /* Adjusts the distance below the text (negative value moves it further down) */
  left: 0;
  right: 0; /* Ensures the line stays centered */
}
.green::after {
  content: ""; /* Creates the line */
  display: block; /* Makes it behave like a block element */
  width: 50%; /* Sets the width of the line to 50% of the parent */
  height: 5px; /* Adjust the thickness of the line */
  background-color: var(--color-green); /* Color of the line */
  margin: 0 auto; /* Centers the line */
  position: absolute; /* Positions the line relative to the parent */
  bottom: -10px; /* Adjusts the distance below the text (negative value moves it further down) */
  left: 0;
  right: 0; /* Ensures the line stays centered */
}
.blue::after {
  content: ""; /* Creates the line */
  display: block; /* Makes it behave like a block element */
  width: 50%; /* Sets the width of the line to 50% of the parent */
  height: 5px; /* Adjust the thickness of the line */
  background-color: var(--color-blue); /* Color of the line */
  margin: 0 auto; /* Centers the line */
  position: absolute; /* Positions the line relative to the parent */
  bottom: -10px; /* Adjusts the distance below the text (negative value moves it further down) */
  left: 0;
  right: 0; /* Ensures the line stays centered */
}
.content {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 16px;
}
</style>
