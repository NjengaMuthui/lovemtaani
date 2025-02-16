<template>
  <div>
    <TopContainer :image="ProgramsImage" alt="Programs" title="Programs" />
    <InfoDual :image="feed2" :info="lorem" title="Lisha Jamii Program" />
    <InfoDual
      :image="feed2"
      :info="lorem"
      title="Lisha Jamii Program"
      :is-reversed="true"
    />
    <InfoDual :image="feed2" :info="lorem" title="Lisha Jamii Program" />
    <InfoDual
      :image="feed2"
      :info="lorem"
      title="Lisha Jamii Program"
      :is-reversed="true"
    />
  </div>
</template>

<script setup lang="ts">
import ProgramsImage from "~/assets/programs.jpg";
import feed2 from "~/assets/feed2.jpg";
import { getLorem } from "~/scripts/helper";

const lorem = ref(getLorem());
</script>

<style scoped></style>
