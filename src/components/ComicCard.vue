<template>
  <div class="comic-item-card col">
      <router-link :to="url_item">
        <div class="card text-left">
            <img class="card-img-top"  :src="getImgPath(comic)" alt="">
            <div class="card-body">
            <h4 class="card-title">{{ comic.title }}</h4>
            </div>
        </div>
      </router-link>
  </div>
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
    background-color: black;
    width: 200px;
}
.comic-item-card .card-title {
    color: white;
}

.comic-item-card img {
    width: calc(100% - 10px);
    margin: 5px;
    align-content: center;
}
</style>