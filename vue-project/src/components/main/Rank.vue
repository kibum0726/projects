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
export default {
  name: "Rank",
  components : {
    RankCard
  },
  setup(){
    const ranking = reactive([1,2,3,4,5,6,7,8,9,10])
    return{
      ranking
    }
  }
}
</script>

<style scoped>

</style>