<template>
  <Search/>
  <ButtonGroup/><br/>
  <MovieTable/>
</template>

<script>
import Search from '@/components/main/Search'
import MovieTable from '@/components/main/movieTable'
import ButtonGroup from '@/components/common/ButtonGroup'
export default {
  name: "MainPage",
  components : {
    Search,MovieTable,ButtonGroup
  },
  setup(){
  }
}
</script>
<style scoped>

</style>