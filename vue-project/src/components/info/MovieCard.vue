<template>
  <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="..." height="200" @error="noImage">
    <div class="card-body">
      <h5 class="card-title">{{k}}</h5>
      <p class="card-text">{{k}}</p>
      <a href="#" class="text-secondary" style="text-decoration: none">자세한 정보</a>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "MovieCard",
  props : {
    movieInfo : {
      type : Array,
      required : true
    }
  },
  setup(props){
    const k = ref('test')
    const noImage = () => {
      //defluat 이미지 처리
    }
    console.log(props.movieInfo)
    return{
        k,noImage
    }
  },
}
</script>

<style scoped>

</style>