<template>
  <div class="container-fluid fullscreen">
    <div class="row">
      <div id="me-image" class="col-5 col p-0">
        <b-img :src="meImage" fluid-grow />
        <span></span>
      </div>
      <div class="col-7 col">
        <GreetingComponent></GreetingComponent>
        <about-me></about-me>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMe from "@/components/AboutMe.vue";
import GreetingComponent from "@/components/Greeting.vue";
export default defineComponent({
  name: "MainView",
  components: { GreetingComponent, AboutMe },
  data() {
    return {
      meImage: require("@/assets/me.png"),
    };
  },
});
/*import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const state = reactive({
  greeting: "",
});

function getGreeting(): string {
  return computed(() => store.getters.getGreeting).value;
}

function getBoolean(): boolean {
  return computed(() => store.getters.getBoolean).value;
}

function setGreeting(greeting: string) {
  store.dispatch("setGreetingAct", greeting);
}

function setBoolean(boolean: boolean) {
  store.dispatch("setMainPageIsVisitedAct", boolean);
}

async function typeAnimation() {
  let message = "Welcome to my CV page";
  let array = message.split("");
  // let greetings = this.greetings;
  // console.log(greetings);
  for (let i = 0; i < array.length; i++) {
    state.greeting += await addLetter(i);
  }
  setGreeting(state.greeting);
  setBoolean(true);

  function addLetter(i: number) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(array[i]);
      }, 100)
    );
  }
}

onMounted(() => {
  if (getBoolean()) {
    typeAnimation();
  } else {
    state.greeting = getGreeting();
  }
});*/
</script>

<style lang="scss" scoped>
@import "src/assets/custom-vars";

.fullscreen {
  height: 100vh;
  overflow: auto;
}

#me-image {
  position: fixed;
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #167dff;
    opacity: 0.3;
  }
}

.row {
  .col:last-child {
    margin-top: 15rem;
    margin-left: auto;
    * {
      border-bottom: 1px solid;
    }
    .container,
    .container > :last-child {
      margin-bottom: $margin-after-each-div-main-view;
    }
  }
}
</style>
