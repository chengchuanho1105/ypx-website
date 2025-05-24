<script setup lang="ts">

import SectionTitle from '@/components/SectionTitle.vue';

</script>

<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <!-- 如果是其他頁面 (Intro, Cert) 就只顯示子頁面 -->
      <component :is="Component" />
    </template>

    <template v-else>
      <!-- 僅 /product 才顯示這區 -->
      <div class="space-y-6 max-w-4xl mx-auto py-10">
        <SectionTitle main-title="產品資訊" sub-title="Product Information" />

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
    </template>
  </router-view>
</template>

<style scoped></style>