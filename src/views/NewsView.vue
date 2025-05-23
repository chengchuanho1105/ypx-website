<script setup lang="ts">

import { ref } from 'vue';

import SectionTitle from '@/components/SectionTitle.vue';

const newsList = ref([
  {
    id: 1,
    date: '2025-05-20',
    category: '活動',
    title: '源品香參加xxx食品展',
    summary: '我們將在20**年xxx食品展展示最新的豆皮製品，歡迎大家前來參觀。',
  },
  {
    id: 2,
    date: '2025-04-15',
    category: '公告',
    title: '網站全新上線，提供更佳完善的資訊',
    summary: '網站全新上線，提供更佳完善的資訊，歡迎瀏覽全新設計。',
  },
  {
    id: 3,
    date: '2025-03-30',
    category: '新聞',
    title: '榮獲xxx獎',
    summary: '源品香榮獲20**年度xxx獎，感謝大家的支持與鼓勵。',
  },
]);

function goToDetail(id: number): void {
  // 這邊可以用 router push 或 window.open 等方式導向文章詳細頁
  alert(`前往文章詳細頁：${id}`);
}
</script>

<template>
  <section class="my-15">
    <SectionTitle main-title="最新消息" sub-title="News" />
    <ul class="space-y-8 bg-wihte dark:bg-indigo-900 p-5 rounded-xl shadow">
      <li v-for="news in newsList" :key="news.id" class="pb-5 border-b border-indigo-300 dark:border-indigo-700">
        <div class="flex justify-between items-center mb-3">
          <time class="text-sm text-indigo-500 dark:text-indigo-300 font-mono tracking-wide">{{ news.date }}</time>
          <span
            class="bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200 font-semibold text-xs uppercase px-3 py-1 rounded-full">{{
              news.category }}</span>
        </div>
        <h2 @click="goToDetail(news.id)"
          class="text-3xl font-extrabold text-indigo-900 dark:text-indigo-100 mb-3 hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer transition-colors duration-300">
          {{ news.title }}
        </h2>
        <p class="text-indigo-700 dark:text-indigo-300 mb-4 leading-relaxed line-clamp-3">
          {{ news.summary }}
        </p>
        <button @click="goToDetail(news.id)"
          class="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold tracking-wide">
          閱讀更多 →
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>