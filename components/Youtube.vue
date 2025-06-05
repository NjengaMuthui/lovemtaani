<template>
  <div class="wrapper">
    <div class="video-container">
      <iframe
        v-if="videoId"
        :src="`https://www.youtube.com/embed/${videoId}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p v-else class="error-text">Invalid YouTube URL</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  url: string;
}

const props = defineProps<Props>();

// Extract the video ID from the YouTube URL
const videoId = computed(() => {
  try {
    const url = new URL(props.url);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1);
    }

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
});
</script>

<style scoped>
.wrapper {
  max-width: 800px;
  margin: 20px auto;
  width: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  background-color: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.error-text {
  color: red;
  padding: 1rem;
}
</style>
