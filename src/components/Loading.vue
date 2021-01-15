<template>
  <div class="loading">
    <img class="rotate" src="../assets/pokeball.svg" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotate {
  width: 100px;
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
