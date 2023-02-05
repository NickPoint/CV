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
      Python: [
        70,
        'I participated in the project "Clustering Python programs". The main goal of this project was to find clusters of similar programs. This is meant to help to detect collaboration and discover different approaches to the task.',
        ["https://github.com/NickPoint/Clustering-Python-Programs"],
      ],
      Java: [
        85,
        "The most worthy project that I have ever done in Java is a POS (Point of sale) application. It helped me to obtain a basic knowledge of software engineering and primary skills for working at any stage of software development projects. Also, a big plus was a strong knowledge of the OOP paradigm in Java.",
        ["https://github.com/NickPoint/POS-system"],
      ],
      JavaScript: [
        70,
        "I mainly used it when developing sites to work with the DOM. In addition, I am familiar with the Vue.js framework, the jQuery library, and a bit of the Node.js runtime and its Express framework. For example, this site is implemented with Vue.js.",
        [document.location],
      ],
      "HTML/CSS": [
        90,
        "It is an integral part of front-end web development😃.",
        ["https://medcut.ee/", "https://koduparadiis.ee/", "https://jum.ee/"],
      ],
    },
    languageSkills: {
      English: [
        60,
        75,
        "I have an FCE level B2 certificate. However, I lack speaking practice and am willing to improve it",
      ],
      Estonian: [
        75,
        75,
        "Since I have been living in Estonia for 5 years now, my language level is the maximum I could achieve during this period. Even so, I increase my skills extremely fast",
      ],
      Russian: [100, 100, "My mother tongue language"],
      Ukrainian: [80, 80, "My second language"],
    },
  },
  getters: {
    getIm(state) {
      return state.im;
    },
    getCodingSkills(state) {
      return state.codingSkills;
    },
    getLanguageSkills(state) {
      return state.languageSkills;
    },
  },
  mutations: {},
  actions: {},
});
