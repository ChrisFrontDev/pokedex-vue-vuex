// import axios from 'axios';
import { api } from '../../api.js';
const state = {
  generations: [],
  generation: {},
};

const getters = {
  generationsList: state => state.generations,
  generation: state => state.generation,
  getPokemonByName: state => name => {
    return state.generation?.pokemons?.find(pokemon => pokemon.name === name);
  },
};

const actions = {
  async fetchGenerations({ commit }) {
    const response = await api.get('/generation/');
    console.log(response.data);
    commit('setGenerations', response.data);
  },
  async fetchOneGeneration({ commit }, name) {
    const response = await api.get(`/generation/${name}`);
    // console.log('response', response.data);

    let pokemons = await Promise.all(
      response.data.pokemon_species.map(async pokemon => {
        const pokemonId = pokemon.url.split('/')[6];
        let pokemonResponse = await api.get(`/pokemon/${pokemonId}`);

        let fetchPokemonSpecie = await api.get(
          pokemonResponse.data.species.url,
        );
        return { ...pokemonResponse.data, species: fetchPokemonSpecie.data };
      }),
    );

    commit('setGeneration', {
      ...response.data,
      pokemons: pokemons.sort((a, b) => a.order - b.order),
    });
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
