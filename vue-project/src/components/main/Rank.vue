<template>
  <div class="row row-cols-1 row-cols-md-5 g-3 m-4 p-4" style="background: gray">
    <div v-for="m in ranking" :key="m">
      <RankCard :rankInfo="ranking[m-1]" class="col"/>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import RankCard from '@/components/main/RankCard'
import {useStore} from 'vux'
export default {
  name: "Rank",
  components : {
    RankCard
  },
  setup(){
    const store = useStore()
    const ranking = reactive([1,2,3,4,5,6,7,8,9,10])
    const test = store.dispatch('movie/searchRankings')
    return{
      ranking,test
    }
  }
}
</script>

<style scoped>

</style>