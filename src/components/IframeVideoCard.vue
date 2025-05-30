<script setup lang="ts">
import { ref } from 'vue';

interface Video {
    id?: string | number;
    title: string;
    videoUrl: string;
    description: string;
}

defineProps<{
    videos: Video[];
}>();

const expanded = ref(false);
</script>

<template>
    <div class="relative">
        <!-- 控制整體高度，避免只展開卡片本身 -->
        <div class="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            :style="expanded ? 'max-height: 99999px' : 'max-height: 630px'">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div v-for="(video, index) in videos" :key="video.id || index"
                    class="flex flex-col bg-white dark:bg-indigo-900 rounded-xl shadow overflow-hidden">
                    <div class="relative w-full pt-[56.25%]">
                        <iframe class="absolute top-0 left-0 w-full h-full rounded-t-xl" :src="video.videoUrl"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>

                    <div class="px-5 py-3 flex-grow">
                        <a :href="video.videoUrl" target="_blank" rel="noopener noreferrer">
                            <h2
                                class="mb-2 text-2xl font-bold text-gray-900 dark:text-indigo-100 line-clamp-1 hover:underline">
                                {{ video.title }}
                            </h2>
                        </a>
                        <div class="px-0 sm:px-5">
                            <p class="h-[5rem] text-lg font-medium text-gray-700 dark:text-indigo-200 line-clamp-3">
                                {{ video.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 展開/收合按鈕 -->
        <div class="text-center mt-6">
            <button class="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
                @click="expanded = !expanded">
                {{ expanded ? '收合內容' : '瀏覽全部' }}
            </button>
        </div>
    </div>
</template>
