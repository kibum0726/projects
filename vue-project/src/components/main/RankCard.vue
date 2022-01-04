<template>
  <div class="card mx-1 my-1">
    <img src="" class="card-img-top" alt="영화 포스터">
    <div class="card-body">
      <p class="card-text">{{ info }}</p>
      <i :class="{
          'bi bi-caret-down-fill rankUp' : change %2===0 ,
          'bi bi-caret-up-fill rankDown' : change %2!==0
      }"></i>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: "RankCard",
  props:{
    movieRank : {
      type : Array
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