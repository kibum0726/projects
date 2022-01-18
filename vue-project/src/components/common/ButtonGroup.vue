<template>
  <div class="d-flex flex-row ms-4">
    <div class="btn-group" role="group" aria-label="Basic toggle button group">
      <div v-for="m in 3" :key="m">
        <button type="button" class="btn" @click="searchRank(mode[m-1].value)">{{mode[m-1].text}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: "ButtonGroup",
  setup(){
    const mode = reactive([
      {text : '전체',value : 0},
      {text :'국내',value :'K'},
      {text : '외국', value : 'F'}
    ])
    return{
      mode
    }
  }
}
</script>

<style scoped>

</style>