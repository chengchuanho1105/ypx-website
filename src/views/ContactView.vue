<script setup lang="ts">
import { ref } from 'vue'

import SectionTitle from '@/components/SectionTitle.vue'
import { CompanyProfile } from '@/config/companyProfile.ts'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = ref({
  name: '',
  email: '',
  message: '',
})

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const submitForm = () => {
  // 重置錯誤訊息
  errors.value = { name: '', email: '', message: '' }

  let valid = true
  if (!form.value.name.trim()) {
    errors.value.name = '請輸入姓名'
    valid = false
  }
  if (!validateEmail(form.value.email)) {
    errors.value.email = '請輸入有效的 Email'
    valid = false
  }
  if (!form.value.message.trim()) {
    errors.value.message = '請輸入留言內容'
    valid = false
  }

  if (!valid) return

  // 送出表單的邏輯 (例如發 API)
  alert(`感謝您的留言，${form.value.name}！我們會盡快回覆您。`)

  // 清空表單
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<template>
  <div class="max-w-5xl mx-auto p-6 space-y-12">

    <!-- 頁面標題 -->
    <h1 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300 text-center">
      聯絡我們
    </h1>

    <!-- 留言表單 -->
    <section class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
      <h2 class="text-xl font-semibold text-indigo-600">留言表單</h2>
      <form @submit.prevent="submitForm" class="space-y-4 max-w-xl">
        <div>
          <label for="name" class="block font-medium mb-1">姓名 *</label>
          <input id="name" v-model="form.name" type="text"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="您的姓名" />
          <p v-if="errors.name" class="text-sm text-red-500 mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label for="email" class="block font-medium mb-1">電子郵件 *</label>
          <input id="email" v-model="form.email" type="email"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="example@mail.com" />
          <p v-if="errors.email" class="text-sm text-red-500 mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label for="phone" class="block font-medium mb-1">電話</label>
          <input id="phone" v-model="form.phone" type="tel"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="可填手機或市話" />
        </div>
        <div>
          <label for="message" class="block font-medium mb-1">留言內容 *</label>
          <textarea id="message" v-model="form.message" rows="5"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="請輸入您的問題或建議"></textarea>
          <p v-if="errors.message" class="text-sm text-red-500 mt-1">{{ errors.message }}</p>
        </div>
        <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
          送出留言
        </button>
      </form>
    </section>
  </div>

  <section id="" class="my-10">
    <SectionTitle main-title="留言表單" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">

    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="購買方式" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
      1. 現場購買<br>
      2. 留言訂購<br>
      3. LINE訂購<br>
      4. 電話訂購
    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="營業時間" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
      <ul class="list-disc list-inside">
        <li>週一至週五：09:00 - 18:00</li>
        <li>週六：10:00 - 14:00</li>
        <li>週日及國定假日休息</li>
      </ul>
    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="客服專線" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
      <p>服務時間：週一至週五 09:00 - 18:00</p>
      <p>電話：<a href="tel:0800123456" class="text-indigo-600 hover:underline">0800-123-456</a></p>
      <p>Email：<a href="mailto:ypx@gmail.com" class="text-indigo-600 hover:underline">ypx@gmail.com</a></p>
    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="社交平台" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
      <div class="flex gap-5 px-5">
        <a :href="CompanyProfile.lineOfficialAccount" target="_blank"
          class="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
          <i class="bi bi-line text-3xl"></i>
        </a>
        <a :href="CompanyProfile.youtubeChannel" target="_blank"
          class="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
          <i class="bi bi-youtube text-3xl"></i>
        </a>
        <a :href="CompanyProfile.instagramPage" target="_blank"
          class="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
          <i class="bi bi-instagram text-3xl"></i>
        </a>
        <a :href="CompanyProfile.facebookFanspage" target="_blank"
          class="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
          <i class="bi bi-facebook text-3xl"></i>
        </a>
      </div>
    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="工廠位置" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">

    </div>
  </section>

  <section id="" class="my-10">
    <SectionTitle main-title="招商合作" sub-title="" />
    <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
      <p>我們歡迎有意願的合作夥伴洽談合作機會，請透過上述留言表單或客服專線與我們聯繫。</p>
    </div>
  </section>
</template>

<style scoped>
/* 如果你想用 fontawesome 的圖示，要先安裝並引入 fontawesome */
/* 以下是範例，若沒有使用 fontawesome 可改成 svg 或純文字 */
.fab {
  margin-right: 0.5rem;
}
</style>
