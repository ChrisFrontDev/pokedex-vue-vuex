<template>
  <div class="home">
    <h1>Select Your Game Generation:</h1>
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
