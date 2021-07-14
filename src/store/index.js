import Vue from "vue";
import Vuex from "vuex";

import currentReading from './modules/current-reading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { currentReading },
  state: {},
  mutations: {},
  actions: {},
});
