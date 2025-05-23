<script setup lang="ts">
import { ref } from 'vue';

import ImgCardGrid from '@/components/ImgCardGrid.vue';

// ImgCardGrid Data
import imgCardGridImg1 from '@/assets/media/關於我們.png'
import imgCardGridImg2 from '@/assets/media/精選產品.png'
import imgCardGridImg3 from '@/assets/media/媒體介紹.png'
import imgCardGridImg4 from '@/assets/media/客戶見證.png'
const imgCardGridData = ref([
  {
    imageUrl: imgCardGridImg1,
    imageAlt: '關於我們',
    iconClass: 'bi bi-award-fill',
    title: '關於我們',
    content: '源品香由一群熱愛土地與豆製品的職人組成。 並秉持「傳承、專業、誠信」，淬鍊出豆香的純粹與真誠，讓健康的飲食悄然在每一張豆皮中發芽。',
  },
  {
    imageUrl: imgCardGridImg2,
    imageAlt: '精選產品',
    iconClass: 'bi bi-droplet-half',
    title: '精選產品',
    content: '產品皆由天然食材製成，無無外添加任何化學成分。讓您在享受美味的同時，也能感受健康生活的美好。',
  },
  {
    imageUrl: imgCardGridImg3,
    imageAlt: '媒體介紹',
    iconClass: 'bi bi-hand-index-thumb',
    title: '媒體介紹',
    content: '媒體報導不只是產品的介紹，更是我們對品質與服務的承諾。 源品香相信能讓每一位顧客感受到我們的用心與專業。',
  },
  {
    imageUrl: imgCardGridImg4,
    imageAlt: '客戶見證',
    iconClass: 'bi bi-heart-fill',
    title: '客戶見證',
    content: '客戶見證是我們最好的廣告。 讓我們一起分享這些美好的故事。 邀請更多人認識源品香的堅持與美味。',
  },
]);
</script>

<template>

  <section id="info" class="my-5">
    <div v-for="(item, index) in imgCardGridData" :key="index" class="my-5">
      <ImgCardGrid :items="[imgCardGridData[index]]" class="h-[40svh]" />
    </div>
  </section>

  <!--
  <section id="info" class="my-5 flex flex-col gap-5">
    <InfoCard img="https://fakeimg.pl/1920x1080" mainTitle="圖片在左邊" subTitle="小標題1" description="這是圖片在左邊的範例。"
      imageWidthProp="60%" imagePosition="left" />

    <InfoCard img="https://fakeimg.pl/1920x1080" mainTitle="圖片在右邊" subTitle="小標題2" description="這是圖片在右邊的範例。"
      imageWidthProp="60%" imagePosition="right" />
  </section>

  <section class="my-5 select-none">
    <div class="flex lg:flex-row flex-col w-full bg-white dark:bg-indigo-950 rounded-xl shadow-xl">
      <div class="lg:w-[60%] w-full h-[40svh] overflow-hidden shrink-0">
        <img class="w-full h-full object-cover lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl"
          src="https://fakeimg.pl/1920x1080" alt="" draggable="false">
      </div>
      <div class="flex flex-col h-[40svh] p-5">
        <div class="w-20 mb-2 p-1 text-center bg-indigo-400 dark:bg-indigo-600 rounded-full lg:block hidden">
          <span class="text-sm font-medium text-gray-100 dark:text-gray-100">
            我是類別
          </span>
        </div>
        <div class="w-full my-2">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
            我是標題
          </h1>
        </div>
        <div class="w-full pl-5">
          <span class="text-xl font-bold text-gray-800 dark:text-gray-300 lg:block hidden">
            我是副標題
          </span>
        </div>
        <div class="flex-1 w-full my-5 overflow-y-auto">
          <p class="text-lg font-medium text-gray-700 dark:text-gray-200">
            我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
            我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
            我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
          </p>
        </div>
        <a class="p-3 mx-auto w-50 text-center bg-indigo-500 hover:bg-indigo-700 rounded-full" href="">
          <span class="text-lg font-bold text-gray-200 dark:text-gray-200">Buttom ></span>
        </a>
      </div>
    </div>
  </section>

  <section class="my-5 select-none">
    <div class="relative h-[40svh] shadow-xl rounded-xl">
      <img class="w-full h-full object-cover rounded-xl" src="https://fakeimg.pl/1920x1080" alt="" draggable="false">
      <div class="absolute top-0 start-0 end-0">
        <div class="p-5">
          <div class="w-20 mb-2 p-1 text-center bg-indigo-400 dark:bg-indigo-600 rounded-full lg:block hidden">
            <span class="text-sm font-medium text-gray-100 dark:text-gray-100">
              我是類別
            </span>
          </div>
          <div class="w-full my-2">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
              我是標題
            </h1>
          </div>
          <div class="w-full">
            <span class="text-xl font-bold text-gray-800 dark:text-gray-300 lg:block hidden">
              我是副標題
            </span>
          </div>
          <div class="flex-1 w-full my-5 overflow-y-auto">
            <p class="text-lg font-medium text-gray-700 dark:text-gray-200">
              我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
              我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
              我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
            </p>
          </div>
          <a class="p-3 mx-auto w-50 text-center bg-indigo-500 hover:bg-indigo-700 rounded-full" href="">
            <span class="text-lg font-bold text-gray-200 dark:text-gray-200">Buttom ></span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section>

    <div class="flex flex-row items-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
        我是標題
        <small class="text-2xl font-bold text-gray-700 dark:text-gray-300 mx-2">
          我是副標題
        </small>
      </h1>
      <span
        class="bg-indigo-100 dark:bg-indigo-200 text-sm font-semibold text-indigo-800 dark:text-indigo-800 px-2 py-1 rounded-full mx-2">
        我是類別
      </span>
    </div>
    <div class="flex-1 overflow-auto">
      <p class="text-xl font-medium text-indigo-800 dark:text-gray-200">
        我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！
        我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！
        我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！我是描述！
      </p>
    </div>
    <div class="">
      <a class="bg-indigo-200 dark:bg-indigo-800 p-5" href="">
        <span class="text-lg font-medium text-gray-200 dark:gray-800">Button</span>
      </a>
    </div>


  </section>
  -->

</template>

<style scoped></style>