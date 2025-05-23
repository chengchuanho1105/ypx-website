<script setup lang="ts">
import { ref } from 'vue';

import IframeVideoCard from '@/components/IframeVideoCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const videoData = ref([
  {
    videoUrl: 'https://www.youtube.com/embed/sJTA1a3BNXg',
    title: '鼎王指定豆皮 外銷歐美年收千萬',
    description: '171202台灣向錢衝》鼎王指定豆皮 外銷歐美年收千萬Part1',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/cJYUWCmQFuw',
    title: '“黃金豆皮”拚千萬年收 ｜源品香豆皮廠｜【台灣真善美】2025.04.06',
    description: '當地製作豆皮二十年的林昇添，只用非基改黃豆研磨豆漿，不添加防腐劑和漂白劑，做出來的豆皮，口感Q軟香濃，還外銷美國、香港等地，年營收破千萬元。當地農會還將他的豆皮，包裝成法國麵包來行銷。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/FNhBYFON6MY',
    title: '雲林農業翻轉中 莿桐豆皮攻歐美市場',
    description: '餐桌上常見的豆皮、腐皮，便宜又美味，而全台灣有70%的豆皮，都出自於雲林，原因是濁水溪富含石灰質，讓豆漿更容易凝結，現在雲林的莿桐農會將豆皮重新包裝，不僅進軍電商，更開創歐美市場。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/7SO3Pgrl3Tc',
    title: '農會推非基改豆皮 搶攻頂級市場',
    description: '雲林縣莿桐鄉和西螺鎮，出產豆皮、豆包產量佔全國70%，卻只是代工，現在莿桐鄉農會和優質業者攜手合作，創造在地品牌，推出市面較罕見的非基改腐竹包裝，要搶攻頂級市場客源，期待藉由打造莿桐豆皮優質形象，讓民眾想買豆製品，想到是莿桐鄉。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/zl1uCexGuSo',
    title: '雲林手工豆皮生產工廠 - 台灣美食│Tofu Skin Mass Production - Taiwanese Food',
    description: '雲林手工豆皮生產工廠 - 台灣美食│Tofu Skin Mass Production - Taiwanese Food',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/j1p14kItLCY',
    title: '【行仔內ê話】EP46 雲林莿桐-豆皮',
    description: '大家最喜歡的豆皮竟然是....跟我分享最喜歡豆皮做成甚麼料理吧~',
  },
  {
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsetinewsmoney%2Fvideos%2F1804438716384176%2F',
    title: '把豆皮變成法國麵包 工廠結合農會拚創意|吃貨請跟上INEWS',
    description: '機械安裝業主管為了兼顧家庭和工作，在人生步入中年時，決定返鄉尋求穩定，老家在莿桐的他，因為當地人多從事溫室蔬菜栽種和豆皮製作，讓他決定選擇以豆皮工廠重新出發，本以為200萬就能搞定的創業旅程，沒想到最後多花了一倍資金，初期品質還不穩定，秉持著錯中學、學中做的精神，終於抓準技術和品質。',
  },
]);

const articles = [
  {
    title: "火鍋的最佳配角：雲林莿桐豆皮，美味的秘訣全靠好功夫 好吃到一片接一片",
    summary: "本地豆皮工廠源品香在地深耕，外銷量突破 20 公噸，獲多家媒體報導...",
    source: "微笑台灣",
    image: "https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcdn-smiletaiwan.cw.com.tw%2Farticle%2F201903%2Farticle-5c8a14fc35245.jpg/?w=1600&format=webp",
    link: "https://smiletaiwan.cw.com.tw/article/1573"
  },
  // 更多文章...
];

</script>

<template>

  <section id="" class="my-10">
    <SectionTitle main-title="精選影音" />
    <IframeVideoCard :videos="videoData" />

  </section>

  <section class="text-gray-600 body-font my-20">
    <SectionTitle main-title="精選文章" />

    <div class="">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="flex flex-col bg-white dark:bg-indigo-900 rounded-xl shadow overflow-hidden">
          <div class="relative w-full pt-[56.25%]">
            <img class="absolute top-0 left-0 w-full h-full rounded-t-xl"
              src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcdn-smiletaiwan.cw.com.tw%2Farticle%2F201903%2Farticle-5c8a14fc35245.jpg/?w=1600&format=webp"
              alt="">
          </div>
          <div class="px-5 pt-3 py-1 flex-grow">
            <h2 class="h-[4rem] text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-2 line-clamp-2">
              火鍋的最佳配角：雲林莿桐豆皮，美味的秘訣全靠好功夫 好吃到一片接一片
            </h2>
          </div>
          <div class="px-3 pb-3 text-end">
            <a class="inline-block px-3 py-1 border-1 border-indigo-200 text-gray-900 dark:text-indigo-100 hover:dark:text-indigo-900 hover:bg-indigo-200  rounded-lg text-lg transition"
              href="https://smiletaiwan.cw.com.tw/article/1573" target="_blank" rel="noopener noreferrer">
              <span class="text-lg">閱讀全文...</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>