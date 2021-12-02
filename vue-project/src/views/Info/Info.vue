<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      {{ selectNumber }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
      <li v-for="(option,index) in options" v-bind:key="index" @click="changeOption(option)">{{option}}</li>
    </ul>
    <table>
      <tr v-for="k in selectNumber/5" :key="k">
        <td v-for="j in 5" :key="j">
          <MovieCard/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MovieCard from '@/components/info/MovieCard'
import {ref,reactive} from 'vue'
export default {
  name: "Info",
  components : {
    MovieCard
  },
  setup(){
    const selectNumber = ref(5);
    const options = reactive([5,10,15,20])
    const changeOption =(value)=>{
      selectNumber.value = value
    }
    return{
      selectNumber,
      options,
      changeOption
    }
  }
}
</script>

<style scoped>

</style>