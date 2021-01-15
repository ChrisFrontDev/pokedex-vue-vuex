<template>
  <div class="pokedex">
    <h1>Pokedex</h1>
    <div class="container">
      <div
        v-for="pokemon in generation.pokemons"
        style="min-width:340px"
        :key="pokemon.url"
      >
        <router-link :to="`pokedex/pokemon/${pokemon.name}`">
          <div :class="`${pokemon.species.color.name} card`">
            <div>
              <h2>{{ pokemon.name }}</h2>
              <div
                class="type-tag"
                v-for="type in pokemon.types"
                :key="type.name"
              >
                <h3>
                  {{ type.type.name }}
                </h3>
              </div>
            </div>
            <img
              :src="
                `${pokemon.sprites.other['official-artwork'].front_default}`
              "
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
