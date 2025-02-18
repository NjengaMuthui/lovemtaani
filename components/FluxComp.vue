<template>
  <div class="flux-page">
    <VueFlux
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
      ref="$vueFlux"
    >
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #caption="captionProps">
        <FluxCaption v-bind="captionProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>

      <template #index="indexProps">
        <FluxIndex v-bind="indexProps" />
      </template>
    </VueFlux>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowReactive } from "vue";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Book,
  Zip
} from "vue-flux";
import "vue-flux/style.css";
import slide from "~/assets/slide.jpg";
import slide2 from "~/assets/slide2.jpg";
import slide3 from "~/assets/slide3.jpg";
import slide4 from "~/assets/slide4.jpg";
import slide5 from "~/assets/slide5.jpg";
import slide6 from "~/assets/slide6.jpg";
import about_a from "~/assets/about_a.jpg";
import about_b from "~/assets/about_b.jpg";
import about_c from "~/assets/about_c.jpg";
import about_d from "~/assets/about_d.jpg";
import about_e from "~/assets/about_e.jpg";
import clean from "~/assets/clean.jpg";
import contactus from "~/assets/contactus.jpg";
import events from "~/assets/events.jpg";
import gal1 from "~/assets/gal1.jpg";
import gal2 from "~/assets/gal2.jpg";
import gal3 from "~/assets/gal3.jpg";
import gal4 from "~/assets/gal4.jpg";
import gal5 from "~/assets/gal5.jpg";
import gal6 from "~/assets/gal6.jpg";
import gal7 from "~/assets/gal7.jpg";
import gal8 from "~/assets/gal8.jpg";
import gal9 from "~/assets/gal9.jpg";
import gal10 from "~/assets/gal10.jpg";
import gal11 from "~/assets/gal11.jpg";
import gal12 from "~/assets/gal12.jpg";
import gal13 from "~/assets/gal13.jpg";
import gal14 from "~/assets/gal14.jpg";
import gal15 from "~/assets/gal15.jpg";
import gal16 from "~/assets/gal16.jpg";
import gal17 from "~/assets/gal17.jpg";
import gal18 from "~/assets/gal18.jpg";
import gal19 from "~/assets/gal19.jpg";
import gal20 from "~/assets/gal20.jpg";
import gal21 from "~/assets/gal21.jpg";
import gal22 from "~/assets/gal22.jpg";
import gal23 from "~/assets/gal23.jpg";

const $vueFlux = ref();

const options = shallowReactive({
  autoplay: true
});

const rscs = shallowReactive([
  new Img(slide),
  new Img(slide2),
  new Img(slide3),
  new Img(slide4),
  new Img(slide5),
  new Img(slide6),
  new Img(about_a),
  new Img(about_b),
  new Img(about_c),
  new Img(about_d),
  new Img(about_e),
  new Img(clean),
  new Img(contactus),
  new Img(events),
  new Img(gal1),
  new Img(gal2),
  new Img(gal3),
  new Img(gal4),
  new Img(gal5),
  new Img(gal6),
  new Img(gal7),
  new Img(gal8),
  new Img(gal9),
  new Img(gal10),
  new Img(gal11),
  new Img(gal12),
  new Img(gal13),
  new Img(gal14),
  new Img(gal15),
  new Img(gal16),
  new Img(gal17),
  new Img(gal18),
  new Img(gal19),
  new Img(gal20),
  new Img(gal21),
  new Img(gal22),
  new Img(gal23)
]);

const transitions = shallowReactive([Book, Zip]);
</script>

<style scoped>
@media (min-width: 768px) {
  .flux-page {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 900px) {
  .flux-page {
    width: 65%;
  }
}
</style>
