<template>
  <perfect-scrollbar v-show="loadWorks" class="content py-3 px-5 mt-3">
    <Work class="my-5" :content="val" v-for="(val,idx) in works" :key="idx"/>
  </perfect-scrollbar>
</template>

<script setup>
    import Work from "../components/Work.vue" 
    import axios from 'axios';
    import {ref} from "vue";
    const works = ref({})
    const loadWorks = ref(true)
    const config = {
    headers:{
            "content-type": "application/json"
        }
    }

  axios.get(import.meta.env.VITE_MAOJI_STUDIO_API_SITE+"/works", config).then(
    function(response) {
        loadWorks.value = true
        //if(response.data.length > 0) {
        works.value = response.data
        
        
      //}
        
    }
  )
  .then(
    loadWorks.value = false
  )
  .catch(
    function(response){
      console.log(response)
    }
  ).finally(function(){
    
  })
</script>

<style>
 .ps {
      height: 100%;
    }
    .ps__rail-y:hover > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y{
      background-color:#FF8C00;
    }
    .ps .ps__rail-y:hover, .ps .ps__rail-y.ps--clicking{
      background-color: #00000000;
    }

    .tab{
      margin-top: 20px;
    }
    .tab > h1{
      margin-bottom: 10px;
    }
    .content{
        margin: auto;
        max-width: 960px;
        max-height: 70vh;
        background-color: #000000aa;
        color:#ffffffcc;
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
</style>