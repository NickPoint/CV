import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    greeting: "",
    mainPageIsVisited: false,
  },
  getters: {
    getGreeting(state) {
      return state.greeting;
    },
    getBoolean(state) {
      return state.mainPageIsVisited;
    },
  },
  mutations: {
    setGreeting: (state, greeting) => {
      state.greeting = greeting;
    },
    setMainPageIsVisited: (state, boolean) => {
      state.mainPageIsVisited = boolean;
    },
  },
  actions: {
    addLetterToGreetingAct: (act, letter) => {
      setTimeout(() => {
        act.commit("addLetterToGreeting", letter);
      }, 100);
    },
    setGreetingAct: (act, greeting) => {
      setTimeout(() => {
        act.commit("setGreeting", greeting);
      }, 100);
    },
    setMainPageIsVisitedAct: (act, boolean) => {
      setTimeout(() => {
        act.commit("setMainPageIsVisited", boolean);
      }, 100);
    },
  },
});
