<template>
  <div class="row row-cols-1 row-cols-md-5 g-3 mx-4 p-2 bg-dark">
    <div v-for="(rankInfo,index) in movieRankings" :key="index">
      <RankCard :movieRank="rankInfo" class="col"/>
    </div>
  </div>
</template>

<script>
import {computed,ref} from 'vue'
import RankCard from '@/components/main/RankCard'
import {useStore} from 'vuex'
export default {
  name: "Rank",
  components : {
    RankCard,
  },
  setup(){
    const store = useStore()
    const mode = ref(0)
    store.dispatch('movie/searchRankings')
    const movieRankings = computed({
      get(){
        return store.getters['movie/getMovieRankings']
      },
      set(){
        store.dispatch('movie/searchRankings')
      }
    });
    return{
      movieRankings,mode
    }
  }
}
</script>

<style scoped>

</style>