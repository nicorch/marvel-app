<template>
    <div>
        <div v-if="loading">
            Loading... 
        </div>
        <div v-else>
            <v-row>
                <v-col cols="5">
                    <center>
                        
                    <v-img :src="getImgPath(info.results[0])" alt="" width="300px"></v-img>
                    </center>
                </v-col>
                {{ info.results.name }}
                <v-col cols="7" class="container-infos-character">
                    <div class="character-name">
                        <p class="character-name-text">
                            {{ info.results[0].name }}
                        </p>
                    </div>
                    <div v-if="info.results[0].description" class="character-description">
                        <p class="character-description-text " :inner-html.prop="info.results[0].description">
                        </p>
                    </div>
                    <div v-else>
                        <p>
                            Il n'y a pas de description.
                        </p>
                    </div>
                </v-col>

            </v-row>
            <v-divider></v-divider>
            <h4>Related Comics</h4>
            <v-container v-if="infoComics.count == 0">
                Nothing
            </v-container>
            <v-container v-else>
                <v-row>
                    <ComicCard v-for="comic in infoComics" :id="comic.id" :key="comic.id"></ComicCard>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ComicCard from './ComicCard';

export default {
    name: 'CharacterItem',
    components: {
        ComicCard,
    },
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
            const {data} = await axios.get("https://gateway.marvel.com:443/v1/public/characters/"+idCharacter+"?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92&")
            console.log("aa" +data);
            this.info = data.data
            //
        } catch (error) {
            this.errored = true;
            this.$router.push({name:'not-found'})
        }
        try {
            const {data} = await axios
            .get("https://gateway.marvel.com:443/v1/public/characters/"+idCharacter+"/comics?limit=10&apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
            this.infoComics = data.data.results
        } catch (error) {
            this.errored = true;
        }
        this.loading = false;
    },
    methods: {
        getImgPath(info) {
            return info.thumbnail.path + '.' + info.thumbnail.extension;
        }
    }

}
</script>

<style>

.character-name {
    margin-bottom: 10px;
}
.character-name-text {
    font-weight: bold;
    text-align: start;
    font-size: 25px;
}

.container-infos-character {
    text-align: start;
}
.published {
    font-weight: bold;
    font-size: 20px;
}

.container-infos-character li {
    list-style: none;
}
</style>