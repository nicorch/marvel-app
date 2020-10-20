<template>
    <b-container>
        <h1>Comic's List</h1>
        <!-- <v-progress-circular v-if="loading"
          indeterminate
          color="amber"
        ></v-progress-circular>
        <v-row v-else>
            <ComicCard v-for="comic in comics" :id="comic.id" :key="comic.id"></ComicCard>
        </v-row> -->
        <div class="row pt-4">
          <div class="col-md-3 col-sm-6 mb-5 mt-3" v-for="(comic, i) in comics" :key="i">
            <p>{{ comic.title }}</p>
          </div>
        </div>
    </b-container>
</template>


<script>
//import ComicCard from './ComicCard.vue';
import axios from 'axios'
import './../assets/styles.css';

export default {
  name: 'ComicsList',
  components: {
    //ComicCard,
  },
  data () {
    return {
      //info : null,
      loading: true,
      errored: false,
      comics: []
    }
  },
  async mounted() {
    try {
      const {data} = await axios.get('https://gateway.marvel.com:443/v1/public/comics?limit=27&hash=8ffd6a155254bc99459933656517cf50&ts=timestamp&apikey=c37ea365e6a1a371ef21f714e01af669')
      //Get all 27 comic as a table of objects, that contain : id,title,description,image(path.extension),creators,characters
      this.comics = data.data.results
      console.log(this.comics);
    } catch (error) {
      this.errored = true
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