<template>
    <div class="text-base">
        <div :class="{'h-0': !showDrawer, 'h-[110px]': showDrawer}" class="xl:text-White xl:h-[100px] xl:relative xl:bg-opacity-0 z-50 items-center fixed top-0 right-0 w-full bg-White overflow-x-hidden transition-all duration-300 px-6 text-regular grid grid-cols-11">
            <div class="flex col-span-6">
                <div class="basis-2/6 xl:hidden">
                    <button class="basis-2/6" @click="changeDrawerState()"><img src="../assets/images/icon-close.svg" alt=""></button>
                </div>
                <div class="hidden xl:basis-2/6 xl:flex xl:items-center">
                    <img src="../assets/images/logo.svg" alt="">
                </div>
                <div class="font-heading basis-1/6"><a class="hover:border-b-4 border-White transition-all font-600" href="#">home</a></div>
                <div class="basis-1/6"><a class="hover:border-b-4 border-White transition-all font-600" href="#">shop</a></div>
                <div class="basis-1/6"><a class="hover:border-b-4 border-White transition-all font-600" href="#">about</a></div>
                <div class="basis-1/6"><a class="hover:border-b-4 border-White transition-all font-600" href="#">contact</a></div>
            </div>
        </div>
        <div class="pl-6 pt-12 flex flex-row xl:hidden">
            <div class="basis-1/3">
                <button @click="changeDrawerState()">
                    <img src="../assets/images/icon-hamburger.svg" alt="">
                </button>
            </div>
            <div class="basis-1/3">
                <img class="mx-auto" src="../assets/images/logo.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const showDrawer = ref(false);
function changeDrawerState(){
    showDrawer.value = !showDrawer.value
}
</script>