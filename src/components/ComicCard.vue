<template>
  <v-col cols="3" class="comic-item-card">
      <div v-if="loading">Loading</div>
      <div v-else>
            <v-card class="card text-left" elevation="2" shaped>
                <router-link :to="url_item">
                    <v-img :src="getImgPath(comic)" alt=""></v-img>
                </router-link>
                    <v-card-title>{{ comic.title }}</v-card-title>
            </v-card>
    </div>
  </v-col>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ComicCard',
    props: {
        id: null,
    },
    data() {
        return {
            comic: null,
            url_item: null,
            loading: true,
        }
    },
    methods: {
        getImgPath(comic) {
            return comic.thumbnail.path + '.' + comic.thumbnail.extension;
        }
    },
    async mounted() {
        this.url_item = '/Comic/' + this.id;

        try {
            const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics/'+this.id+'?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92');
            this.comic = response.data.data.results[0];
        } catch (error) {
            console.log(error);
        }
        this.loading = false
    }
}
</script>

<style>
.comic-item-card {
    /* background-color: black;
    width: 200px; */
}
.comic-item-card .card-title {
    /* color: white; */
}

.comic-item-card img {
    width: calc(100% - 10px);
    margin: 5px;
    align-content: center;
}
</style>