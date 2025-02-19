<template>
  <div class="about-page">
    <TopContainer
      :image="AboutUsHome"
      alt="About Us"
      title="About Us"
      class="mv-image"
    />
    <InfoDual :image="AboutA" :info="about" title="About Us" />
    <InfoDual
      :image="AboutB"
      :info="story"
      title="Our Story"
      :isReversed="true"
    />
    <InfoDual :image="AboutC" :info="mission" title="Our Mission" />
    <InfoDual
      :image="AboutD"
      :info="whoWeAre"
      title="Who we Are"
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
import AboutC from "~/assets/about_c.jpg";
import AboutD from "~/assets/about_d.jpg";
import Rooney from "~/assets/rooney.jpg";
const about = ref(
  "Love Mtaani charity foundation is a local non-profit, non-governmental and non-sectarian " +
    "organization based in Ruiru Kenya. Driven by the desire to change lives of the less privileged in " +
    "the community e.g. needy children, street families, women empowerment, education, health and " +
    "lively hood and we aim to create a world where everyone feels cherished and loved.. "
);
const story = ref(
  "Love Mtaani was born out of a deep-seated desire to nurture and uplift our community. Established " +
    "in 2018 and formally registered in 2023 as a community-based organization (CBO), we are proudly " +
    "rooted in Ruiru, Kiambu County. Despite our base, our reach extends far and wide, touching the lives " +
    "of marginalized communities across various counties in Kenya, including Kiambu, Nakuru, Nairobi, " +
    "Machakos, Murang’a, Kirinyaga, and Embu."
);
const mission = ref(
  "The heart of Love Mtaani beats with the collective compassion of local youths who came " +
    "together with a shared vision: to ensure every person enjoys a decent and dignified life. Our " +
    "mission is simple yet profound – to touch lives, bring about positive change, and empower the " +
    "next generation. " +
    "Love Mtaani’s charitable endeavors are fueled by the goodwill, grace, and love of our members. " +
    "Through their generous financial contributions and in-kind donations, we are able to extend a " +
    "helping hand and foster a caring, supportive community. Together, we are making a tangible " +
    "difference, one life at a time."
);
const whoWeAre = ref(
  "We do plan seasonal events to visit and feed vulnerable and orphaned kids, Street families, " +
    "women and widows in our society. We have been able to make a greater impact in fighting " +
    "childhood/ society starvation/ financial aid for the school fees and provide much needed " +
    "nourishment and support to those children and families in critical need. More so, the foundation " +
    "empowers them through relevant education, innovative health care and market focused " +
    "livelihood programs. The foundation aims to deploy best possible methodology and technology " +
    "for achieving ideal (S.R.O.I) Social Return on Investment to practice and promote the good " +
    "governance."
);
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
