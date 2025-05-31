<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue';
import CardExpander from '@/components/CardExpander.vue';
import IframeVideoCard from '@/components/IframeVideoCard.vue';
import IframeArticleCard from '@/components/IframeArticleCard.vue';

import { iframeVideosData } from '@/data/MediaPage/IframeVideoData.ts'
import { iframeArticlesData } from '@/data/MediaPage/IframeArticleData.ts'

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">

    <!-- Page: 媒體介紹 (Media)； Section: 精選影音 (Featured Video) -->
    <SectionDefStyle id="media-featuredVideo" class="my-10" main-title="精選影音" sub-title="" data-aos="fade-up">
      <CardExpander :collapsedHeight="630">
        <IframeVideoCard class="p-5" :videos="iframeVideosData" />
      </CardExpander>
    </SectionDefStyle>

    <!-- Page: 媒體介紹 (Media)； Section: 精選文章 (Featured Article) -->
    <SectionDefStyle id="media-featuredArticle" class="my-10" main-title="精選文章" sub-title="" data-aos="fade-up">
      <IframeArticleCard class="p-5" :articles="iframeArticlesData" />
    </SectionDefStyle>

  </div>
</template>

<style scoped></style>