<template>
  <div class="about-page">
    <TopContainer
      :image="AboutUsHome"
      alt="About Us"
      title="About Us"
      class="mv-image"
    />
    <InfoDual :image="AboutA" :info="lorem" title="Who We Are" />
    <InfoDual
      :image="AboutB"
      :info="lorem"
      title="Our Story"
      :isReversed="true"
    />
    <InfoDual :image="AboutA" :info="lorem" title="Who We Are" />
    <InfoDual
      :image="AboutB"
      :info="lorem"
      title="Our Story"
      :isReversed="true"
    />

    <section class="hero">
      <img src="~/assets/change.jpg" alt="Charity" class="hero-image" />
      <div class="hero-overlay">
        <h2>Together, We Can Make a Change</h2>
      </div>
    </section>
    <div class="people">
      <h2>Meet Our Team</h2>
      <div class="people-cards">
        <Person name="John Doe" title="C.E.O" :image="Rooney" />
        <Person name="Arnolt Doe" title="C.O.O" :image="Rooney" />
        <Person name="James Doe" title="C.F.O" :image="Rooney" />
      </div>
      <div class="people-cards">
        <Person name="John Doe" title="Volunteer" :image="Rooney" />
        <Person name="Arnolt Doe" title="Volunteer" :image="Rooney" />
        <Person name="James Doe" title="Volunteer" :image="Rooney" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutUsHome from "~/assets/aboutus.jpg";
import AboutA from "~/assets/about_a.jpg";
import AboutB from "~/assets/about_b.jpg";
import Rooney from "~/assets/rooney.jpg";
import { getLorem } from "~/scripts/helper";

const lorem = ref(getLorem());
</script>

<style>
.mv-image {
  margin-bottom: 40px;
}
.about-page {
  text-align: center;
}

.header {
  padding: 20px;
}

.hero {
  position: relative;
  width: 100%;
  height: 550px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2.5rem;
}

.mission {
  padding: 20px;
}

.mission-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: white;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  border-radius: 5px;
}

.card img {
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.cta {
  background: #007bff;
  color: white;
  padding: 20px;
}

.donate-button {
  background: #ffcc00;
  color: #333;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}
.donate-button:hover {
  background: #ffdb4d;
}
.people {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  width: 90%;
}
@media (min-width: 768px) {
  .people-cards {
    display: flex;
    width: 90%;
    margin: 5% auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
