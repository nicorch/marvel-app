<template>
  <div>
    <h1>char list</h1>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else>
  </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharactersList',
  data () {
    return {
      info : null,
      loading: true,
      errored: false
    }
  },
  async mounted() {
    try {

      const response = await axios.get("https://gateway.marvel.com:443/v1/public/characters?apikey=55dd7a6256658f33a00034a161f9c8f7&ts=1&hash=8e821d4269b2d7f35e61d11ecd39ff92")
      this.info = response.data;
    } catch (error) {
      this.errored = true;
    }
    this.loading = false
    
  }
}
</script>

<style>

</style>
