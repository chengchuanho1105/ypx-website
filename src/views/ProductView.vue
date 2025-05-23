<script setup lang="ts">

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// 判斷當前是否處於 Product 的概覽頁面（即沒有特定的子路由被激活）
const isProductOverview = computed(() => {
  return route.path === '/product' || route.path === '/product/';
});

</script>

<template>
  <div v-if="isProductOverview" class="space-y-6 max-w-4xl mx-auto py-10">
    <h1 class="text-3xl font-bold text-indigo-700">產品資訊</h1>

    <router-link to="/product/productIntro"
      class="block p-5 rounded-xl shadow bg-white hover:bg-indigo-50 dark:hover:bg-indigo-900 transition">
      <h2 class="text-xl font-semibold text-indigo-600">產品介紹</h2>
      <p class="text-gray-600 dark:text-gray-300">查看我們所有產品的詳細介紹。</p>
    </router-link>

    <router-link to="/product/productCertifications"
      class="block p-5 rounded-xl shadow bg-white hover:bg-indigo-50 dark:hover:bg-indigo-900 transition">
      <h2 class="text-xl font-semibold text-indigo-600">產品認證</h2>
      <p class="text-gray-600 dark:text-gray-300">了解我們通過的各項產品與生產相關認證。</p>
    </router-link>
  </div>
  <router-view />
</template>

<style scoped></style>