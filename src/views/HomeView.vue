<script setup lang="ts">

import HeroSection from '@/components/HeroSection.vue'

import { heroSectionData } from '@/data/HomePage/heroSectionData.ts'

</script>

<template>

  <!-- Page: 首頁 (Home)；Section: 主頁橫幅 (Hero) -->
  <HeroSection id="home-hero" v-for="(item, index) in heroSectionData" :key="index" v-bind="item" />

</template>

<style scoped></style>