<template>
    <v-container class="intern">
        <h1>Comic's List</h1>
        <v-progress-circular v-if="loading"
        indeterminate
        color="amber"
        ></v-progress-circular>
        <v-row v-else>
            <ComicCard v-for="comic in comics" :id="comic.id" :key="comic.id"></ComicCard>
        </v-row>
    </v-container>
</template>


<script>
import ComicCard from './ComicCard.vue';
import axios from 'axios'
import './../assets/styles.css';

export default {
  name: 'ComicsList',
  components: {
    // Demo,
    ComicCard,
  },
  data () {
    return {
      info : null,
      loading: true,
      errored: false,
      comics: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92');
      this.comics = response.data.data.results;
    } catch (error) {
      this.errored = true;
    }
    this.loading = false
  }
}

</script>

<style>
.v-progress-circular {
    top: 50%;
}
</style>