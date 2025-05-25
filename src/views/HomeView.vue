<script setup lang="ts">

import TransitionSection from '@/components/TransitionSection.vue'

// infoImg import
import infoImg1 from '@/assets/media/關於我們.png'
import infoImg2 from '@/assets/media/精選產品.png'
import infoImg3 from '@/assets/media/媒體介紹.png'
import infoImg4 from '@/assets/media/客戶見證.png'

</script>

<template>

  <section id="info" class="my-10">
    <TransitionSection :background="infoImg1" imgHeight="60svh" leftTitle="關於我們"
      des="源品香由一群熱愛土地與豆製品的職人組成。<br>並秉持「傳承、專業、誠信」，淬鍊出豆香的純粹與真誠，讓健康的飲食悄然在每一張豆皮中發芽。" link="/about" linkText="了解更多" />

    <TransitionSection :background="infoImg2" imgHeight="60svh" rightTitle="精選產品"
      des="產品皆由天然食材製成，無無外添加任何化學成分。<br>讓您在享受美味的同時，也能感受健康生活的美好。" link="/product" linkText="挑選產品" />

    <TransitionSection :background="infoImg3" imgHeight="60svh" leftTitle="媒體介紹"
      des="媒體報導不只是產品的介紹，更是我們對品質與服務的承諾。<br>源品香相信能讓每一位顧客感受到我們的用心與專業。" link="/media" linkText="更多介紹" />

    <TransitionSection :background="infoImg4" imgHeight="60svh" rightTitle="客戶見證"
      des="客戶見證是我們最好的廣告。讓我們一起分享這些美好的故事。邀請更多人認識源品香的堅持與美味。" link="/contact" linkText="聯絡購買" />
  </section>

</template>

<style scoped></style>