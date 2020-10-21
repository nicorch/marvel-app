<template>
  <div id="app">
    <div id="player">
    <iframe src="./assets/music/avangers.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
    <audio id="player" autoplay loop>
    <source src="./assets/music/avangers.mp3" type="audio/mp3">
</audio>
    </div>
    <!-- <div id="nav">
      <v-btn small  elevation="2" color="error" @click="$router.push({ name: 'ComicsList'})">Comic's list</v-btn>

      <v-btn medium class="btnHome" elevation="2" color="primary" @click="$router.push({ name: 'Home'})">Home</v-btn>
      
      <v-btn small  elevation="2" color="error" @click="$router.push({ name: 'CharactersList'})">Character's list</v-btn>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #181718;
  //background-image: url('assets/mavel_wall.png') !important;
  //background-size: 100%;
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
