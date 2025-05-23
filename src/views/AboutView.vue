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
import imgCardGridImg1 from '@/assets/media/嚴選黃豆.png'
import imgCardGridImg2 from '@/assets/media/傳統工法.png'
import imgCardGridImg3 from '@/assets/media/手工製作.png'
import imgCardGridImg4 from '@/assets/media/匠心堅持.png'

const imgCardGridData = ref([
  {
    imageUrl: imgCardGridImg1,
    imageAlt: '嚴選黃豆圖片',
    iconClass: 'bi bi-award-fill',
    title: '嚴選黃豆',
    content: '使用單一品種非基因改造黃豆，味道更純正，成本也比混合豆高出5～6%。',
  },
  {
    imageUrl: imgCardGridImg2,
    imageAlt: '傳統工法圖片',
    iconClass: 'bi bi-droplet-half',
    title: '傳統三溫暖工法',
    content: '全程遵循「浸泡 → 煮滾 → 過濾」的黃豆三溫暖製程。',
  },
  {
    imageUrl: imgCardGridImg3,
    imageAlt: '手工製作圖片',
    iconClass: 'bi bi-hand-index-thumb',
    title: '手工製作',
    content: '每張豆皮皆由人工細心撈取，無任何化學添加。',
  },
  {
    imageUrl: imgCardGridImg4,
    imageAlt: '匠心堅持圖片',
    iconClass: 'bi bi-heart-fill',
    title: '匠心堅持',
    content: '每片豆皮都是源自耐心與堅持的結晶。',
  },
]);

</script>

<template>

  <section id="founderIntro" class="my-10">

    <SectionTitle mainTitle="創辦人介紹" />

    <ContentCard title="源品香創辦人陳先生"
      content="36歲創業，帶著對台灣傳統豆皮工藝的熱愛與堅持，投入豆製品產業數十載。<br>他深信，唯有遵循古法手工製作，嚴選台灣在地非基因改造大豆，才能煉出真正香醇、令人安心的豆皮。<br>以職人精神，親力親為每一個製作環節，將對土地的情感，融入每一張豆皮之中。"
      :imageUrl=founderImg />

  </section>

  <section id="history" class="ny-10">

    <SectionTitle mainTitle="歷史沿革" />

    <div class="bg-white dark:bg-indigo-950 rounded-xl shadow-lg p-6 transition-colors duration-300">

      <TimrLine v-for="item in timelineData" :key="item.index" :index="item.index" :mainTitle="item.mainTitle"
        :subTitle="item.subTitle" :description="item.description">
        <template #icon>
          <i :class="[item.iconClass, 'w-12', 'h-12', 'text-5xl']"></i>
        </template>
      </TimrLine>

    </div>

  </section>

  <section id="persistence" class="my-10">

    <SectionTitle mainTitle="製作堅持" />
    <ImgCardGrid :items="imgCardGridData" />

  </section>

  <section class="my-10">
    <SectionTitle mainTitle="社會責任" />

    <div class="grid md:grid-cols-3 gap-6 mt-6 text-gray-800">
      <!-- 在地農業 -->
      <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
        <i class="bi bi-flower3 text-green-600 text-4xl mb-4"></i>
        <h3 class="font-bold text-lg mb-2">來自土地，回饋土地</h3>
        <p>支持台灣在地農業，採用本土黃豆，與土地共生共榮。</p>
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

    <div class="grid md:grid-cols-3 gap-6 mt-8 text-center">
      <div>
        <h2 class="text-4xl font-bold text-green-600">100%</h2>
        <p class="text-sm">使用台灣在地黃豆</p>
      </div>
      <div>
        <h2 class="text-4xl font-bold text-blue-600">-30%</h2>
        <p class="text-sm">生產能耗減量</p>
      </div>
      <div>
        <h2 class="text-4xl font-bold text-yellow-600">15+</h2>
        <p class="text-sm">場次社區活動參與</p>
      </div>
    </div>

  </section>

  <srcsection id="" class="my-10">
    <SectionTitle mainTitle="加入源品香" subTitle="成為傳承美味與信念的一份子" />

    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 class="text-xl font-bold text-gray-800 mb-1">生產技術員</h3>
        <p class="text-gray-600 text-sm mb-2">工作地點：彰化縣田中鎮｜全職</p>
        <p class="text-gray-700">學習傳統豆皮製程，操作機台與品管檢測。</p>
        <button class="mt-4 text-indigo-600 font-semibold hover:underline">查看詳情</button>
      </div>

      <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 class="text-xl font-bold text-gray-800 mb-1">包裝作業員</h3>
        <p class="text-gray-600 text-sm mb-2">工作地點：彰化縣田中鎮｜兼職可</p>
        <p class="text-gray-700">協助產品包裝與出貨流程，簡單易學，歡迎二度就業。</p>
        <button class="mt-4 text-indigo-600 font-semibold hover:underline">查看詳情</button>
      </div>
    </div>

  </srcsection>

  <section class="bg-indigo-50 py-10 rounded-xl shadow mt-10">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">加入源品香，一起傳承美味與信念</h2>
      <p class="text-gray-700 text-lg mb-6">
        我們相信，用心製作每一片豆皮，也是在成就每一份生活。<br>
        若你熱愛傳統、願意學習、渴望穩定與成長，我們誠摯歡迎你加入。
      </p>
      <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
        查看目前職缺
      </button>
    </div>
  </section>

  <!-- 可放在下方 -->
  <div class="mt-10 bg-white p-6 rounded-xl shadow">
    <h3 class="text-xl font-bold mb-4">想加入我們？留下聯絡方式！</h3>
    <form class="grid gap-4 md:grid-cols-2">
      <input type="text" placeholder="姓名" class="p-3 border rounded" />
      <input type="tel" placeholder="聯絡電話" class="p-3 border rounded" />
      <input type="email" placeholder="Email（可選）" class="p-3 border rounded md:col-span-2" />
      <textarea placeholder="簡述您想應徵的工作內容或經驗" class="p-3 border rounded md:col-span-2"></textarea>
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 md:col-span-2">
        提交資料
      </button>
    </form>
  </div>



</template>

<style scoped></style>