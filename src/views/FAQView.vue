<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import FaqItem from '@/components/FaqItem.vue';

const faqs = [
  {
    question: '源品香豆皮的黃豆哪裡來的？',
    answer:
      '我們採用台灣在地的單一品種非基因改造黃豆，確保風味純正、品質穩定，同時支持本土農業。',
  },
  {
    question: '是否含有添加物或防腐劑？',
    answer:
      '源品香堅持手工製作，不添加任何化學成分或防腐劑，讓每一口都安心。',
  },
]
</script>

<template>
  <section class="my-10">
    <SectionTitle main-title="常見問題" sub-title="FAQ" />
    <FaqItem v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
  </section>
</template>

<style scoped></style>