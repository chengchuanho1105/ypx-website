<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue';
import NewsList from '@/components/NewsList.vue';

import { newsList } from '@/data/NewsPage/NewsListData.ts';

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">

    <!-- Page: 最新消息 (News)； Section: 最新消息列表 (News List) -->
    <SectionDefStyle id="news-newsList" class="my-10" main-title="最新消息" sub-title="News" data-aos="fade-up">
      <div class="p-5">
        <NewsList :newsList="newsList" />
      </div>
    </SectionDefStyle>

  </div>

</template>

<style scoped></style>