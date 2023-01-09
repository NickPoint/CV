<template>
  <div class="container">
    <div class="row fullscreen">
      <div id="me-image" class="col-6 col">
        <span></span>
      </div>
      <div class="col-6 col">
        <div class="container">
          <h1 id="greetings"></h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
    <span class="my-name-ring">
      <h2>Mykyta Voievudskyi</h2>
      <span class="logo"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MainView",
  methods: {
    typeAnimation() {
      let text = document.getElementById("greetings");
      let greetings = "Welcome to my CV page";
      let array = greetings.split("");
      subAnimation();
      function subAnimation() {
        if (array.length > 0) {
          text.innerHTML += array.shift();
        } else {
          return;
        }
        setTimeout(subAnimation, 100);
      }
    },
  },
  mounted() {
    this.typeAnimation();
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.fullscreen {
  height: 100vh;
}
#me-image {
  background-image: url("/src/assets/me.png");
  background-size: cover;
  position: relative;
}
#me-image span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #167dff;
  opacity: 0.3;
}

.row .col:last-child {
  display: flex;
  align-items: flex-end;
}

.my-name-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  padding: 50px;
  background-color: #19191c;
}

.my-name-ring .logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-image: url("/src/assets/logo-dark.png");
  background-size: cover;
  transition: 0.3s ease-in-out;
}

.my-name-ring:hover .logo {
  width: 0;
  height: 0;
}
</style>
