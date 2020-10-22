<template>
  <div id="app">
    <NavBar />
    <!-- <div id="player">
      <iframe src="./assets/music/avangers.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
      <audio id="player" autoplay loop>
        <source src="./assets/music/avangers.mp3" type="audio/mp3">
      </audio>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
export default {
  name:"app",
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #181718;
  height: 100%;
  min-height: 100vh;
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

.btnHome {
  margin: 10px;
}
</style>
