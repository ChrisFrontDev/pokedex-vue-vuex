<template>
  <div>
    <div v-if="generationsList">
      <ul>
        <li
          v-for="generation in generationsList.results"
          :key="generation.url"
          @click="handleGoToDetails(generation)"
          class=""
        >
          <h3>{{ generation.name }}</h3>
        </li>
      </ul>
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
  },
  computed: mapGetters(['generationsList']),
  created() {
    this.fetchGenerations();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
