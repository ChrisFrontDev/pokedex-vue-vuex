<template>
  <div class="home">
    <h1>select your game:</h1>
    <ListGenerations />
  </div>
</template>

<script>
// @ is an alias to /src
import ListGenerations from '@/components/ListGenerations.vue';

export default {
  name: 'Home',
  components: {
    ListGenerations,
  },
};
</script>
