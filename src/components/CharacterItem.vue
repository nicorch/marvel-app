<template>
    <div>
        <h2>{{ info.data.results[0].name }}</h2>
        <div v-if="info.data.results[0].description">
        <p>{{ info.data.results[0].description }}</p>
        </div>
        <div v-else>il n'y a pas  de description</div>
        <p>{{ infoComics.data.results }}</p>
        
        <!-- <div v-for="comics in infosComics" :key="">
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CharacterItem',
    data () {
        return{
            info: null,
            loading: true,
            errored: false,
            infoComics: null
        }
    },
    created () {
        
    },
    async mounted () {
        const idCharacter =  this.$route.params.id ;
        try {
            
            const {data} = await axios.get("https://gateway.marvel.com:443/v1/public/characters/"+idCharacter+"?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
            this.info = data
        } catch (error) {
            this.errored = true;
        }
        try {
            const {data} = await axios
            .get("https://gateway.marvel.com:443/v1/public/characters/"+idCharacter+"/comics?limit=10&apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
            this.infoComics = data
        } catch (error) {
            this.errored = true;
        }

        this.loading = false;
    },
    methods: {

    }

}
</script>

<style>

</style>