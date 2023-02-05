<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand class="d-flex align-items-center" to="/">
      <img id="logo" src="../assets/logo-light.png" />
      <h2>Mykyta<br />Voievudskyi</h2>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" @click="scroll('greeting')">Main</b-nav-item>
        <b-nav-item href="about-me" @click="scroll('about-me')">
          About Me
        </b-nav-item>
        <b-nav-item href="experience" @click="scroll('experience')">
          Experience
        </b-nav-item>
        <b-nav-item href="education" @click="scroll('education')">
          Education
        </b-nav-item>
        <b-nav-item href="coding" @click="scroll('coding')">Coding</b-nav-item>
        <b-nav-item href="languages" @click="scroll('languages')">
          Languages
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  methods: {
    scroll(elementId: string) {
      /*      let element = document.getElementById(elementId);
      if (element)
        element.scr;ollIntoView({ behavior: "smooth", block: "center" });*/
      event?.preventDefault();
      if (elementId === "greeting")
        window.scrollTo({ top: 0, behavior: "smooth" });
      else {
        const element = document.getElementById(elementId);
        const y =
          element!.getBoundingClientRect().top + window.pageYOffset - 150;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    navStyling() {
      let navbar = document.querySelector<HTMLElement>(".navbar");
      if (navbar) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class"
            )
              if (toggler?.classList.contains("not-collapsed"))
                navbar!.classList.add("opened");
              else navbar!.classList.remove("opened");
          });
        });
        const toggler = document.querySelector(".navbar-toggler")!;
        observer.observe(toggler, { attributes: true });
        window.onscroll = () => {
          if (window.pageYOffset >= 100) navbar!.classList.add("fixed");
          else navbar!.classList.remove("fixed");
        };
      }
    },
  },
  mounted() {
    if (window.innerWidth < 992) this.navStyling();
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/custom-vars";

* {
  margin: 0;
}

.navbar {
  width: 100%;
  top: 25px;
  position: fixed;
  left: 0;
  right: 0;
  transition: 0.3s all ease;
  z-index: 10;

  &.fixed {
    top: 0;
    background-color: $bg;
  }

  &.opened {
    top: 0;
    background-color: $bg;
  }
}
.navbar-brand h2 {
  font-size: 1rem;
  margin: 0;
}

#logo {
  width: 50px;
  margin-right: 0.5rem;
}

@media screen and (min-width: map-get($grid-breakpoints, lg)) {
  .navbar {
    background-color: $bg;
    top: 50px;
    width: 90%;
    margin: auto;
    border-radius: 50px;
  }
}
</style>
