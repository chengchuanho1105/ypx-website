<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue';
const route = useRoute();
// 根據路由的 meta.layout 決定使用哪個佈局組件
// 如果路由沒有指定 layout，則使用 DefaultLayout
const layout = computed(() => {
  // route.meta.layout 可能會是組件本身，也可能是個字串，然後你需要一個 map
  // 最簡單的方式是直接在 meta 中傳入組件
  return route.meta.layout || DefaultLayout;
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
