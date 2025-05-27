<script setup lang="ts">

import { defineProps } from 'vue';

interface article {
    id?: string | number;
    title: string;
    articlesUrl: string;
    imgUrl: string;
}

defineProps<{
    articles: article[];
}>();

</script>

<template>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div v-for="(article, index) in articles" :key="article.id || index"
            class="flex flex-col bg-white dark:bg-indigo-900 rounded-xl shadow overflow-hidden">
            <div class="relative w-full pt-[56.25%]">
                <img class="absolute top-0 left-0 w-full h-full rounded-t-xl" :src="article.imgUrl" alt="">
            </div>
            <div class="px-5 pt-3 py-1 flex-grow">
                <h2 class="h-[4rem] text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-2 line-clamp-2">
                    {{ article.title }}
                </h2>
            </div>
            <div class="px-3 pb-3 text-end">
                <a class="inline-block px-3 py-1 border-1 border-indigo-200 text-gray-900 dark:text-indigo-100 hover:dark:text-indigo-900 hover:bg-indigo-200  rounded-lg text-lg transition"
                    :href="article.articlesUrl" target="_blank" rel="noopener noreferrer">
                    <span class="text-lg">閱讀全文...</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>