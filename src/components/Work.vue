<template>

    <div class="border-b flex overflow-hidden py-3" >
        <div class="flex-none flex align-items-center justify-content-center font-bold px-5 ">
            <img width="256" height="256" :src="'data:image/png;base64,'+props.content?.imgSrc">
        </div>
        <div class="flex-grow-1 flex flex-column font-bold px-5">
            <h1 class="flex overflow-hidden">{{props.content?.title}}</h1>
            <div class="flex overflow-hidden">
                <p>{{props.content?.desc}}</p>
            </div>
            <div class="flex-grow-1 overflow-hidden">
                <a :href="props.content?.url">Click here to see the demo</a>
            </div>
            <div class="flex overflow-hidden"> 
                Skills: {{props.content?.skills?.join(", ")}}
            </div>
        </div>
    </div>

    
</template>

<script setup>
    import {ref} from "vue";
    const props = defineProps(['content'])

    

</script>

<style scoped>
    a{
        font-size: 14px;
    }
    .border-b{
        border-bottom: 1px solid #e7e7e7;
    }
</style>