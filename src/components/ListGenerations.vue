<template>
  <div>
    <div class="container" v-if="generations">
      <div
        class="card"
        v-for="generation in generations"
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
export default {
  name: 'ListGenerations',
  props: ['generations'],
  methods: {
    handleGoToDetails: function(generation) {
      this.$router.push(`/generations/${generation.name}`);
    },
    getImgUrl(name) {
      var images = require.context('../assets/', false, /\.png$/);
      return images('./' + name + '.png');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
