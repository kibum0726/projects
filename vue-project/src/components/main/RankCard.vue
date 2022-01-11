<template>
  <div class="card mx-1 my-1">
<!--    <img :src="info.image" alt="영화 포스터"-->
<!--           fluid style="width:125px; height:204px;"/>-->
    <div style="width:125px; height:204px; background-color:red">
    </div>
    <div class="card-body">
      <p class="card-text">{{ info.movieNm || '이름이름이름'}}</p>
      <div v-if="info.rankOldAndNew === 'NEW'">
        {{info.rank}}
        <i class="material-icons" style="color:red">
          fiber_new
        </i>
      </div>
      <div v-else>
        {{info.rank}}
      </div>
    </div>
  </div>
</template>
<script>
import {reactive} from 'vue'
export default {
  name: "RankCard",
  props:{
    movieRank : {
      type : Object
    }
  },
  setup(props){
    const info = reactive(props.movieRank)
    console.log(info)
    return{
      info
    }
  }
}
</script>

<style scoped>
  .rankUp{
    color: red
  }
  .rankDown{
    color: blue
  }
</style>