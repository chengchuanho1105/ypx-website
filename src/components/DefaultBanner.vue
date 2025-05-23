<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

import bannerBgImg from '@/assets/media/世界地圖.png'

const bannerStyle = computed(() => ({
    backgroundImage: `url('${bannerBgImg}')`,
    backgroundPosition: '35% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: isHome.value ? '100svh' : '30svh',
}))

const isPortrait = ref(true) // 高 > 寬

function onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement
    if (img.naturalHeight > img.naturalWidth) {
        isPortrait.value = true
    } else {
        isPortrait.value = false
    }
}

</script>

<template>
    <div id="banner" :style="bannerStyle" class="relative flex flex-col justify-center items-center">
        <img :class="isPortrait ? 'w-[50%]' : 'h-[80%]'" src="@/assets/media/藏頭詩.png" alt="" @load="onImageLoad"
            draggable="false" />
        <a v-if="isHome" href="#info" class="scroll-hint absolute bottom-[20px] left-[50%] translate-x-[-50%] flex">
            <span class="text-lg text-white text-center text-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
                向下瀏覽<br />Ｖ
            </span>
        </a>
    </div>
</template>

<style scoped>
.scroll-hint {
    animation: scrollDown 1.5s infinite;
}

@keyframes scrollDown {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>