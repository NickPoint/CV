import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    im: [
      "programmer",
      "student of Tartu University",
      "studying Computer Science",
      "good teamworker",
    ],
    codingSkills: {
      Python: 70,
      Java: 85,
      JavaScript: 70,
      "HTML/CSS": 95,
    },
  },
  getters: {
    getIm(state) {
      return state.im;
    },
    getCodingSkills(state) {
      return state.codingSkills;
    },
  },
  mutations: {},
  actions: {},
});
