<template>
  <b-container>
    <component-heading :h2="title" :h6="subtitle"></component-heading>
    <b-row>
      <b-col xl>
        <div id="experience-heading">
          <h4>Job or internship</h4>
          <span class="line"></span>
          <span class="date">Near Future</span>
        </div>
        <p>
          Actively looking for a <b>job or internship</b> opportunity and ready
          to start my career at any time. I would like to develop as a
          <b>Software Engineer</b>.
        </p>
      </b-col>
      <b-col xl>
        <div id="experience-heading">
          <h4>WordPress freelancer</h4>
          <span class="line"></span>
          <span class="date">2020 - Current</span>
        </div>
        <p>
          Work experience with WordPress CMS behind. I have made 3 stores and 4
          landing pages. Therefore, I have a strong knowledge of
          <b>HTML5/CSS</b> and familiar with <b>JavaScript</b>.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ComponentHeading from "@/components/ComponentHeading.vue";

export default {
  name: "ExperienceComponent",
  components: { ComponentHeading },
  data() {
    return {
      title: "Professional Experience",
      subtitle: "Working With",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/custom-vars";

$experience-line-thickness: 2px;
$circle-width-height: 16px;
$circle-position-top: 15px;
$circle-position-left: 10px;
.col-xl {
  position: relative;
  padding-left: 40px;
}

#experience-heading {
  h4 {
    position: relative;
    background-color: $third;
    width: fit-content;
    padding-inline: 10px;
    z-index: 1;
  }

  .line {
    position: absolute;
    height: $experience-line-thickness;
    width: calc(100% - $circle-position-left - $circle-width-height - 16px);
    background-color: $primary;
    top: $circle-position-top;
    transform: translate(0, -50%);
    left: $circle-position-left + $circle-width-height;
  }

  .date {
    position: absolute;
    width: 105px;
    text-align: right;
    font-size: 0.75rem;
    left: -35px;
    top: 20px;
    color: $secondary;
    transform: rotate(-90deg) translate(-50%, 0);
  }
}

#experience-heading::before {
  content: "";
  position: absolute;
  width: $circle-width-height;
  height: $circle-width-height;
  border-radius: 50%;
  left: $circle-position-left;
  top: $circle-position-top;
  transform: translate(0, -50%);
  border: $primary $experience-line-thickness solid;
}
</style>
