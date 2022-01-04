<template>
  <div class="input-group mb-3 fluid p-4">
    <input type="text" class="form-control"
           placeholder="영화 제목을 입력해 주세요"
           aria-label="Example text with button addon"
           aria-describedby="button-addon1"
           v-model= "search"
           @keyup.enter="submit"
    >
    <button class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            @click="submit">Button
    </button>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  name: "Search",
  setup(){
    const store = useStore()
    const router = useRouter()
    const search = ref("")
    const submit = ()=>{
      console.log(search.value);
      store.dispatch('movie/searchMovies',{movieName : search.value, display : '10'});
      router.push('/info')
    }
    return {
      search,submit
    }
  }
}
</script>

<style scoped>

</style>