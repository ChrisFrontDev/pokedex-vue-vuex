<template>
  <div class="generation">
    <h1>{{ generation.name }}</h1>
    <h2>What Pokémon <br />are you looking for?</h2>
    <div @click="handleGoToPokedex(generation.name)">
      Pokédex
      {{ generation.pokemons ? generation.pokemons.length : 0 }}
    </div>
    <br />
    <!-- <div>moves {{ generation.moves.length }}</div> -->
  </div>
</template>

<script>
// import ListGenerations from '@/components/ListGenerations.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GenerationDetails',
  components: {
    // ListGenerations,
  },
  computed: mapGetters(['generation']),
  methods: {
    ...mapActions(['fetchOneGeneration']),
    handleGoToPokedex: function(name) {
      this.$router.push(`/generations/${name}/pokedex`);
    },
  },
  created() {
    this.fetchOneGeneration(this.$route.params.generationName);
  },
};
</script>
