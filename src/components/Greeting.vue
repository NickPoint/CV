<template>
  <div class="container">
    <span class="my-name-ring">
      <h2>Mykyta Voievudskyi</h2>
      <span class="logo"></span>
    </span>

    <div id="greetings">
      <h2>{{ greeting }}</h2>
      <span id="typing-cursor"></span>
    </div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <b-button variant="outline-primary">My skills</b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GreetingComponent",
  data() {
    return {
      greeting: "",
    };
  },
  computed: {
    getGreeting(): string {
      return this.$store.getters.getGreeting;
    },
    getBoolean(): boolean {
      return this.$store.getters.getBoolean;
    },
  },
  methods: {
    setGreeting(greeting: string) {
      this.$store.dispatch("setGreetingAct", greeting);
    },
    setBoolean(boolean: boolean) {
      this.$store.dispatch("setMainPageIsVisitedAct", boolean);
    },
    async typeAnimation() {
      let message = "Welcome to my CV page";
      let array = message.split("");
      // let greetings = this.greetings;
      // console.log(greetings);
      for (let i = 0; i < array.length; i++) {
        this.greeting += await addLetter(i);
      }
      this.setGreeting(this.greeting);
      this.setBoolean(true);

      function addLetter(i: number) {
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(array[i]);
          }, 100)
        );
      }

      /*typeAnimation() {
    let message = "Welcome to my CV page";
    let array = message.split("");
    for (let i = 0; i < array.length; i++) {
      this.$store.dispatch("addLetterToGreetingAct", array[i]);
    }
  },*/
    },
  },
  mounted() {
    if (!this.getBoolean) {
      this.typeAnimation();
    } else {
      this.greeting = this.getGreeting;
    }
  },
});
</script>

<style scoped lang="scss">
.my-name-ring {
  $block-width: 300px;
  $block-height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $block-width;
  height: $block-height;
  border-radius: 50%;
  padding: 50px;
  background-color: #19191c;
  transform: translate(-165px);
  margin-bottom: 5rem;
  .logo {
    position: absolute;
    width: $block-width;
    height: $block-height;
    border-radius: 50%;
    background-image: url("/src/assets/logo-dark.png");
    background-size: cover;
    transition: 0.3s ease-in-out;
  }
}

.my-name-ring:hover .logo {
  width: 0;
  height: 0;
}

#greetings {
  display: flex;
}

#greetings {
  h2 {
    margin: 0;
  }
  span {
    border-right: 0.5em solid #ffffff;
    animation: blink-caret 0.8s step-end infinite;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ffffff;
  }
}
</style>
