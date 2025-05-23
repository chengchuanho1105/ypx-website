<script setup lang="ts">
import { ref } from 'vue';

import SectionTitle from '@/components/SectionTitle.vue';
import ContentCard from '@/components/ContentCard.vue';
import TimrLine from '@/components/TimrLine.vue';
import ImgCardGrid from '@/components/ImgCardGrid.vue';

// 創辦人頭像
import founderImg from '@/assets/media/創辦人頭像_1920x1080.jpg'

// timeline Data
const timelineData = [
  {
    index: 1,
    mainTitle: '創業起點',
    subTitle: '1985年貸款數百萬，於濁水溪畔扎根',
    description: '懷抱理想與毅力，創辦人投入大量資金，選址於水質優良的濁水溪畔，正式展開豆皮事業的第一步。',
    iconClass: 'bi bi-sunrise'
  },
  {
    index: 2,
    mainTitle: '成長階段',
    subTitle: '製程調整，找出黃豆與石灰質水源的最佳比例',
    description: '經過三年不斷嘗試與優化，團隊成功掌握原料與水質的黃金比例，使豆皮口感與品質雙雙升級，奠定市場口碑。',
    iconClass: 'bi bi-rocket-takeoff'
  },
  {
    index: 3,
    mainTitle: '技術升級',
    subTitle: '引進先進設備，提升品質與產能',
    description: '因應市場需求與品質提升目標，引進先進製造設備，自動化流程逐步成形，確保穩定生產並符合國際標準。',
    iconClass: 'bi bi-shift'
  },
  {
    index: 4,
    mainTitle: '外銷拓展',
    subTitle: '進軍國際市場，成為台灣之光',
    description: '憑藉穩定品質與口感特色，產品成功進軍國際市場，每年外銷量逾 20 公噸。主要銷往歐美日等地，打響臺灣豆皮品牌。',
    iconClass: 'bi bi-stars'
  },
];

// ImgCardGrid Data
import contentCardImg1 from '@/assets/media/嚴選黃豆.png'
import contentCardImg2 from '@/assets/media/傳統工法.png'
import contentCardImg3 from '@/assets/media/手工製作.png'
import contentCardImg4 from '@/assets/media/匠心堅持.png'

const contentCardData = ref([
  {
    imageUrl: contentCardImg1,
    imageAlt: '嚴選黃豆圖片',
    iconClass: 'bi bi-award-fill',
    title: '嚴選黃豆',
    content: '使用單一品種非基因改造黃豆，味道更純正，成本也比混合豆高出5～6%。',
  },
  {
    imageUrl: contentCardImg2,
    imageAlt: '傳統工法圖片',
    iconClass: 'bi bi-droplet-half',
    title: '傳統三溫暖工法',
    content: '全程遵循「浸泡 → 煮滾 → 過濾」的黃豆三溫暖製程。',
  },
  {
    imageUrl: contentCardImg3,
    imageAlt: '手工製作圖片',
    iconClass: 'bi bi-hand-index-thumb',
    title: '手工製作',
    content: '每張豆皮皆由人工細心撈取，無任何化學添加。',
  },
  {
    imageUrl: contentCardImg4,
    imageAlt: '匠心堅持圖片',
    iconClass: 'bi bi-heart-fill',
    title: '匠心堅持',
    content: '每片豆皮都是源自耐心與堅持的結晶。',
  },
]);

</script>

<template>

  <!-- Section: 創辦人介紹 (Founder Introduction) -->
  <section id="founderIntro" class="my-15">

    <SectionTitle mainTitle="創辦人介紹" sub-title="不只創業，更創下了傳統豆皮的新高度" />

    <ContentCard title="源品香創辦人陳先生"
      content="36歲創業，帶著對台灣傳統豆皮工藝的熱愛與堅持，投入豆製品產業數十載。<br>他深信，唯有遵循古法手工製作，嚴選台灣在地非基因改造大豆，才能煉出真正香醇、令人安心的豆皮。<br>以職人精神，親力親為每一個製作環節，將對土地的情感，融入每一張豆皮之中。"
      :imageUrl=founderImg />

  </section>

  <!-- Section: 歷史大事記 (Milestones) -->
  <section id="milestones" class="ny-10">

    <SectionTitle mainTitle="歷史大事記" sub-title="回顧源品香一路走來的點滴與故事" />

    <div class="bg-white dark:bg-indigo-950 rounded-xl shadow-lg p-6 transition-colors duration-300">

      <TimrLine v-for="item in timelineData" :key="item.index" :index="item.index" :mainTitle="item.mainTitle"
        :subTitle="item.subTitle" :description="item.description">
        <template #icon>
          <i :class="[item.iconClass, 'w-12', 'h-12', 'text-5xl']"></i>
        </template>
      </TimrLine>

    </div>

  </section>

  <!-- Section: 製作堅持 (Craftsmanship Values) -->
  <section id="craftsmanshipValues" class="my-15">

    <SectionTitle mainTitle="職人堅持" sub-title="以時間淬鍊風味，用手工傳遞真誠" />
    <ImgCardGrid :items="contentCardData" />

  </section>

  <!-- Section: 社會責任 (Social Responsibility) -->
  <section id="socialResponsibility" class="my-15">
    <SectionTitle mainTitle="社會責任" sub-title="支持台灣農業、在地耕耘、回饋社會" />

    <div class="grid lg:grid-cols-3 gap-5 text-gray-800">
      <!-- 在地農業 -->
      <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
        <i class="bi bi-flower3 text-green-600 text-4xl mb-4"></i>
        <h3 class="font-bold text-lg mb-2">來自土地，回饋土地</h3>
        <p>支持台灣在地農業，採用<span class="text-green-600 font-bold">100%</span>本土黃豆，與土地共生共榮。</p>
      </div>

      <!-- 環保理念 -->
      <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
        <i class="bi bi-recycle text-blue-500 text-4xl mb-4"></i>
        <h3 class="font-bold text-lg mb-2">環境友善製程</h3>
        <p>積極響應環保政策，減少生產過程中的碳排與污染。</p>
      </div>

      <!-- 社會回饋 -->
      <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
        <i class="bi bi-people-fill text-yellow-600 text-4xl mb-4"></i>
        <h3 class="font-bold text-lg mb-2">回饋社會</h3>
        <p>致力於公益與在地社區合作，共創美好未來。</p>
      </div>
    </div>
  </section>

  <!-- Section: 加入我們 (Join Our Team) -->
  <srcsection id="joinOurTeam" class="my-15">
    <SectionTitle mainTitle="加入源品香" subTitle="成為傳承美味與信念的一份子" />
    <div class="bg-indigo-50 py-10 rounded-xl shadow">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">加入源品香，一起傳承美味與信念</h2>
        <p class="text-gray-700 text-lg">
          我們相信，用心製作每一片豆皮，也是在成就每一份生活。<br>
          若你熱愛傳統、願意學習、渴望穩定與成長，我們誠摯歡迎你加入。
        </p>
      </div>
    </div>
  </srcsection>

</template>

<style scoped></style>