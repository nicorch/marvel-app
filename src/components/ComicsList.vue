<template>
    <b-container>
        <h1>Liste des comics marvel</h1>
        <b-row v-if="loading">
          <Spinner />
        </b-row>
        <div class="row pt-4" v-else>
          <div class="col-md-4 col-sm-6 mb-5 mt-3" v-for="(comic, i) in comics" :key="i">
            <ComicCard :comic="comic" :id="comic.id" />
          </div>
        </div>
    </b-container>
</template>


<script>
import ComicCard from './ComicCard.vue';
import Spinner from './Spinner';
import api from "./../services/api";
import './../assets/styles.css';

export default {
  name: 'ComicsList',
  components: {
    ComicCard,
    Spinner
  },
  data () {
    return {
      loading: true,
      errored: false,
      comics: []
    }
  },
  methods:{
    outLoading:function(){
      this.loading = false
    }
  },
  async mounted() {
    try {
      const {data} = await api.marvel().fetchAllComics()
      //Get all 27 comic as a table of objects, that contain : id,title,description,image(path.extension),creators,characters
      this.comics = data.data.results
    } catch (error) {
      this.errored = true
    }
    setTimeout(this.outLoading, 900);
  }
}

</script>

<style>

h1{
  font-family: american;
  color: #e62429;
}

.v-progress-circular {
    top: 50%;
}
</style>