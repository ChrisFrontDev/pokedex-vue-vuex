<template>
  <!-- REMOVED FROM USER FLOW TO IMPROVE UX BUT WILL USE
  LATER TO GO TO ANOTHER ROUTES IN THE FUTURE EX:MOVES, ABILITIES, ITEMS ,LOCATIONS ETC) -->
  <div v-if="!isLoading" class="generation">
    <h1>{{ generation.name }}</h1>
    <h2>What Pokémon <br />are you looking for?</h2>
    <div class="container">
      <button @click="handleGoToPokedex(generation.name)">
        <div class="card green">
          <h2>Pokédex</h2>
          {{ generation.pokemons ? generation.pokemons.length : 0 }}
        </div>
      </button>
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
