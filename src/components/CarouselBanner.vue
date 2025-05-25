<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const images = [
    'https://fakeimg.pl/1920x1080/?text=1',
    'https://fakeimg.pl/1920x1080/?text=2',
    'https://fakeimg.pl/1920x1080/?text=3',
]
</script>

<template>
    <div class="h-full w-full">
        <Swiper :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }"
            class="h-full w-full">
            <SwiperSlide v-for="(img, index) in images" :key="index">
                <img :src="img" class="w-full h-screen object-cover" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>