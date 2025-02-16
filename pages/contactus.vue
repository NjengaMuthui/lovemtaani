<template>
  <div>
    <TopContainer :image="ContactUsImage" alt="Contact Us" title="Contact Us" />
    <div class="flex-page">
      <div class="contact-page">
        <img :src="ContactPage" alt="Contact Page" />
      </div>
      <div class="contact-form">
        <h1>Send Us a Message</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="contact-info">
          <WavyLabelInput
            Type="text"
            v-model="name"
            Label="Name"
            :Required="true"
            errorMessage="Please provide your name"
            :validator="validateName"
          />
          <WavyLabelInput
            Type="text"
            v-model="email"
            Label="Email"
            :Required="true"
            errorMessage="Please provide a valid email address"
            :validator="validateEmail"
          />
          <WavyLabelInput v-model="subject" Label="Subject" :Required="true" />
          <textarea placeholder="Message"></textarea>
          <button class="btn" @click="sendMessage">Send Message</button>
        </div>
      </div>
    </div>
    <div class="contact-card-container">
      <div class="contact-card">
        <IconsPhone class="icon" />
        <h2>Phone</h2>
        <p>1234 Street Name, City Name, Country Name</p>
        <p class="highlight">Phone: +254-700-111-111</p>
      </div>
      <div class="contact-card">
        <IconsMail class="icon" />
        <h2>EMail</h2>
        <p>1234 Street Name, City Name, Country Name</p>
        <p class="highlight">Mail: lovemtaani@gmail.com</p>
      </div>
      <div class="contact-card">
        <IconsLocation class="icon" />
        <h2>Location</h2>
        <p>1234 Street Name, City Name, Country Name</p>
        <p class="highlight">Location: Ruiru</p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127648.30582652555!2d37.0132762!3d-1.1536634000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1739610876162!5m2!1sen!2ske"
      class="map"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import ContactUsImage from "~/assets/contactus.jpg";
import ContactPage from "~/assets/contactpage.png";
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

function sendMessage() {
  console.log(name.value, email.value, subject.value, message.value);
}
function validateName(value: string): boolean {
  return value.length > 2;
}
function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
</script>

<style scoped>
.contact-form,
.contact-page {
  padding: 20px;
  flex: 1;
}
.contact-form h1 {
  font-size: 1.5rem;
  margin-bottom: 30px;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
}
.contact-card-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
}
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
}
.icon {
  font-size: 80px;
}
.highlight,
.icon {
  color: var(--color-primary-light);
}
.map {
  width: 100%;
  height: 400px;
  border: 0;
}
@media (min-width: 768px) {
  .contact-form {
    padding: 20px 0;
  }
  .contact-page {
    padding: 20px;
  }
  .contact-card-container {
    flex-direction: row;
    width: 95%;
    margin: 40px auto;
  }
}
</style>
