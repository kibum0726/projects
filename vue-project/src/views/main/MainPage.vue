<template>
  <Search/>
  <div>
    asd
    <button type="button" @click="go"> bbb </button>
  </div>
</template>

<script>
import Search from '@/components/main/Search'
import {onMounted } from 'vue'
export default {
  name: "MainPage",
  components : {
    Search
  },
  setup(){
    onMounted(()=>console.log(process.env))
    const go= ()=>{
      this.$router.push('Info')
    }
    return{
      go
    }

  }
}
</script>

<style scoped>

</style>