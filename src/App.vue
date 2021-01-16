<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  text-decoration: none;
}
button {
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
}

h1 {
  padding: 24px;
}
h2 {
  padding: 12px;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* Components Style */

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 16px;
  background: #fff;
  box-shadow: 0px 8px 23px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  color: #000;

  label {
    color: #303943;
    opacity: 40%;
    font-weight: 400;
  }

  img {
    width: 131px;
  }
}

.type-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.type-tag {
  padding: 4px 16px;
  margin: 6px;
  background: rgba(255, 255, 255, 0.25);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 38px;
}

/* Colors */

.red {
  background-color: #fb6c6c;
  color: #fff;
}
.brown {
  background-color: #b1736c;
  color: #fff;
}

.gray {
  background-color: #d0d0d0;
  color: #2c3e50;
}

.blue {
  background-color: #4676a4;
  color: #fff;
}

.black {
  background-color: #303943;
  color: #fff;
}

.green {
  background-color: #48d0b0;
  color: #fff;
}

.purple {
  background-color: #7c538c;
  color: #fff;
}

.pink {
  background-color: #ff999b;
  color: #fff;
}

.yellow {
  background-color: #ffce4b;
  color: #fff;
}

.white {
  background-color: #e3e0ff;
  color: #2c3e50;
}
</style>
