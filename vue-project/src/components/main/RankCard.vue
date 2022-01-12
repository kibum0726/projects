<template>
  <div class="card mx-1 my-1 text-white bg-dark" @click="goDetails(info.id)">
    <img :src="imageSrc(info.poster_path)" class="card-img"
         alt="영화 포스터" style=" height: auto; min-height: 100%;"/>
    <div class="card-body">
      <p class="card-text text-start">{{ info.title }}</p>
      <p class="card-text text-start">{{ info.release_date }}</p>
    </div>
  </div>
</template>
<script>
import {reactive,inject} from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: "RankCard",
  props:{
    movieRank : {
      type : Object
    }
  },
  setup(props){
    const router = useRouter()
    const info = reactive(props.movieRank)
    const imageSrc = inject('imageSrc')
    const goDetails = (value) =>{
      router.push({
        name : 'details',
        params : {id : value}
      })
    }
    return{
      info,
      imageSrc,
      goDetails
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