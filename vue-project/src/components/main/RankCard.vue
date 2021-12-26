<template>
  <div class="card mx-1 my-1">
    <img src="" class="card-img-top" alt="영화 포스터">
    <div class="card-body">
      <p class="card-text">영화제목</p>
      <i :class="{
          'bi bi-caret-down-fill rankUp' : change %2===0 ,
          'bi bi-caret-up-fill rankDown' : change %2!==0
      }">1</i>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "RankCard",
  props :{
    rankInfo : {
      type : Number
    }
  },
  setup(props){
    console.log(props.rankInfo)
    const change = ref(props.rankInfo)
    return{
      change
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