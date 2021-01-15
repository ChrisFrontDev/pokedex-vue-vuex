<template>
  <div class="pokemon">
    <h1>{{ pokemon && pokemon.name }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// @ is an alias to /src
// import ListGenerations from '@/components/ListGenerations.vue';

export default {
  name: 'Pokemon',
  components: {
    // ListGenerations,
  },
  methods: {
    ...mapActions(['fetchOneGeneration']),
  },
  computed: {
    ...mapGetters(['getPokemonByName', 'generation']),
    pokemon: function() {
      return this.getPokemonByName(this.$route.params.pokemonName);
    },
  },
  created() {
    if (
      Object.keys(this.generation).length === 0 &&
      this.generation.constructor === Object
    ) {
      console.log('OI  MEU SITE');
      this.fetchOneGeneration(this.$route.params.generationName);
    }
  },
};
</script>
