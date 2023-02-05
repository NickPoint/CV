<template>
  <b-container :id="name" class="p-0 progress-container" fluid>
    <div class="notations">
      <span>Speaking</span>
      <span>{{ initialSpeaking }}</span>
    </div>
    <b-progress
      :value="initialSpeaking"
      :max="100"
      class="mb-2"
      animated
    ></b-progress>
    <div class="notations">
      <span>Writing</span>
      <span>{{ initialWriting }}</span>
    </div>
    <b-progress :value="initialWriting" :max="100" animated></b-progress>
  </b-container>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    givenSpeaking: Number,
    givenWriting: Number,
    name: String,
  },
  data() {
    return {
      initialSpeaking: 0,
      initialWriting: 0,
      boolean: true,
    };
  },
  methods: {
    visible() {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === true && this.boolean) {
            this.boolean = false;
            this.initialSpeaking = this.givenSpeaking;
            this.initialWriting = this.givenWriting;
          }
        },
        { threshold: [0.5] }
      );
      let psBars = document.getElementById(this.name);
      observer.observe(psBars);
    },
  },
  mounted() {
    this.visible();
  },
};
</script>

<style lang="scss" scoped>
.notations {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
}
</style>
