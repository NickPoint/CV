<template>
  <!--  <div class="container-fluid header">
    <div class="justify-content-between d-flex align-items-center">
      <div class="site-logo">
        <img class="logo" src="../assets/logo-light.png" />
        <h2>Mykyta<br />Voievudskyi</h2>
      </div>
      <b-nav>
        <b-nav-item to="/main">Main</b-nav-item>
        |
        <b-nav-item to="/about">About</b-nav-item>
      </b-nav>
    </div>
  </div>-->
  <b-navbar fixed="top" type="dark" variant="secondary">
    <b-navbar-brand class="d-flex align-items-center" to="/main">
      <img id="logo" src="../assets/logo-light.png" />
      <h2>Mykyta<br />Voievudskyi</h2>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/main">Main</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "/src/assets/custom-vars";

* {
  margin: 0;
}

.navbar {
  top: 50px;
  width: 90%;
  margin: auto;
  border-radius: 50px;
}

.navbar-brand h2 {
  font-size: 1rem;
  margin: 0;
}

#logo {
  width: 50px;
  margin-right: 0.5rem;
}
</style>
