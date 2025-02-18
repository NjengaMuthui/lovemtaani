<template>
  <div>
    <TopContainer :image="EventsImage" alt="Events" title="Events" />
    <EventComp :image="Event" info="Upcoming event" title="events" />
  </div>
</template>

<script setup lang="ts">
import EventsImage from "~/assets/events.jpg";
import Event from "~/assets/event.jpg";
</script>

<style scoped></style>
