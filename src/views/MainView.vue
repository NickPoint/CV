<template>
  <b-container class="fullscreen" fluid>
    <b-row>
      <b-col lg="5" id="me-image" class="p-0">
        <!--        TODO разные картинки        -->
        <span></span>
      </b-col>
      <b-col lg="7" id="content">
        <greeting-component
          @scroll="(elementId) => scroll(elementId)"
        ></greeting-component>
        <about-me-component id="about-me"></about-me-component>
        <experience-component id="experience"></experience-component>
        <education-component id="education"></education-component>
        <coding-skills-component id="coding"></coding-skills-component>
        <language-skills id="languages"></language-skills>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import AboutMeComponent from "@/components/AboutMe.vue";
import GreetingComponent from "@/components/Greeting.vue";
import ExperienceComponent from "@/components/Experience.vue";
import EducationComponent from "@/components/Education.vue";
import CodingSkillsComponent from "@/components/CodingSkills.vue";
import LanguageSkills from "@/components/LanguageSkills.vue";
import { defineComponent } from "vue";
import greeting from "@/components/Greeting.vue";
export default defineComponent({
  name: "MainView",
  components: {
    LanguageSkills,
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
  methods: {
    scroll(elementId: string) {
      /*      let element = document.getElementById(elementId);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "center" });*/
      const element = document.getElementById(elementId);
      const y = element!.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    moveImage() {
      const background = document.getElementById("me-image");
      let height = window.innerHeight / 10;
      let width = window.innerWidth / 15;

      window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX / width - 15;
        let mouseY = e.clientY / height - 10;
        if (background)
          background.style.backgroundPosition = `${mouseX}px ${mouseY}px`;
      });
    },
  },
  mounted() {
    if (window.innerWidth >= 992) this.moveImage();
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";

@media screen and (min-width: map-get($grid-breakpoints, lg)) {
  .fullscreen {
    //height: 100vh;
    overflow: auto;
  }
}

#me-image {
  @media screen and (min-width: map-get($grid-breakpoints, sm)) {
    max-height: 650px;
    height: 650px;
    background-position: 0 30%;
  }
  @media screen and (min-width: map-get($grid-breakpoints, lg)) {
    position: fixed;
    height: 100vh;
    max-height: 100vh;
    background-position: -7.5px -5px;
  }
  transition: all 0.1s;
  max-height: 450px;
  background-image: url("~@/../src/assets/me.png");
  background-size: 105%;
  height: 450px;
  background-position: 0 25%;
  flex-basis: 100%;
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

#content {
  @media screen and (min-width: map-get($grid-breakpoints, lg)) {
    margin-top: 20rem;
    margin-left: auto;
  }
  > .container {
    border-bottom: 1px solid;
  }
  > .container,
  > .container > :last-child {
    margin-bottom: $margin-after-each-div-main-view !important;
  }
}
</style>
