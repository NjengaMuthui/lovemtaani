<template>
  <section class="about-us-home">
    <div class="image-container">
      <div class="image-inner">
        <img src="~/assets/abouthome.jpg" alt="About Us" />
        <div class="side-badge">
          <h1>100M</h1>
          <h4>People Facing Food Insecurity</h4>
        </div>
      </div>
    </div>
    <div class="details-container">
      <h2 class="red-line">About Us</h2>
      <p>
        Love Mtaani is a non-profit organization that is dedicated to
        transforming the lives of the less fortunate in the society. We are
        committed to providing food, shelter, and education to the less
        fortunate in the society. We believe that everyone deserves a chance to
        live a better life and that is why we are here to help. We are dedicated
        to providing the best services to the less fortunate in the society. We
        believe that everyone deserves a chance to live a better life and that
        is why we are here to help.
      </p>
      <a href="#" class="btn btn-nm">
        <div class="hover"></div>
        <span>Learn More</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-us-home {
  width: 100%;
  background-color: #f5f5f5;
  padding: 2rem 0;
}
.image-container {
  width: 100%;
}
.image-inner {
  width: 95%;
  margin: 0 auto;
  position: relative;
}
.image-inner img {
  width: 70%;
  height: auto;
  margin: 0 20% 0 10%;
}
.side-badge {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  transform: translateX(-30%);
  background-color: var(--color-primary-light);
  color: var(--color-text-inverse);
  padding: 1rem;
  text-align: center;
  width: 120px;
}
.side-badge h1 {
  font-size: 2rem;
  margin: 10px 0;
}
.side-badge h4 {
  margin: 0 0 15px 0;
}
.details-container {
  width: 95%;
  margin: 30px auto;
}
.details-container h2 {
  font-size: 2rem;
  margin: 0 0 20px 20px;
  position: relative;
  width: fit-content;
}
.details-container p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 16px;
}
@media (min-width: 768px) {
  .about-us-home {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
