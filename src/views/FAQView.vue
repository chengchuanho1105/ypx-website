<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue';
import FaqItem from '@/components/FaqItem.vue';

import { faqsData } from '@/data/FaqPage/faqsData.ts'

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">
    <SectionDefStyle id="faq-fqa" class="my-10" main-title="常見問題 (當前資料僅供參考)" sub-title="FAQ" data-aos="fade-up">
      <div class="p-5">
        <FaqItem v-for="(faq, index) in faqsData" :key="index" :question="faq.question" :answer="faq.answer" />
      </div>
    </SectionDefStyle>
  </div>
</template>

<style scoped></style>
