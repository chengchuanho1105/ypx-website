<script setup lang="ts">
import { ref } from 'vue';

import IframeVideoCard from '@/components/IframeVideoCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const videoData = ref([
  {
    // Use actual YouTube embed URLs for real functionality.
    // E.g., "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example: Rick Astley - Never Gonna Give You Up
    title: '認識我們：品牌故事',
    description: '這是一段關於我們品牌起源與發展的詳細說明，講述了從最初的夢想到如今的堅持，以及我們如何一步步成長的感人歷程。我們相信，每一份努力都值得被看見，每一個細節都承載著我們對品質的執著。請點擊觀看，深入了解我們的故事，感受我們對產品的熱情和匠心獨運。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video ID
    title: '產品製程大揭秘',
    description: '本影片將帶您一探產品從原料到成品的完整製程，從嚴格的選材到精密的加工，每一個環節都秉持著最高標準。我們將透明化展示生產流程，讓您安心享受我們帶來的優質產品。歡迎觀看，了解更多產品背後的秘密。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: '用戶心得分享',
    description: '聽聽我們的忠實客戶怎麼說！本影片集結了多位用戶的真實體驗與回饋，他們將分享使用我們產品後的感受，以及產品如何改善了他們的生活。這些真誠的分享，是我們不斷前進的最大動力。',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: '企業社會責任',
    description: '我們不僅專注於產品，更致力於回饋社會。本影片將介紹我們在環保、社區參與等方面的努力，展現企業的社會責任。我們深信，永續發展是企業長青的基石。',
  },
]);

</script>

<template>

  <section id="" class="my-10">
    <SectionTitle main-title="精選影音" />
    <IframeVideoCard :videos="videoData" />

  </section>

  <section class="text-gray-600 body-font my-20">
    <SectionTitle main-title="精選文章" />
    <div class="flex flex-wrap">

    </div>
  </section>
</template>

<style scoped></style>