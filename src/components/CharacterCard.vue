<template>
  <b-card
    bg-variant="dark"
    header-class="card_header"
    :header="character.name"
    text-variant="white"
    class="text-center font-weight-bolder"
    :img-src="imageSrc"
    img-height="350"
    img-top
  >
    <b-button class="btnStyle">
      <RouterLink style="color: inherit;text-decoration: none;" :to="{name: 'CharacterItem', params: {id: id}}" >
        Plus d'infos
      </RouterLink>
    </b-button>
  </b-card>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        id: Number,
        character: Object
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
        let img=this.character.thumbnail.path + '.' + this.character.thumbnail.extension
        return img;
      }
    }
}
</script>

<style>
.btnStyle{
    background-color: #e62429 !important;
    border-color:#e62429;
}

.card-header{
  font-size: 18px;
}

</style>