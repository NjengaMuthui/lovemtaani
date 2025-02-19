<template>
  <div>
    <TopContainer :image="ProgramsImage" alt="Programs" title="Programs" />
    <InfoDual :image="edu" :info="fac" title="FOOD AND CLOTHS DISTRIBUTION" />
    <InfoDual
      :image="feed2"
      :info="lisha"
      title="Lisha Jamii Program"
      :is-reversed="true"
    />
    <InfoDual
      :image="abouthome"
      :info="gab"
      title="GIRLS AND BOYS EMPOWERMENT"
    />
    <InfoDual
      :image="gal5"
      :info="pad"
      title="PAD FOR GIRLS (SANITARY TOWELS)"
      :is-reversed="true"
    />
    <InfoDual :image="gal15" :info="boyEmpower" title="BOYS EMPOWERMENT" />
  </div>
</template>

<script setup lang="ts">
import ProgramsImage from "~/assets/programs.jpg";
import feed2 from "~/assets/feed2.jpg";
import abouthome from "~/assets/abouthome.jpg";
import edu from "~/assets/edu.jpg";
import gal5 from "~/assets/gal5.jpg";
import gal15 from "~/assets/gal15.jpg";

const fac = ref(
  "Through our seasonal events child malnutrition and lack of cloths is a major problem among the " +
    "less fortunate kids in Kenya this affect their physical growth and Brain development. Our " +
    "organization allows people do contribute to this growth and happiness of the under privileged " +
    "and irrespective of their distance and background when someone lack good sanitation they lack " +
    "joy and dignity they deserve. Together we have been creating a more peaceful and equitable " +
    "world."
);
const gab = ref(
  "Girls and boys empowerment refers to the process of building confidence, self – esteem and " +
    "agency in young boys and girls regardless of their gender it involves. Providing them with tools, " +
    "resources and opportunities to achieve their full potential challenge stereotypes and " +
    "discrimination."
);
const pad = ref(
  "Research was carried out and it showed increased. School dropouts among girls in rural areas " +
    "due to lack proper of sanitary/ lack of menstrual products./n" +
    "As a result girls and women are often. Expected to refrain from normal activates such as going to " +
    "school cooking bathing e.t.c these, restrictions and negative attitudes towards menstratution " +
    "affect girls self-esteem./n" +
    "By improving menstrual health and tackling period shame we have improved girls attendance " +
    "and performance at school. " +
    "We have break down taboos and misconceptions around menstruation in order to raise girl self " +
    "esteem and enable girl to fully participate in all aspect of society without being exposed to " +
    "hygiene risks discomfort shame or less of dignity. "
);
const boyEmpower = ref(
  "Boys empowerment is an important aspect of promoting gender equality and creating more " +
    "inclusive and equitable society because we are not leaving anyone behind we help our boys to " +
    "develop self esteem. Communication skills leadership abilities and critical thinking by " +
    "empowering boys we help them break from harmful society. We also aid them with boxers."
);

const lisha = ref(
  "We visit and carry out food distribution to marginalized communities remotely located allover " +
    "Kenya. /n" +
    "Its food drive initiative program for the community is a coordinated effort to collect and " +
    "distribute food donations to those in need within the community e.g. The disable people the " +
    "Elderly (wazee) streets families etc. /n" +
    "The collected food is then distributed to individuals and families facing food insecurity"
);
</script>

<style scoped></style>
