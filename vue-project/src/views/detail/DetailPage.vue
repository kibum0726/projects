<template>
  <div class="row">
    <div class="col">
      <img :src="imageSrc(detailInfo.poster_path)" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col">
      <div>
        {{detailInfo.title}}
        <p>{{detailInfo.original_title}}
          {{detailInfo.release_date.split("-")[0]}}</p>
      </div>
      <div>
        상영 시간 : {{detailInfo.runtime}} 분
      </div>
      <hr/>
      <div>
        평점
        <i v-for="fStar in getStar(detailInfo.vote_average)" :key="fStar" class="bi bi-star-fill"></i>
        <i v-if="getStar(detailInfo.vote_average)*10/10" class="bi bi-star-half"></i>
        {{ detailInfo.vote_average }}
      </div>
      <hr/>
      <div>
        {{detailInfo.tagline}}
        {{detailInfo.overview}}
      </div>

      <div class="row">
        <p>제작사</p>
        <div v-for="(companies,index) in detailInfo.production_companies" :key="index" class="col">
          <img :src="imageSrc(companies.logo_path)" class="img-fluid rounded-start" alt="...">
        </div>
      </div>
      <div>
        <button type="button" @click="redirectHomePage(detailInfo.homepage)">홈페이지 바로가기</button>
      </div>
    </div>
  </div>

</template>


<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {computed,inject} from 'vue'
export default {
  name: "DetailPage",
  setup(){
    const route = useRoute()
    const store = useStore()
    const imageSrc = inject('imageSrc')
    store.dispatch('movie/actApi',`movie/${route.params.id}`)
    const detailInfo = computed({
      get(){
        return  store.getters['movie/getDetails']
      },
      set(value){
        store.dispatch('movie/actApi',`movie/${value}`)
      }
    })
    const getStar = (value) =>{
      let star = (value*5)/10
      return star.toFixed(1)
    }
    const redirectHomePage = (url) => window.open(url)
    return{
      detailInfo,getStar,imageSrc,redirectHomePage
    }
  }
}
</script>

<style scoped>
</style>