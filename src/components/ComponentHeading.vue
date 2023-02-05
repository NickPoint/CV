<template>
  <b-container class="div-heading p-0">
    <h2>{{ h2 }}</h2>
    <h6>{{ h6 }}</h6>
  </b-container>
</template>

<script>
export default {
  name: "ComponentHeading",
  props: {
    h2: String,
    h6: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";
.div-heading {
  h2 {
    text-transform: capitalize;
  }

  h6 {
    text-transform: uppercase;
    color: $primary;
  }
}
</style>
