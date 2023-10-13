<template>
  
    <perfect-scrollbar v-show="loadAbout" class="content py-3 px-5 mt-3">
    <div class="tab">
      <h1>Contact</h1>
      <h2>E-mail</h2>
      {{about.contact?.email}}
      <h2>Github</h2>
      {{about.contact?.github}}
      <h2>Linkedin</h2>
      {{about.contact?.linkedin}}
    </div>
    <div class="tab">
      <h1>Experience</h1>
      <div v-for=" (exp, idx ) in about.experiences" :key="idx" class="my-3">
        <h2> {{exp.position}} | {{exp.company}} | {{exp.city}} </h2>
        {{exp.from}} - {{exp.to}}
        <div v-html="exp.desc"/>
      </div>
    </div>
    
    <div class="tab">
      <h1>Skills</h1>
      <h2>Languages</h2>
        {{about.languages?.join(", ")}}
      <h2>Programming</h2>
        {{about.programming?.join(", ")}}
      <h2>Software</h2>
        {{about.software?.join(", ")}}
    </div>
    
    <div class="tab">
      <h1>Certifications</h1>
      <div v-for=" (cert, idx ) in about.certifications" :key="idx" class="my-3">
        <h2> {{cert.title}} | {{cert.organization}} </h2>
        {{cert.from}} - {{cert.to}}
      </div>
    </div>
    
    <div class="tab">
      <h1>Educations</h1>
      <div v-for=" (edu, idx ) in about.educations" :key="idx" class="my-3">
        <h2> {{edu.level}} in {{edu.field}} | {{edu.country}} </h2>
        <p>{{edu.school}}</p>
        <p>{{edu.from}} - {{edu.to}}</p>
      </div>
    </div>
    </perfect-scrollbar>
  
</template>

<script setup>

  import axios from 'axios';
  import {ref} from 'vue';

 // const container = document.querySelector('#about-container');
  //ps.update();

  const about = ref({})
  const loadAbout = ref(true)
  const config = {
    headers:{
      "content-type": "application/json"
    }
    
  }

  axios.get(import.meta.env.VITE_MAOJI_STUDIO_API_SITE+"/about", config).then(
    function(response) {
      loadAbout.value = true
      if(response.data) {
        about.value = response.data?.content
      }
        
    }
  )
  .then(
    loadAbout.value = false
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