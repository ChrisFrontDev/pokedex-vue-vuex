<template>
  <div v-if="!isLoading" class="home">
    <h1>Select Your Game Generation:</h1>
    <ListGenerations :generations="generationsList.results" />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import Loading from '@/components/Loading.vue';
import ListGenerations from '@/components/ListGenerations.vue';

export default {
  name: 'Home',
  components: {
    ListGenerations,
    Loading,
  },
  methods: {
    ...mapActions(['fetchGenerations']),
  },
  computed: mapGetters(['generationsList', 'isLoading']),
  created() {
    this.fetchGenerations();
  },
};
</script>
