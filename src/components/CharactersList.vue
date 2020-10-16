<template>
  <v-container>
    <h1>Liste des personnages Marvel</h1>
    <v-row>
      <CharacterCard v-for="character in characters" :id="character.id" :key="character.id"></CharacterCard>
    </v-row>
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
      info : null,
      loading: true,
      errored: false,
      characters: null
    }
  },
  async mounted() {
    try {

      const response = await axios.get("https://gateway.marvel.com:443/v1/public/characters?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
      this.characters = response.data.data.results;
    } catch (error) {
      this.errored = true;
    }
    this.loading = false
    
  }
}
</script>

<style>

</style>
