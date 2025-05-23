<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({
    videos: {
        type: Array,
        required: true,
        default: () => []
    }
});
</script>


<template>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div v-for="(video, index) in videos" :key="video.id || index"
            class="flex flex-col bg-white dark:bg-indigo-900 rounded-xl shadow overflow-hidden">
            <div class="relative w-full pt-[56.25%]">
                <iframe class="absolute top-0 left-0 w-full h-full rounded-t-xl" :src="video.videoUrl" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="px-5 py-3 flex-grow">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-2 line-clamp-1">
                    {{ video.title }}
                </h2>
                <div class="px-0 sm:px-5">
                    <p class="h-[5rem] text-lg font-medium text-gray-700 dark:text-indigo-200 line-clamp-3">
                        {{ video.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>