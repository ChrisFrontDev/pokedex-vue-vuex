<template>
  <div class="pokedex">
    <h1>Pokedex</h1>
    <div style="display:flex;flex-wrap:wrap;justify-content:center">
      <div
        v-for="pokemon in generation.pokemons"
        style="border:1px solid gray;margin:6px;min-width:340px"
        :key="pokemon.url"
      >
        <router-link :to="`pokedex/pokemon/${pokemon.name}`">
          <div style="display:flex;flex-wrap:wrap;justify-content:center">
            <div>
              <h2>{{ pokemon.name }}</h2>
              <h3 v-for="type in pokemon.types" :key="type.name">
                {{ type.type.name }}
              </h3>
            </div>
            <img
              :src="
                `${pokemon.sprites.other['official-artwork'].front_default}`
              "
              style="width:160px"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// @ is an alias to /src
// import ListGenerations from '@/components/ListGenerations.vue';

export default {
  name: 'Pokedex',
  components: {
    // ListGenerations,
  },
  methods: {
    ...mapActions(['fetchOneGeneration']),
  },
  computed: mapGetters(['generation']),
  created() {
    if (
      Object.keys(this.generation).length === 0 &&
      this.generation.constructor === Object
    ) {
      console.log('TOBA');
      this.fetchOneGeneration(this.$route.params.generationName);
    }
  },
};
</script>
