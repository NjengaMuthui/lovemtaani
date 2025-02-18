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
        Love Mtaani charity foundation is a local non-profit, non-governmental
        and non-sectarian organization based in Ruiru Kenya. Driven by the
        desire to change lives of the less privileged in the community e.g.
        needy children, street families, women empowerment, education, health
        and lively hood and we aim to create a world where everyone feels
        cherished and loved.
      </p>
      <p>
        Love Mtaani was born out of a deep-seated desire to nurture and uplift
        our community. Established in 2018 and formally registered in 2023 as a
        community-based organization (CBO), we are proudly rooted in Ruiru,
        Kiambu County. Despite our base, our reach extends far and wide,
        touching the lives of marginalized communities across various counties
        in Kenya, including Kiambu, Nakuru, Nairobi, Machakos, Murang’a,
        Kirinyaga, and Embu.
      </p>

      <a href="/aboutus" class="btn btn-nm">
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
