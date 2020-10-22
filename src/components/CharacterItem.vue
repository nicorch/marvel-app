<template>
  <b-container>
    <b-row v-if="loading">
      <Spinner />
    </b-row>
    <div class="row text-dark pt-4" v-else>
      <div class="col-md-4">
        <b-card
          overlay
          :img-src="imageSrc"
          img-height="400"
          img-alt="Image"
          img-top
          border-variant="dark"
        >
        </b-card>
      </div>

      <div class="col-md-8">
        <h1 class="mb-4 pt-4" style="font-size:20px;font-family:avengero"> {{character.name}} </h1>
        <b-list-group style="text-align: left;">
            
          <b-list-group-item style="background-color: black">
            <div class="propList">Description:</div>
            <div class="detList text-light" :inner-html.prop="getDescription"></div>
          </b-list-group-item>

        </b-list-group>
      </div>

      <h1 class="pt-5" style="margin:0 auto;color:white;font-size:30px" v-if="this.charactersComics.length > 0">Related Comics</h1>
      <h1 class="pt-5" style="margin:15px auto;color:white;font-size:30px" v-else>No Related Comics</h1>
      <div class="row pt-3" v-if="this.charactersComics.length>0">
        <div class="col-md-4 col-sm-6 mb-5 mt-3" v-for="(comic, i) in charactersComics" :key="i">
          <ComicCard :comic="comic" :id="comic.id" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import api from "./../services/api"
import Spinner from './Spinner';
import ComicCard from './ComicCard';


export default {
    name: 'CharacterItem',
    components: {
      Spinner,
      ComicCard
    },
    data () {
      return{
        character: null,
        charactersComics:null,
        loading: true,
        errored: false
      }
    },
    async mounted () {
      const idCharacter =  this.$route.params.id
      try {
        const {data} = await api.marvel().fetchByIdCharacter(idCharacter)
        this.character = data.data.results[0]
        const response = await api.marvel().fetchByIdComicsOfCharacter(idCharacter)
        this.charactersComics=response.data.data.results
      }catch (error) {
        this.errored = true;
        this.$router.push({name:'not-found'})
      }
      setTimeout(this.outLoading, 1000);
    },
    methods: {
      outLoading:function(){
        this.loading = false
      }
    },
    computed: {
      imageSrc(){
        let img=this.character.thumbnail.path + '.' + this.character.thumbnail.extension
        return img;
      },
      getDescription(){
        let desc=""
        if(!this.character.description)
          desc="Il n'y a pas de description."
        else
          desc=this.character.description
        return desc
      }
    }
  }
</script>

<style>

.list-group-item:hover{
  opacity: 0.5;
}
.propList{
  width:30%;
  float:left;
  font-weight:bold;
  color:#e62429
}
.detList{
  width: 68%;
  float: left;
}
.related{
  text-align: center;
}

</style>