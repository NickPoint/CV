<template>
  <b-container>
    <span class="my-name-ring">
      <h2>Mykyta Voievudskyi</h2>
      <span class="logo"></span>
    </span>

    <div id="greeting">
      <h2>I'm <span id="Im"></span><span id="typing-cursor"></span></h2>
    </div>
    <p>
      Hey!<br />My name is Mykyta Voievudskyi and welcome to my resume website!
      I am a sophomore at Tartu University and on the way to getting a Computer
      Science bachelor's degree.
    </p>
    <b-button-group>
      <b-button @click="scroll('coding')" variant="outline-primary">
        Coding Skills
      </b-button>
      <b-button @click="scroll('language')" variant="outline-primary">
        Languages
      </b-button>
      <b-button @click="scroll('education')" variant="outline-primary">
        Education
      </b-button>
    </b-button-group>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GreetingComponent",
  computed: {
    getImList(): string[] {
      return this.$store.getters.getIm;
    },
  },
  methods: {
    scroll(elementId: string) {
      this.$emit("scroll", elementId);
    },
    typeAnimation() {
      let ImText = document.getElementById("Im");
      if (ImText == null) {
        console.error(
          "Animation is not possible because element with id 'Im' is absent"
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
          for (let i = 0; i < array.length; i++) {
            await foo1(i, array);
          }
          const waitTime4 = await new Promise((resolve) =>
            setTimeout(resolve, 4000)
          );
          for (let i = 0; i < array.length; i++) {
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
          }, 50);
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
@import "/src/assets/custom-vars";
.container {
  text-align: center;
  @media screen and (min-width: map-get($grid-breakpoints, lg)) {
    text-align: initial;
  }
}
.my-name-ring {
  $block-width-height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $block-width-height;
  height: $block-width-height;
  border-radius: 50%;
  padding: 50px;
  background-color: #19191c;
  margin-inline: auto;
  margin-top: -$block-width-height/2;
  .logo {
    position: absolute;
    width: $block-width-height;
    height: $block-width-height;
    border-radius: 50%;
    background-image: url("/src/assets/logo-dark.png");
    background-size: cover;
    transition: 0.3s ease-in-out;
  }
  h2 {
    font-size: 1.75rem;
  }
  @media screen and (min-width: map-get($grid-breakpoints, md)) {
    $block-width-height: 250px;
    width: $block-width-height;
    height: $block-width-height;
    .logo {
      width: $block-width-height;
      height: $block-width-height;
    }
    .h2 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: map-get($grid-breakpoints, lg)) {
    $block-width-height: 300px;
    width: $block-width-height;
    height: $block-width-height;
    transform: translate(-165px);
    margin-bottom: 5rem;
    margin-inline: initial;
    .logo {
      width: $block-width-height;
      height: $block-width-height;
    }
    .h2 {
      font-size: 2rem;
    }
  }
}

.my-name-ring:hover .logo,
.my-name-ring:focus .logo {
  width: 0;
  height: 0;
}

#greeting {
  display: flex;
  justify-content: center;
  @media screen and (min-width: map-get($grid-breakpoints, lg)) {
    justify-content: initial;
  }
  h2 {
    margin: 0;
  }
  #typing-cursor {
    border-right: 0.5rem solid #ffffff;
    animation: blink-caret 0.8s step-end infinite;
  }
}

#Im {
  text-decoration: underline $secondary;
  text-underline-offset: 5px;
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
