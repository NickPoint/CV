<template>
  <b-container>
    <component-heading :h2="title" :h6="subtitle"></component-heading>
    <b-tabs fill>
      <b-tab v-for="(value, key) in getCodingSkills" :key="key">
        <template #title>
          <progress-ring :name="key" :given-progress="value[0]" />
        </template>
        <p>{{ value[1] }}</p>
        <p v-if="value[2]">
          Here some my works/projects:
          <a
            :key="index"
            v-for="(el, index) in value[2]"
            :href="el"
            target="_blank"
          >
            {{ el }}<span v-if="index !== value[2].length - 1">,</span>
          </a>
        </p>
        <p style="font-size: 0.75rem" v-if="key === 'HTML/CSS'">
          P.S. Some of this sites have been changed by customers, so don't be
          scared😆
        </p>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import ProgressRing from "@/components/ProgressRing.vue";
import ComponentHeading from "@/components/ComponentHeading.vue";

export default {
  name: "CodingSkillsComponent",
  data() {
    return {
      title: "Coding Skills",
      subtitle: "Developing On",
    };
  },
  components: { ComponentHeading, ProgressRing },
  computed: {
    getCodingSkills() {
      return this.$store.getters.getCodingSkills;
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/custom-vars";
ul.nav > li.nav-item {
  @media screen and (max-width: 1560px) {
    flex-basis: 50%;
  }
  > a.nav-link {
    background-color: transparent;
    border: none;
    transition: 0.3s;
    color: $text;
  }
  > a.nav-link:hover,
  > a.nav-link.active {
    transform: translateY(-5px);
    color: rgba(255, 255, 255, 0.5);
  }
}
.tabs .nav-tabs {
  border-color: $secondary;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>
<style lang="scss" scoped>
a {
  word-break: break-word;
}
</style>
