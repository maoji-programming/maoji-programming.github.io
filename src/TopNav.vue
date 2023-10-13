<template>
    <div class="top-navbar">
        <div class="lg">
            <div class="flex overflow-hidden">
                <div class="flex-none flex align-items-center justify-content-center font-bold px-5 "><img width="128" height="64" :src="Logo"></div>
                <div class="flex-grow-1 flex align-items-center justify-content-center font-bold px-5"></div>
                <div class="flex-none flex align-items-center justify-content-center font-bold px-5">
                    <RouterLink to="/about">About</RouterLink>
                </div>
                <div class="flex-none flex align-items-center justify-content-center font-bold px-5">
                    <RouterLink to="/works">Works</RouterLink>
                </div>   
                <div class="flex-none flex align-items-center justify-content-center font-bold px-5">
                    <RouterLink to="/hobbies">Hobbies</RouterLink>
                </div>
            </div>
        </div>
        <div class="top-navbar sm">
            <div class="flex overflow-hidden align-items-center justify-content-center">
                <div class="flex-none flex align-items-center justify-content-center font-bold px-5 "><img :src="Logo"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './assets/logo.svg';

</script>

<style>
    .logo{
        left: 0px
    }
    .item-set {
        right: 0px   
    }
    @media (min-width: 769px){
        .top-navbar .lg {
            top:0px;
            position:relative;
            z-index: 2;
            width: 100vw;
            height: 70px;
            background-color: #00000077;
        }
        .top-navbar .sm {
            display: none;
        }
    }

    @media (max-width: 768px){
        .top-navbar .sm {
            top:0px;
            position:relative;
            z-index: 2;
            width: 100vw;
            height: 128px;
            background-color: #00000077;
        }
         .top-navbar .lg {
            display: none;
        }
    }
    

</style>