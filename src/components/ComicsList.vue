<template>
    <div>
        <h2>comics list</h2>
        <div class="row" v-for="comic in comics" :key="comic.id">
            <ComicCard :id="comic.id"></ComicCard>
        </div>
    </div>
</template>


<script>
import ComicCard from './ComicCard.vue';
import axios from 'axios'

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

</style>