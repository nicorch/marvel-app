<template id="aa">
  <b-container>
    <b-navbar toggleable="lg" type="dark" id="myNav">
      <b-navbar-brand @click="$router.push({ name: 'Home'})"><span class="brand">Marvel Application</span></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-button size="md" class="m-2 btnNav" variant="danger" @click="$router.push({ name: 'ComicsList'})">Marvel Comics</b-button>
          <b-button size="md" class="m-2 btnNav" variant="danger" @click="$router.push({ name: 'CharactersList'})">Marvel Characters</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="player">
        <iframe src="./../assets/music/avangers.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
        <audio id="player" autoplay loop>
          <source src="./../assets/music/avangers.mp3" type="audio/mp3">
        </audio>
      </div> 
  </b-container>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.brand{
  font-family: marvel;
  font-size: 45px;
  cursor: pointer;
}

.btnNav{
  background-color: #e62429;
  font-family: marvel;
  font-size: 25px;
}
.container{
  padding: 0;
}
</style>