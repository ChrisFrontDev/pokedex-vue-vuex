import { api } from '../../api.js';

const state = {
  generations: [],
  generation: {},
};

const getters = {
  generationsList: state => state.generations,
  generation: state => state.generation,
};

const actions = {
  async fetchGenerations({ commit }) {
    const response = await api.get('/generation/');
    console.log(response.data);
    commit('setGenerations', response.data);
  },
  async fetchOneGeneration({ commit }, name) {
    const response = await api.get(`/generation/${name}`);
    console.log(response.data);
    commit('setGeneration', response.data);
  },
};

const mutations = {
  setGenerations: (state, generations) => (state.generations = generations),
  setGeneration: (state, generation) => (state.generation = generation),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
