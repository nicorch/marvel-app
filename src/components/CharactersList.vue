<template>
  <v-container>
    <h1>Liste des personnages Marvel</h1>
    <b-row v-if="loading">
        <Spinner />
    </b-row>
    <b-row v-else>
      <div class="inputSearch">
        <b-form-input class="btnSearch" v-model="searchText" placeholder="Recherche Personnage"></b-form-input>
      </div>
    </b-row>
    <div class="row pt-4 displaycharacters" v-if="!loading">
      <div class="col-md-4 col-sm-6 mb-5 mt-3" v-for="(character, i) in charactersToDisplay" :key="i">
        <CharacterCard :character="character" :id="character.id" />
      </div>
    </div>
  </v-container>
</template>

<script>
import CharacterCard from './CharacterCard';
import api from "./../services/api";
import Spinner from './Spinner';

export default {
  name: 'CharactersList',
  components: {
    CharacterCard,
    Spinner
  },
  data () {
    return {
      loading: true,
      errored: false,
      allCharacters: [],
      searchText:""
    }
  },
  methods:{
    outLoading:function(){
      this.loading = false
    }
  },
  async mounted() {
    try {
      const {data} = await api.marvel().fetchAllCharacters()
      //Get characters as a table of objects, that contain : id,name,description,image(path.extension),comics
      this.allCharacters = data.data.results;
    } catch (error) {
      this.errored = true;
    }
    setTimeout(this.outLoading, 1000);
  },
  computed:{
      charactersToDisplay(){
        let charactersToDisplay=[]
        if(this.searchText==""){
          charactersToDisplay=this.allCharacters
        }
        else{
          charactersToDisplay=this.allCharacters.filter(c=>c.name.toLowerCase().includes(this.searchText))
        }
        return charactersToDisplay
      }
    }
}
</script>

<style>
h1{
  font-family: american;
  color: #e62429;
}

.inputSearch{
  margin: 20px auto;
  font-family: marvel;
  width: 400px;
}
.btnSearch,input#__BVID__11 {
    color: black;
    text-align: center;
    font-size: 20px;
}
</style>
