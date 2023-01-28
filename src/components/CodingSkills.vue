<template>
  <b-container>
    <div class="div-heading">
      <h2>Coding Skills</h2>
      <h6>Developing on</h6>
    </div>
    <b-tabs fill>
      <b-tab v-for="(value, key) in getCodingSkills" :key="key">
        <template #title>
          <progress-ring :name="key" :given-progress="value" />
        </template>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import ProgressRing from "@/components/ProgressRing.vue";

export default {
  name: "CodingSkillsView",
  components: { ProgressRing },
  computed: {
    getCodingSkills() {
      return this.$store.getters.getCodingSkills;
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/custom-vars";
ul.nav > li.nav-item > {
  a.nav-link {
    background-color: transparent;
    border: none;
    transition: 0.3s;
  }
  a.nav-link:hover,
  a.nav-link.active {
    transform: translateY(-5px);
  }
}
</style>
