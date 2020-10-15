<template>
  <v-col cols="3" class="comic-item-card">
      <router-link :to="url_item">
        <v-card class="card text-left" elevation="2" shaped>
            <v-img :src="getImgPath(comic)" alt=""></v-img>
                <v-card-title>{{ comic.title }}</v-card-title>
            <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>

        </v-card>
      </router-link>
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