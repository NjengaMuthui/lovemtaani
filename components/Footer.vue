<template>
  <footer class="footer">
    <div class="ending-statement">
      <p>The Foundation Has A dream</p>
      <p># A helping hand for a hoping heart</p>
      <p># Giving is caring</p>
      <p>
        # Alone we can so little Together we can do so much be the difference
      </p>
    </div>
    <div class="social-media">
      <a
        :key="socialMediaLinks[0].name"
        :href="socialMediaLinks[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <IconsFacebook class="social-icon" />
      </a>
      <a
        :key="socialMediaLinks[0].name"
        :href="socialMediaLinks[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <IconsX class="social-icon" />
      </a>
      <a
        :key="socialMediaLinks[0].name"
        :href="socialMediaLinks[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <IconsInstagram class="social-icon" />
      </a>
      <a
        :key="socialMediaLinks[0].name"
        :href="socialMediaLinks[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <IconsTiktok class="social-icon" />
      </a>
    </div>
    <div class="ending-title">
      <p>{{ endingTitle }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconsFacebook, IconsX } from "#components";
import { ref } from "vue";

// Define social media links with icons
const socialMediaLinks = ref([
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png"
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  }
]);

// Define the ending title
const endingTitle = ref("© 2025 Love Mtaani. All rights reserved.");
</script>

<style scoped>
.ending-statement {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ecf0f1;
  text-align: center;
  gap: 15px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.social-media {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.social-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
}

.social-icon {
  width: 30px;
  height: 30px;
}

.ending-title {
  font-size: 14px;
  margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-media {
    flex-wrap: wrap;
    justify-content: center;
  }

  .social-icon {
    width: 25px;
    height: 25px;
  }

  .ending-title {
    font-size: 12px;
  }
}
</style>
