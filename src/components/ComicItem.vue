
<template>
    <div>
        <div v-if="loading">
            Loading... 
        </div>
        <div v-else>
            <v-row>
                <v-col cols="5">
                    <center>
                        <v-img :src="getImgPath(comic)" alt="" width="300px"></v-img>
                    </center>
                </v-col>
                <v-col cols="7">
                     <h2>{{ comic.title }}</h2>
                    <div v-if="comic.description">
                        <p>{{ comic.description }}</p>
                    </div>
                    <div v-else>il n'y a pas  de description</div>
                    <p>{{ infoCharacters.data.results }}</p>
                </v-col>
            </v-row>
            

           
            
            <!-- <div v-for="comics in infosComics" :key="">
            </div> -->
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'ComicItem',
    data () {
        return{
            comic: null,
            loading: true,
            errored: false,
            infoCharacters: null
        }
    },
    created () {
        
    },
    async mounted () {
        const idComic =  this.$route.params.id ;
        try {
            const {data} = await axios.get("https://gateway.marvel.com:443/v1/public/comics/"+idComic+"?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
            this.comic = data.data.results[0];
        } catch (error) {
            this.errored = true;
        }
        try {
            const {data} = await axios
            .get("https://gateway.marvel.com:443/v1/public/comics/"+idComic+"/characters?limit=10&apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
            this.infoCharacters = data
        } catch (error) {
            this.errored = true;
        }
        this.loading = false;
    },
    methods: {
        getImgPath(comic) {
            return comic.thumbnail.path + '.' + comic.thumbnail.extension;
        }
    }
}
</script>

<style>

</style>