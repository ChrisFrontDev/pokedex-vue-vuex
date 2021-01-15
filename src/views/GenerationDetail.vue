<template>
  <div v-if="!isLoading" class="generation">
    <h1>{{ generation.name }}</h1>
    <h2>What Pokémon <br />are you looking for?</h2>
    <div @click="handleGoToPokedex(generation.name)">
      Pokédex
      {{ generation.pokemons ? generation.pokemons.length : 0 }}
    </div>
    <br />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '@/components/Loading.vue';

export default {
  name: 'GenerationDetails',
  components: {
    Loading,
  },
  computed: mapGetters(['generation', 'isLoading']),
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
