<template class="container">
  <Search/>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div v-for="m in movieData" :key="m">
      <MovieCard :movieInfo="movieData" class="m-3"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/info/MovieCard'
import Search from '@/components/main/Search'
import {useStore} from 'vuex'
import {reactive} from 'vue'
export default {
  name: "Info",
  components : {
    MovieCard,Search
  },
  setup(){
    const store = useStore()
    const movieData = reactive(store.getters['movie/getMovieInfo'])
    return{
      movieData
    }
  }
}
</script>

<style scoped>

</style>