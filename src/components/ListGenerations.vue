<template>
  <div>
    <div class="container" v-if="generationsList">
      <div
        class="card"
        v-for="generation in generationsList.results"
        :key="generation.url"
        @click="handleGoToDetails(generation)"
        style="flex-direction:column"
      >
        <h3>{{ generation.name }}</h3>
        <img :src="getImgUrl(generation.name)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListGenerations',
  methods: {
    ...mapActions(['fetchGenerations']),
    handleGoToDetails: function(generation) {
      this.$router.push(`/generations/${generation.name}`);
    },
    getImgUrl(name) {
      var images = require.context('../assets/', false, /\.png$/);
      return images('./' + name + '.png');
    },
  },
  computed: mapGetters(['generationsList']),
  created() {
    this.fetchGenerations();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
