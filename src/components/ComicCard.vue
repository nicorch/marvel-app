<template>
  <b-card
    header-class="card_header"
    :header="comic.title"
    text-variant="white"
    class="text-center cardStyle"
    :img-src="imageSrc"
    img-height="500"
    img-top
  >
    <b-button variant="dark">
      <RouterLink style="color: inherit;text-decoration: none;" :to="{name: 'ComicItem', params: {id: id}}" >
        Plus d'infos
      </RouterLink>
    </b-button>
  </b-card>
</template>

<script>
export default {
    name: 'ComicCard',
    props: {
        id: Number,
        comic: Object
    },
    data() {
      return {
      }
    },
    methods: {
      getPartOfDescription(description){
        if(!description){
          return "Pas de description"
        }
        return description.slice(0,90) + "..."
      }
    },
    computed:{
      imageSrc(){
        let img=this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension
        return img;
      }
    }
}
</script>

<style>
.cardStyle{
    background-color: #e62429 !important;
    border: none;
}

.card-header{
  font-size: 14px;
  font-family: avengero;
}

</style>