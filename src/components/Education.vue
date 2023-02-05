<template>
  <b-container>
    <component-heading :h2="title" :h6="subtitle"></component-heading>
    <b-row>
      <b-col>
        <div id="experience-heading">
          <h4>University Of Tartu</h4>
          <span class="line"></span>
          <span class="date">2021 - Current</span>
        </div>
        <p>
          Here I gain knowledge about the basics of Computer Science, such as
          data structures, algorithms and software design, as well as various
          development processes. The main programming language is <b>Java</b>.
          Also, I am familiar with <b>Python, Idris2, SQL</b> and
          <b>JS (Vue.js, Node.js)</b>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ComponentHeading from "@/components/ComponentHeading.vue";

export default {
  name: "EducationComponent",
  components: { ComponentHeading },
  data() {
    return {
      title: "Education",
      subtitle: "Studied At",
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
.col {
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
