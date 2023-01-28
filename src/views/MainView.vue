<template>
  <b-container class="fullscreen" fluid>
    <b-row>
      <b-col id="me-image" class="col-5 p-0">
        <b-img :src="meImage" />
        <span></span>
      </b-col>
      <b-col class="col-7">
        <greeting-component></greeting-component>
        <about-me-component></about-me-component>
        <experience-component></experience-component>
        <education-component></education-component>
        <coding-skills-component></coding-skills-component>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMeComponent from "@/components/AboutMe.vue";
import GreetingComponent from "@/components/Greeting.vue";
import ExperienceComponent from "@/components/Experience.vue";
import EducationComponent from "@/components/Education.vue";
import CodingSkillsComponent from "@/components/CodingSkills.vue";
export default defineComponent({
  name: "MainView",
  components: {
    CodingSkillsComponent,
    EducationComponent,
    ExperienceComponent,
    GreetingComponent,
    AboutMeComponent,
  },
  data() {
    return {
      meImage: require("@/assets/me.png"),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";

.fullscreen {
  height: 100vh;
  overflow: auto;
}

#me-image {
  position: fixed;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #167dff;
    opacity: 0.3;
  }
}

.row {
  .col:last-child {
    margin-top: 15rem;
    margin-left: auto;
    * {
      border-bottom: 1px solid;
    }
    .container,
    .container > :last-child {
      margin-bottom: $margin-after-each-div-main-view;
    }
  }
}
</style>
