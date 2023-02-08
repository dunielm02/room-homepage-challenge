<template>

  <div class="xl:grid xl:grid-cols-10">
    <div class="xl:col-span-6 bg-no-repeat bg-cover relative">

      <img class="w-full h-full hidden xl:block" :src="imgDir[view].desktop" >
      <img class="w-full xl:hidden" :src="imgDir[view].mobile" >
  
      <div class="z-50 absolute left-0 top-0 w-full"><Nav/></div>
  
      <div class="w-max absolute right-0 bottom-0 xl:hidden">
        <CarruselBttn/>
      </div>
  
    </div>
    
    <div class="xl:col-span-4 relative">
      <TextBlock/>
      <div class="xl:block absolute bottom-0 left-0 hidden">
          <CarruselBttn/>
      </div>
    </div>
  </div>
  <div class="xl:grid xl:grid-cols-10 text-base">

    <div class="xl:col-span-3">
      <img class="w-screen h-full" src="./assets/images/image-about-dark.jpg" alt="">
    </div>

    <div class="p-10 xl:col-span-4">
      <p class="font-600 tracking-[5px] mb-4">ABOUT OUR FURNITURE</p>
      <p class="text-Dark-Gray font-500">
        Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.
      </p>
    </div>
  
    <div class="xl:col-span-3">
      <img class="w-screen h-full" src="./assets/images/image-about-light.jpg" alt="">
    </div>

  </div>

</template>
<script setup>
import Nav from "./components/Nav.vue"
import CarruselBttn from "./components/CarruselBttn.vue";
import TextBlock from "./components/textBlock.vue";
import { reactive, ref, inject } from 'vue'

const emitter = inject('emitter')

emitter.on('left-arrow', function(){
  view.value--
  if(view.value == -1){
    view.value = 2;
  }
})
emitter.on('right-arrow', function(){
  view.value++
  if(view.value == 3){
    view.value = 0;
  }
})

const view = ref(0)

const imgDir = reactive([
  {mobile: "/src/assets/images/mobile-image-hero-1.jpg", desktop: "/src/assets/images/desktop-image-hero-1.jpg"},
  {mobile: "/src/assets/images/mobile-image-hero-2.jpg", desktop: "/src/assets/images/desktop-image-hero-2.jpg"},
  {mobile: "/src/assets/images/mobile-image-hero-3.jpg", desktop: "/src/assets/images/desktop-image-hero-3.jpg"}
])

</script>