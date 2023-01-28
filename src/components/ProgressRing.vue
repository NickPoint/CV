<template>
  <b-col class="coding-skill">
    <div :id="name" class="ring-progress">
      <svg :height="radius * 2" :width="radius * 2">
        <circle
          :r="adaptiveRadius"
          :cx="radius"
          :cy="radius"
          fill="transparent"
          :stroke-width="stroke"
          :stroke-dasharray="circumference + ' ' + circumference"
          :stroke-dashoffset="strokeDashoffset"
        />
        <text
          x="50%"
          y="50%"
          fill="#fff"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          {{ initialProgress }}
        </text>
      </svg>
    </div>
    <h4>{{ name }}</h4>
  </b-col>
</template>

<script>
export default {
  name: "ProgressRing",
  props: {
    givenProgress: Number,
    name: String,
  },
  data() {
    return {
      radius: 75,
      stroke: 4,
      initialProgress: 0,
    };
  },
  computed: {
    adaptiveRadius() {
      return this.radius - this.stroke / 2;
    },
    circumference() {
      return this.adaptiveRadius * 2 * Math.PI;
    },
    strokeDashoffset() {
      return (
        this.circumference - (this.initialProgress / 100) * this.circumference
      );
    },
  },
  methods: {
    visible() {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === true) {
            console.log("start");
            this.initialProgress = this.givenProgress;
          }
        },
        { threshold: [1] }
      );
      observer.observe(document.getElementById(this.name));
    },
  },
  mounted() {
    this.visible();
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";
.coding-skill {
  text-align: center;
  .ring-progress {
    margin-bottom: 1.5rem;
  }
  h4 {
    text-transform: capitalize;
  }
  circle {
    transition: stroke-dashoffset 1s ease-in-out;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: $primary;
  }
}
</style>
