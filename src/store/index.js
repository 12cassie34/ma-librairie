import Vue from "vue";
import Vuex from "vuex";

import currentReading from './modules/current-reading';
import hasBook from './modules/has-book';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { currentReading, hasBook },
  state: {},
  mutations: {},
  actions: {},
});
