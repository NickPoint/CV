<template>
  <b-container>
    <div class="arrow" />
  </b-container>
</template>

<script>
export default {
  name: "CollapseArrow",
};
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";
.container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  .arrow {
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 20px;
      height: 3px;
      background-color: $white;
      transition: 0.35s ease;
    }
    &:before {
      left: -16px;
    }

    &:after {
      left: -4px;
    }
  }
}
</style>
<style lang="scss">
.collapsed {
  .arrow {
    &:before {
      transform: translateX(-50%) rotate(45deg);
    }

    &:after {
      transform: translateX(-50%) rotate(-45deg);
    }
  }
}
.not-collapsed {
  .arrow {
    &:before {
      transform: translateX(-50%) rotate(-45deg);
    }

    &:after {
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>
