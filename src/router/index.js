import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import GenerationDetails from '../views/GenerationDetail.vue';
import Pokedex from '../views/Pokedex.vue';
import PokemonDetails from '../views/PokemonDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/generations/:generationName/',
    name: 'GenerationDetails',
    component: GenerationDetails,
  },
  {
    path: '/generations/:generationName/pokedex',
    name: 'Pokedex',
    component: Pokedex,
  },
  {
    path: '/generations/:generationName/pokedex/pokemon/:pokemonName',
    name: 'PokemonDetails',
    component: PokemonDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
