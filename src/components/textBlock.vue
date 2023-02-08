<template>
    <div class="p-10 xl:p-20 xl:basis-1/4 text-base">

        <h1 class="mb-4 text-4xl font-700"> {{ texts[view].heder }} </h1>
        
        <p class="text-Dark-Gray font-500"> {{ texts[view].paragraph }} </p>

        <a class="flex items-center mt-8 hover:opacity-30 w-max" href="#">
            <p class="font-bold tracking-[8px] pr-6 font-600">SHOP NOW</p>
            <img class="h-3" src="../assets/images/icon-arrow.svg" alt="">
        </a>
  
    </div>
</template>
<script setup>
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

const texts = reactive([
    {heder: "Discover innovative ways to decorate" , paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
    {heder: "We are available all across the globe" , paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
    {heder: "Manufactured with the best materials" , paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}
])
</script>