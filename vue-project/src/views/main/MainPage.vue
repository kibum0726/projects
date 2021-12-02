<template>
  <Search/>
  <div>
    asd
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
  }
}
</script>

<style scoped>

</style>