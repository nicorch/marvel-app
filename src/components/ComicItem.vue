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
          img-height="550"
          img-alt="Image"
          img-top
          border-variant="dark"
        >
        </b-card>
      </div>

      <div class="col-md-8">
        <h1 class="mb-4 pt-4" style="font-size:20px;font-family:avengero"> {{comic.title}} </h1>
        <b-list-group style="text-align: left;">

          <b-list-group-item style="background-color: black;">
            <div class="propList">Published :</div>
            <div class="detList text-light"> {{ comic.dates[0].date | formatDate }} </div>
          </b-list-group-item>

          <b-list-group-item style="background-color: black">
            <div class="propList">Writers :</div>
            <div class="detList text-light"> {{writers}} </div>
          </b-list-group-item>

          <b-list-group-item style="background-color: black">
            <div class="propList">Penciller :</div>
            <div style="text-align: justify;" class="detList text-light"> {{penciller}} </div>
          </b-list-group-item>

          <b-list-group-item style="background-color: black">
            <div class="propList">Description:</div>
            <div class="detList text-light" :inner-html.prop="getDescription"></div>
          </b-list-group-item>

        </b-list-group>
      </div>

      <h1 class="pt-5" style="margin:0 auto;color:white;font-size:30px" v-if="this.comicsCharacters.length>0">Related Characters</h1>
      <h1 class="pt-5" style="margin:15px auto;color:white;font-size:30px" v-else>No Related Characters</h1>
      <div class="row pt-3" v-if="this.comicsCharacters.length>0">
        <div class="col-md-3 col-sm-4 mb-5 mt-3" v-for="(character, i) in comicsCharacters" :key="i">
          <CharacterCard :character="character" :id="character.id" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import api from "./../services/api"
import moment from 'moment';
import Spinner from './Spinner';
import CharacterCard from './CharacterCard';


export default {
    name: 'ComicItem',
    components: {
      Spinner,
      CharacterCard
    },
    data () {
      return{
        comic: null,
        comicsCharacters:null,
        loading: true,
        errored: false
      }
    },
    filters: {
      formatDate(value) {
        if (value) {
          return moment(String(value)).format('MMMM DD, YYYY')
        }
      }
    },
    async mounted () {
      const idComic =  this.$route.params.id ;
      try {
        const {data} = await api.marvel().fetchByIdComic(idComic)
        this.comic = data.data.results[0]
        const response = await api.marvel().fetchByIdCharactersOfComic(idComic)
        this.comicsCharacters=response.data.data.results
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
        let img=this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension
        return img;
      },
      getDescription(){
        let desc=""
        if(!this.comic.description)
          desc="Il n'y a pas de description."
        else
          desc=this.comic.description
        return desc
      },
      writers() {
        let writers = "";
        const {items} =this.comic.creators;
        if (items.length > 1) {
          items.forEach(element => {
            if(element.role==="writer"){
              writers += element.name + ", "
            }
          }); 
          writers = writers.slice(0, -2);
        } else {
          writers = 'N/A';
        }
        return writers;
      },
      penciller() {
        let penciller = "";
        const {items} =this.comic.creators;
        if (items.length > 1) {
          items.forEach(element => {
            if(element.role==="penciller" || element.role==="penciller (cover)"){
              penciller += element.name + ", "
            }
          }); 
          penciller = penciller.slice(0, -2);
        } else {
          penciller = 'N/A';
        }
        return penciller;
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