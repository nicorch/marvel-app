<template>
  <div id="app">
    <NavBar />
    <!-- <div id="player">
      <iframe src="./assets/music/avangers.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
      <audio id="player" autoplay loop>
        <source src="./assets/music/avangers.mp3" type="audio/mp3">
      </audio>
    </div> -->
    <!-- <div id="nav">
      <v-btn small  elevation="2" color="error" @click="$router.push({ name: 'ComicsList'})">Comic's list</v-btn>

      <v-btn medium class="btnHome" elevation="2" color="primary" @click="$router.push({ name: 'Home'})">Home</v-btn>
      
      <v-btn small  elevation="2" color="error" @click="$router.push({ name: 'CharactersList'})">Character's list</v-btn>
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
  min-height: 970px;
  //background-image: url('assets/marvel.jpg') !important;
  //background-size: 100vh;
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
