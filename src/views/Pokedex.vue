<template>
  <div class="pokedex">
    <h1>Pokedex</h1>
    <li v-for="pokemon in generation.pokemon_species" :key="pokemon.url">
      <img :src="getImgUrl(pokemon.url)" />
      {{ pokemon.name }}
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// @ is an alias to /src
// import ListGenerations from '@/components/ListGenerations.vue';

export default {
  name: 'Pokedex',
  components: {
    // ListGenerations,
  },
  computed: mapGetters(['generation']),
  methods: {
    getImgUrl(url) {
      const splitedString = url.split('/');
      const pokemonNumber = `https://pokeres.bastionbot.org/images/pokemon/${splitedString[6]}.png`;
      return pokemonNumber;
    },
  },
};
</script>
