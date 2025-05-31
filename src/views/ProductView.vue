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
        <SectionDefStyle id="" main-title="產品資訊" sub-title="Product Information" data-aos="fade-up">
          <div class="p-5 grid lg:grid-cols-2 gap-5">
            <router-link to="/product/productList"
              class="block p-5 rounded-xl shadow bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
              data-aos="flip-left">
              <h2 class="text-xl font-semibold text-indigo-600 dark:text-indigo-100">
                產品列表
              </h2>
              <p class="text-gray-600 dark:text-gray-200">
                查看我們所有產品的詳細介紹。
              </p>
            </router-link>

            <router-link to="/product/productCertifications"
              class="block p-5 rounded-xl shadow bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
              data-aos="flip-left">
              <h2 class="text-xl font-semibold text-indigo-600 dark:text-indigo-100">
                產品認證
              </h2>
              <p class="text-gray-600 dark:text-gray-200">
                了解我們通過的各項產品與生產相關認證。
              </p>
            </router-link>
          </div>
        </SectionDefStyle>
      </template>
    </router-view>
  </div>
</template>

<style scoped></style>