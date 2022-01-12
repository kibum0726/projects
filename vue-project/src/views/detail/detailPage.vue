<template>
  <div>
    detail detail
  </div>
</template>

<script>
import {useRoute } from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: "detailPage",
  setup(){
    const route = useRoute()
    const store = useStore()
    store.dispatch('movie/searchDetails', route.params.id)
    const detailInfo = computed({
      get(){
        return  store.getters['movie/getDetails']
      },
      set(value){
        store.dispatch('movie/searchDetails',value)
      }
    })
    console.log(detailInfo)
    return{
      detailInfo
    }
  }
}
</script>

<style scoped>

</style>