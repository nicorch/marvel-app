<template>
  <v-container>
    <h1>Liste des personnages Marvel</h1>
    <!-- <v-row v-if="loading">
      <v-col cols="12">
        Loading ...
      </v-col> 
    </v-row>
    <v-row v-else>
      <CharacterCard v-for="character in characters" :id="character.id" :key="character.id"></CharacterCard>
    </v-row> -->
    <div class="row pt-4">
      <div class="col-md-4 col-sm-6 mb-5 mt-3" v-for="(character, i) in characters" :key="i">
        <CharacterCard :character="character" :id="character.id" />
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default {
  name: 'CharactersList',
  components: {
    CharacterCard,
  },
  data () {
    return {
      loading: true,
      errored: false,
      characters: []
    }
  },
  async mounted() {
    try {
      const {data} = await axios.get("https://gateway.marvel.com:443/v1/public/characters?hash=8ffd6a155254bc99459933656517cf50&ts=timestamp&apikey=c37ea365e6a1a371ef21f714e01af669")
      //Get characters as a table of objects, that contain : id,name,description,image(path.extension),comics
      console.log(data.data.results)
      this.characters = data.data.results;
    } catch (error) {
      this.errored = true;
    }
    this.loading = false 
  }
}
</script>

<style>
h1{
  font-family: american;
  color: #e62429;
}
</style>
