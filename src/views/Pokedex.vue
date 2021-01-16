<template>
  <div v-if="!isLoading" class="pokedex">
    <h1>Pokedex</h1>
    <div class="container">
      <router-link
        :to="`pokedex/pokemon/${pokemon.name}`"
        v-for="pokemon in generation.pokemons"
        :key="pokemon.url"
      >
        <div
          :class="`${pokemon.species.color.name} card`"
          style="min-width:340px"
        >
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
              `${
                pokemon.sprites.other['official-artwork'].front_default
                  ? pokemon.sprites.other['official-artwork'].front_default
                  : '../assets/not-found.png'
              }`
            "
          />
        </div>
      </router-link>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Pokedex',
  components: {
    Loading,
  },
  methods: {
    ...mapActions(['fetchOneGeneration']),
  },
  computed: mapGetters(['generation', 'isLoading']),
  created() {
    if (
      this.generation.constructor === Object &&
      this.$route.params.generationName !== this.generation.name
    ) {
      this.fetchOneGeneration(this.$route.params.generationName);
    }
  },
};
</script>
