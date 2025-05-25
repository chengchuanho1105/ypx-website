<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue';

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <!-- 如果是其他頁面 (Intro, Cert) 就只顯示子頁面 -->
        <component :is="Component" />
      </template>

      <template v-else>
        <!-- 僅 /product 才顯示這區 -->
        <SectionDefStyle id="" main-title="產品資訊" sub-title="Product Information">
          <div class="p-5 space-y-5 mx-auto ">
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
        </SectionDefStyle>
      </template>
    </router-view>
  </div>
</template>

<style scoped></style>