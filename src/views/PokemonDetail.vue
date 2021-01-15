<template>
  <div v-if="!isLoading" :class="`pokemon ${pokemon.species.color.name}`">
    <h1>{{ pokemon && pokemon.name }}</h1>
    <div class="type-list">
      <div class="type-tag" v-for="type in pokemon.types" :key="type.name">
        <h3>
          {{ type.type.name }}
        </h3>
      </div>
    </div>
    <img :src="`${pokemon.sprites.other['official-artwork'].front_default}`" />
    <div class="pokemon-info">
      <h2>About</h2>
      <p>
        {{ findDescription(pokemon.species.flavor_text_entries) }}
      </p>
      <div class="card">
        <div style="justify-content:center;">
          <label>Height</label>
          <p>{{ pokemon.height }}</p>
        </div>
        <div>
          <label>Weight</label>
          <p>{{ pokemon.weight }}</p>
        </div>
      </div>
      <div>
        <h3>Stats</h3>
        <div class="card">
          <div v-for="stat in pokemon.stats" :key="stat.stat.name">
            <div class="stats-group" style="justify-content:center;">
              <label>{{ stat.stat.name }}</label>
              <p>{{ stat.base_stat }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// @ is an alias to /src
import Loading from '@/components/Loading.vue';

export default {
  name: 'Pokemon',
  components: {
    Loading,
  },
  methods: {
    ...mapActions(['fetchOneGeneration']),
    findDescription: function(flavorTextEntries) {
      console.log(flavorTextEntries);
      const description = flavorTextEntries.find(
        entry => entry.language.name === 'en',
      );
      return description.flavor_text;
    },
  },
  computed: {
    ...mapGetters(['getPokemonByName', 'generation', 'isLoading']),
    pokemon: function() {
      return this.getPokemonByName(this.$route.params.pokemonName);
    },
  },
  created() {
    if (
      Object.keys(this.generation).length === 0 &&
      this.generation.constructor === Object
    ) {
      this.fetchOneGeneration(this.$route.params.generationName);
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 234px;
}
.pokemon-info {
  color: #000;
  background: #fff;
  border-radius: 34px 34px 0 0;

  p {
    font-size: 14px;
    line-height: 28px;
    font-weight: 600;
    padding: 8px;
  }

  h3 {
    /* text-align: left; */
    margin: 16px;
  }

  .stats-group {
    width: 100px;
    margin: 8px;
  }
}
</style>
