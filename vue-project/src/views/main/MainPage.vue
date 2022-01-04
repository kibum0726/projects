<template>
  <Search/>
  <ButtonGroup/><br/>
  <Rank/>
</template>

<script>
import Search from '@/components/main/Search'
import Rank from '@/components/main/Rank'
import ButtonGroup from '@/components/common/ButtonGroup'
export default {
  name: "MainPage",
  components : {
    Search,Rank,ButtonGroup
  },
  setup(){
  }
}
</script>
<style scoped>

</style>