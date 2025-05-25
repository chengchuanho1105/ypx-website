<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue'
import ContentCard from '@/components/ContentCard.vue';
import TimrLine from '@/components/TimrLine.vue';
import ImgCardGrid from '@/components/ImgCardGrid.vue';


import founderImg from '@/assets/media/創辦人頭像_1920x1080.jpg' // 創辦人頭像
import aboutpageHistoryTimelineData from '@/data/aboutpageHistoryTimelineData.ts' // aboutpage History Timeline Data
import aboutpageCommitmentData from '@/data/aboutpageCommitmentData.ts' // aboutpage Commitment Data

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">

    <!-- Section: 創辦人介紹 (Founder) -->
    <SectionDefStyle id="about-founder" mainTitle="創辦人介紹" subTitle="Founder" slogan="不只創業，更創下了傳統豆皮的新高度">
      <div class="p-5">
        <ContentCard title="源品香創辦人陳先生"
          content="36歲創業，帶著對台灣傳統豆皮工藝的熱愛與堅持，投入豆製品產業數十載。<br>他深信，唯有遵循古法手工製作，嚴選台灣在地非基因改造大豆，才能煉出真正香醇、令人安心的豆皮。<br>以職人精神，親力親為每一個製作環節，將對土地的情感，融入每一張豆皮之中。"
          :imageUrl=founderImg />
      </div>
    </SectionDefStyle>

    <!-- Section: 歷史大事記 (History) -->
    <SectionDefStyle id="about-history" mainTitle="歷史大事記" subTitle="History" slogan="回顧源品香一路走來的點滴與故事">
      <div class="p-5">
        <div class="bg-white dark:bg-indigo-950 rounded-xl shadow-lg p-6 transition-colors duration-300">

          <TimrLine v-for="item in aboutpageHistoryTimelineData" :key="item.index" :index="item.index"
            :mainTitle="item.mainTitle" :subTitle="item.subTitle" :description="item.description">
            <template #icon>
              <i :class="[item.iconClass, 'w-12', 'h-12', 'text-5xl']"></i>
            </template>
          </TimrLine>

        </div>
      </div>
    </SectionDefStyle>

    <!-- Section: 製作堅持 (Commitment) -->
    <SectionDefStyle id="about-commitment" mainTitle="職人堅持" subTitle="Commitment" slogan="以時間淬鍊風味，用手工傳遞真誠">
      <div class="p-5">
        <ImgCardGrid :items="aboutpageCommitmentData" />
      </div>
    </SectionDefStyle>

    <!-- Section: 社會責任 (CSR) -->
    <SectionDefStyle id="about-csr" mainTitle="社會責任" subTitle="CSR" slogan="支持台灣農業、在地耕耘、回饋社會">
      <div class="p-5">
        <div class="grid lg:grid-cols-3 gap-5 text-gray-800">
          <!-- 在地農業 -->
          <div class="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center">
            <i class="bi bi-flower3 text-green-600 text-4xl mb-4"></i>
            <h3 class="font-bold text-lg mb-2">來自土地，回饋土地</h3>
            <p>支持台灣在地農業，採用<span class="text-green-600 font-bold">100%</span>本土黃豆，與土地共生共榮。</p>
          </div>

          <!-- 環保理念 -->
          <div class="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center">
            <i class="bi bi-recycle text-blue-500 text-4xl mb-4"></i>
            <h3 class="font-bold text-lg mb-2">環境友善製程</h3>
            <p>積極響應環保政策，減少生產過程中的碳排與污染。</p>
          </div>

          <!-- 社會回饋 -->
          <div class="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center">
            <i class="bi bi-people-fill text-yellow-600 text-4xl mb-4"></i>
            <h3 class="font-bold text-lg mb-2">回饋社會</h3>
            <p>致力於公益與在地社區合作，共創美好未來。</p>
          </div>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Section: 加入我們 (Recruit) -->
    <SectionDefStyle id="recruit" mainTitle="加入源品香" subTitle="Recruit" slogan="成為傳承美味與信念的一份子">
      <div class="p-5">
        <div class="bg-indigo-50 py-5">
          <div class="mx-auto px-6 text-center">
            <h3 class="text-xl font-bold text-gray-800 mb-4">加入源品香，一起傳承美味與信念</h3>
            <p class="text-gray-700 text-lg">
              我們相信，用心製作每一片豆皮，也是在成就每一份生活。<br>
              若你熱愛傳統、願意學習、渴望穩定與成長，我們誠摯歡迎你加入。
            </p>
          </div>
        </div>
      </div>
    </SectionDefStyle>

  </div>
</template>

<style scoped></style>