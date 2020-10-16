
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
                <v-col cols="7" class="container-infos-comic">
                    <div class="comic-title">
                        <p class="comic-title-text">
                            {{ comic.title }}
                        </p>
                    </div>
                    <div v-if="comic.description" class="comic-description">
                        <p class="comic-description-text " :inner-html.prop="comic.description">
                        </p>
                    </div>
                    <div v-else>
                        <p>
                            Il n'y a pas de description.
                        </p>
                    </div>
                    <v-row>
                        <v-col cols="6">
                            <v-text class="published">Published :</v-text> <br>
                            <v-text>{{ comic.dates[0].date | formatDate }}</v-text>
                        </v-col>
                        <v-col cols="6">
                            <v-text class="published">Writer :</v-text> <br>
                            <ul v-for="creator in comic.creators['items']" :key="creator.id">
                                <li v-if="creator.role == 'writer'">
                                    {{creator.name}}
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="6">
                            <v-text class="published">Penciller (cover) :</v-text> <br>
                            <ul v-for="creator in comic.creators['items']" :key="creator.id">
                                <li v-if="creator.role == 'penciller (cover)'">
                                    {{creator.name}}
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="6">
                            <v-text class="published">Penciller :</v-text> <br>
                            <ul v-for="creator in comic.creators['items']" :key="creator.id">
                                <li v-if="creator.role == 'penciller' || creator.role == 'penciller (cover)'">
                                    {{creator.name}}
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <h4>Related Characters</h4>
            <v-container v-if="infoCharacters.data.count == 0">
                
                Nothing
            </v-container>
            <v-container v-else>
                <v-row>
                    <p>{{ infoCharacters.data }}</p>
                </v-row>
            </v-container>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import moment from 'moment';

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
    filters: {
        formatDate(value) {
            if (value) {
                return moment(String(value)).format('MM/DD/YYYY')
            }
        }
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
.comic-title {
    margin-bottom: 10px;
}
.comic-title-text {
    font-weight: bold;
    text-align: start;
    font-size: 25px;
}

.comic-description {
    
}

.container-infos-comic {
    text-align: start;
}
.published {
    font-weight: bold;
    font-size: 20px;
}

.container-infos-comic li {
    list-style: none;
}
</style>