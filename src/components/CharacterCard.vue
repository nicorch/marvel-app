<template>
    <v-col cols="3" class="character-item-card">
      <router-link :to="url_item">
        <v-card class="card text-left" elevation="2" shaped>
            <v-img :src="getImgPath(character)" alt=""></v-img>
                <v-card-title>{{ character.name }}</v-card-title>

        </v-card>
      </router-link>
  </v-col>
</template>

<script>
import axios from "axios";

export default {
    name: 'CharacterCard',
    props: {
        id: null
    },
    data (){
        return {
            character: null,
            url_item: null,
        }
    },
    methods: {
        getImgPath(character) {
            return character.thumbnail.path + '.' +character.thumbnail.extension
        }
    },
    async mounted() {
        this.url_item = '/Character/'+ this.id;

        try {
            
            const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters/'+this.id+'?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92');
            this.character = response.data.data.results[0];
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style>
.character-item-card img {
    width: calc(100% - 10px);
    margin: 5px;
    align-content: center;
}
</style>