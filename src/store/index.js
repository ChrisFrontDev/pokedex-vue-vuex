import Vue from 'vue';
import Vuex from 'vuex';
import GenerationModule from './modules/generation-module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { GenerationModule },
});
