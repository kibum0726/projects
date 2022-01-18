<template>
  <iframe :src="link()">

  </iframe>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: "video",
  props:{
    movie_id : {
      type : String
    }
  },
  setup(props){
    const store = useStore()
    store.dispatch('movie/actApi',`/movie/${props.movie_id}/videos`)
    const video = computed({
     get(){
        return store.getters['movie/getVideo']
     },
     set(){
        store.dispatch('movie/actApi',`/movie/${props.movie_id}/videos`)
     }
    })
    const link = (vID) => `https://www.youtube.com/embed/${vID}`
    return {
      video,
      link
    }
  }
}
</script>

<style scoped>

</style>