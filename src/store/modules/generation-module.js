import { api } from '../../api.js';

const state = {
  generations: [],
};

const getters = {
  generationsList: state => state.generations,
};

const actions = {
  async fetchGenerations({ commit }) {
    const response = await api.get('/generation');
    console.log(response.data);
    commit('setGenerations', response.data);
  },
};

const mutations = {
  setGenerations: (state, generations) => (state.generations = generations),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
