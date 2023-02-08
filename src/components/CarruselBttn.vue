<template>
    <button class="bg-Black  py-3 px-6 xl:w-[5vw] xl:py-6 xl:px-0 hover:bg-Very-Dark-Gray" @click="leftArrow()">
        <img class="mx-auto" src="../assets/images/icon-angle-left.svg" alt="">
    </button>
    <button class="bg-Black py-3 px-6 xl:w-[5vw] xl:py-6 xl:px-0 hover:bg-Very-Dark-Gray" @click="rightArrow()">
        <img class="mx-auto" src="../assets/images/icon-angle-right.svg" alt="">
    </button>
</template>

<script setup>
import { inject } from 'vue'

const emitter = inject('emitter')

function leftArrow() {
    emitter.emit('left-arrow');
}
function rightArrow() {
    emitter.emit('right-arrow')
}

</script>