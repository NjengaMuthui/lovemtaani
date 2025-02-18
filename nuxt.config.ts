// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/fonts", "@nuxt/image"],
  css: ["@/assets/base.css", "vue-flux/style.css"],
  ssr: false,
  nitro: {
    preset: "static"
  }
});
