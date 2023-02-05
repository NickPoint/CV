<template>
  <b-container>
    <component-heading :h2="title" :h6="subtitle"></component-heading>
    <b-row>
      <b-col
        sm="6"
        v-b-toggle="'collapse-' + index"
        :key="key"
        ref="languageSkills"
        v-for="(value, key, index) in languageSkills"
      >
        <h4>{{ key }}</h4>
        <progress-bar
          :name="key"
          :given-speaking="value[0]"
          :given-writing="value[1]"
        ></progress-bar>
        <b-collapse :id="'collapse-' + index">
          <p>{{ value[2] }}</p>
        </b-collapse>
        <collapse-arrow></collapse-arrow>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ComponentHeading from "@/components/ComponentHeading.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import CollapseArrow from "@/components/CollapseArrow.vue";
export default {
  name: "LanguageSkillsComponent",
  components: { CollapseArrow, ProgressBar, ComponentHeading },
  data() {
    return {
      title: "Language Skills",
      subtitle: "Speaking And Writing",
      skillIndex: 0,
    };
  },
  computed: {
    languageSkills() {
      return this.$store.getters.getLanguageSkills;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";
.progress-container,
h4,
.arrow {
  margin-bottom: 1rem;
}
</style>
