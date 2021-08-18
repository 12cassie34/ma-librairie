import Vue from "vue";
import Vuex from "vuex";

import currentReading from './modules/current_reading';
import hasBook from './modules/has_book';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { currentReading, hasBook },
  state: {},
  mutations: {},
  actions: {},
});
