<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const router = useRouter();

interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
}

defineProps<{
    newsList: NewsItem[];
}>();

function goToDetail(id: number) {
    router.push(`/news/${id}`);
}

</script>

<template>
    <ul class="space-y-8 bg-white dark:bg-indigo-900 p-5 rounded-xl shadow">
        <li v-for="news in newsList" :key="news.id" class="pb-5 border-b border-indigo-300 dark:border-indigo-700">
            <div class="my-1 flex justify-between items-center">
                <time class="text-sm text-indigo-500 dark:text-indigo-300 font-mono tracking-wide">
                    {{ news.date }}
                </time>
                <span
                    class="bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200 font-semibold text-xs uppercase px-3 py-1 rounded-full">
                    {{ news.category }}
                </span>
            </div>
            <h3 @click="goToDetail(news.id)"
                class="my-1 text-2xl font-extrabold text-indigo-900 dark:text-indigo-100 hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer transition-colors duration-300">
                {{ news.title }}
            </h3>
            <p class="my-1 text-lg text-indigo-700 dark:text-indigo-300 leading-relaxed line-clamp-3">
                {{ news.summary }}
            </p>
        </li>
    </ul>
</template>

<style scoped></style>