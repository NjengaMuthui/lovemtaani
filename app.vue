<script setup lang="ts">
const showMenu = ref(false);
const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 40;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="main-container">
    <div @click="showMenu = false"></div>
    <div
      id="mobile-menu"
      :class="{ show_menu: showMenu, hide_menu: !showMenu }"
      class="mobile-main-menu"
    >
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/programs">Our Programs</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="contactus">Contact Us</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </div>
    <header class="main-header" :class="{ white_bg: isScrolled }">
      <div class="logo">
        <a href="#">
          <img src="~/assets/love.png" alt="Love Mtaani Logo" />
        </a>
      </div>
      <nav class="desktop-main-menu" :class="{ overlay_show: showMenu }">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/programs">Our Programs</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hamburger Menu -->
    <button
      @click="showMenu = !showMenu"
      :class="{ open: showMenu, white_bg: isScrolled }"
      class="hamburger"
      type="button"
    >
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </button>

    <div class="body-footer">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
    </div>
  </div>
</template>
<style>
.main-container {
  position: relative;
}
.white_bg {
  background-color: #fff;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}
.white_bg .hamburger-top,
.white_bg .hamburger-middle,
.white_bg .hamburger-bottom {
  background: var(--color-text);
}

a {
  text-decoration: none;
  color: var(--color-text-inverse);
  font-weight: 600;
}
.white_bg ul li a {
  color: var(--color-text);
}
a:hover {
  color: var(--color-primary-light);
}

ul {
  list-style: none;
}

/* Header/Navbar */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  height: 80px;
  padding: 0 30px;
  transition: background-color 0.6s ease;
}

/* Logo */
.logo {
  width: 60px;
  height: auto;
}

.logo img {
  display: block;
  width: 100%;
  height: auto;
}
.hamburger {
  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 15;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
}
.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 20px;
  height: 2px;
  top: 0;
  left: 0;
  background: var(--color-text-inverse);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(5px);
}

.hamburger-bottom {
  transform: translateY(10px);
}

.open {
  transform: rotate(90deg);
}
.open .hamburger-top,
.open .hamburger-middle,
.open .hamburger-bottom {
  background: var(--color-primary);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}

/* Desktop Menu */
.desktop-main-menu {
  margin-right: 50px;
  display: none;
  transition: background-color 0.3s ease;
}

.desktop-main-menu ul {
  display: flex;
}

.desktop-main-menu ul li {
  position: relative;
  margin-right: 20px;
  padding-bottom: 2px;
}
.overlay_show {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 13;
}

/* Menu item bottom border */
.desktop-main-menu ul li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-primary);
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: right center;
}

.desktop-main-menu ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
  transition-duration: 0.4s;
}
.show_menu {
  transform: translateX(0);
}
.hide_menu {
  transform: translateX(100%);
}
.mobile-main-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: #000;
  z-index: 14;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.mobile-main-menu ul {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 50px;
  width: 100%;
}

.mobile-main-menu ul li {
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: uppercase;
  border-bottom: 1px #555 dotted;
  width: 100%;
  text-align: right;
  padding-bottom: 8px;
}

.mobile-main-menu ul li a {
  transition: color 0.6s;
}

.mobile-main-menu ul li a:hover {
  color: var(--color-primary-light);
}
.body-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
}
@media screen and (min-width: 768px) {
  .desktop-main-menu {
    display: block;
  }
}
</style>
