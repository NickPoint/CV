<template>
  <div class="container">
    <span class="my-name-ring">
      <h2>Mykyta Voievudskyi</h2>
      <span class="logo"></span>
    </span>

    <div id="greetings">
      <h2 id="I">I'm</h2>
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
      Im: "",
    };
  },
  computed: {
    getImList(): string[] {
      return this.$store.getters.getIm;
    },
  },
  methods: {
    typeAnimation() {
      let ImText = document.getElementById("Im");
      if (ImText == null) {
        console.error(
          "Animation is not possible because element H2 with id 'Im' is absent"
        );
        return;
      }
      let ImListElement = 0;
      let ImList = this.getImList;
      loop();
      async function loop() {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          if (ImListElement >= ImList.length) ImListElement = 0;
          let message = ImList[ImListElement];
          let array = message.split("");
          ImText!.innerHTML += " ";
          for (let i = 0; i < array.length; i++) {
            await foo1(i, array);
          }
          const waitTime4 = await new Promise((resolve) =>
            setTimeout(resolve, 4000)
          );
          for (let i = 0; i < array.length + 1; i++) {
            await foo2(ImText!.innerHTML);
          }
          const waitTime1 = await new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
          ImListElement++;
        }
      }

      function foo1(i: number, char: string[]) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve((ImText!.innerHTML += char[i]));
          }, 100);
        });
      }

      function foo2(string: string) {
        return new Promise<string>((resolve) => {
          setTimeout(() => {
            resolve((ImText!.innerHTML = string.slice(0, -1)));
          }, 100);
        });
      }
    },
  },
  mounted() {
    this.typeAnimation();
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
