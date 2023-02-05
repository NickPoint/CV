<template>
  <b-container>
    <component-heading :h2="title" :h6="subtitle"></component-heading>
    <div v-b-toggle="'collapse-about-me'">
      <p>
        I'm from Ukraine. One day my family decided to change their lives and we
        moved to a northern country with stunning forest landscapes called
        Estonia. Since the local language was completely unknown to me, it was a
        massive challenge for a 15-year-old teenager to change his life forever.
      </p>
      <b-collapse id="collapse-about-me">
        <p>
          I only had a year to prepare for the state exams for entering the
          gymnasium and 3 years to study the Estonian language for my university
          studies. However, I achieved these goals, and these new conditions
          helped me to understand that I am a diligent and goal-driven person.
        </p>
      </b-collapse>
      <collapse-arrow></collapse-arrow>
    </div>
    <b-row>
      <b-col xl>
        <div>
          <span>Age:</span>
          <span>20</span>
        </div>
        <div>
          <span>Residence:</span>
          <span>Ukraine</span>
        </div>
        <div>
          <span>Degree:</span>
          <span>2 year of Computer Science</span>
        </div>
      </b-col>
      <b-col xl>
        <div>
          <span>E-mail:</span>
          <span>
            <a href="mailto:nikita.voevudsky@gmail.com"
              >nikita.voevudsky@gmail.com</a
            >
          </span>
        </div>
        <div>
          <span>Phone:</span>
          <span><a href="tel:+37258348070">+372 5834 8070</a></span>
        </div>
        <div>
          <span>Address:</span>
          <span>Tartu, Estonia</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ComponentHeading from "@/components/ComponentHeading.vue";
import CollapseArrow from "@/components/CollapseArrow.vue";

export default {
  name: "AboutMeComponent",
  components: { CollapseArrow, ComponentHeading },
  data() {
    return {
      title: "About Me",
      subtitle: "My Story",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";
.col-xl > div {
  display: flex;
  justify-content: space-between;

  span:last-child {
    text-align: right;
  }
}
</style>
