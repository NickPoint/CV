<template>
  <div class="container-fluid header">
    <div class="justify-content-between d-flex align-items-center">
      <div class="site-logo">
        <img class="logo" src="../assets/logo-light.png" />
        <h2>Mykyta<br />Voievudskyi</h2>
      </div>
      <nav>
        <router-link to="/main">Main</router-link>
        |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
* {
  margin: 0;
}

.header {
  position: fixed;
  top: 50px;
  z-index: 5;
}

.header > div {
  width: 90%;
  margin: auto;
  background-color: #585e63;
  border-radius: 50px;
  padding: 0 50px;
}

.site-logo {
  display: flex;
  align-items: center;
}

.site-logo h2 {
  font-size: 1rem;
}

.site-logo .logo {
  width: 50px;
  margin-right: 10px;
}
</style>
