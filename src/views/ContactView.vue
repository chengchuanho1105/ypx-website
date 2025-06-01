<script setup lang="ts">
import { ref } from 'vue'

import SectionDefStyle from '@/components/SectionDefStyle.vue'
import FormInputPeer from '@/components/FormInputPeer.vue'

import { CompanyProfile } from '@/config/companyProfile.ts'

// 選擇聯絡方式的 checkbox 狀態
const contactLineID = ref(false)
const contactLineNumber = ref(false)
const contactPhone = ref(false)
const contactEmail = ref(false)

</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">

    <!-- Page: 聯絡我們 (Contact)；Section: 留言表單 (Contact Form) -->
    <SectionDefStyle id="contact-form" class="my-10" main-title="留言表單" sub-title="Contact Form" slogan="期待您寶貴的聲音！"
      data-aos="fade-up">
      <div class="p-0 sm:p-5">
        <form action="https://formsubmit.co/chengchuanho1105@gmail.com" method="POST"
          class="p-5 bg-white rounded-xl shadow-lg dark:bg-indigo-900 transition-colors duration-300">

          <div class="mb-8">
            <div class="flex flex-col md:flex-row gap-5">
              <FormInputPeer element="input" type="text" idName="name" label="公司 / 姓名" required />

              <div class="flex-1 relative">
                <select id="gender" name="gender" required class="peer block w-full py-2 text-lg text-gray-900 border-b-2 border-gray-300 appearance-none
                       dark:text-indigo-100 dark:border-indigo-700 dark:focus:border-indigo-400 bg-transparent
                       focus:outline-none focus:ring-0 focus:border-indigo-600 transition-colors duration-300"
                  aria-required="true" aria-label="性別">
                  <option value="" disabled selected hidden class="text-gray-500 dark:text-indigo-400">
                    選擇性別
                  </option>
                  <option value="male" class="text-gray-900 dark:text-indigo-100 bg-white dark:bg-indigo-900">男</option>
                  <option value="female" class="text-gray-900 dark:text-indigo-100 bg-white dark:bg-indigo-900">女
                  </option>
                  <option value="other" class="text-gray-900 dark:text-indigo-100 bg-white dark:bg-indigo-900">其他
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <p class="mb-4 text-gray-700 dark:text-indigo-200 font-semibold text-lg">
              聯絡方式
              <span class="text-red-500">*</span>
              <span class="text-gray-500 text-sm dark:text-indigo-400 font-normal"> 為避免連絡不到，建議多選</span>
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-gray-800 dark:text-indigo-200 text-base"
              role="group">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="contactLineID" class="accent-indigo-600 w-5 h-5" />
                LINE(ID)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="contactLineNumber" class="accent-indigo-600 w-5 h-5" />
                LINE(手機號碼)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="contactPhone" class="accent-indigo-600 w-5 h-5" />
                電話/手機
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="contactEmail" class="accent-indigo-600 w-5 h-5" />
                Email
              </label>
            </div>

            <div id="contactInputs" class="space-y-8">
              <div v-if="contactLineID" class="relative">
                <FormInputPeer element="input" type="text" idName="lineID" label="LINE(ID)" required />
              </div>
              <div v-if="contactLineNumber" class="relative">
                <FormInputPeer element="input" type="tel" idName="lineNumber" label="LINE(手機號碼)" required />
              </div>
              <div v-if="contactPhone" class="relative">
                <FormInputPeer element="input" type="tel" idName="phone" label="聯絡電話/手機" required />
              </div>
              <div v-if="contactEmail" class="relative">
                <FormInputPeer element="input" type="email" idName="email" label="電子信箱" required />
              </div>
            </div>

          </div>

          <div class="mb-8" role="group" aria-labelledby="reply-time-label">
            <p id="reply-time-label" class="mb-4 text-gray-700 dark:text-indigo-200 font-semibold text-lg">
              希望回覆時段 <span class="text-red-500">*</span>
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 text-gray-800 dark:text-indigo-200 text-base">
              <label>
                <input type="checkbox" name="replyAtAm" value="am" />
                上午（約 09:00 - 12:00）
              </label>
              <label>
                <input type="checkbox" name="replyAtPm" value="pm" />
                下午（約 13:00 - 18:00）
              </label>
            </div>
          </div>

          <div class="relative mb-8">
            <FormInputPeer element="input" type="text" idName="subject" label="留言主旨" required />
          </div>

          <div class="relative mb-10">
            <FormInputPeer element="textarea" idName="message" label="留言內容" rows="5" required />
          </div>

          <div class="flex flex-col sm:flex-row gap-4"> <button type="reset" class="flex-1 py-3 text-base font-medium border rounded-full
                   text-gray-700 border-gray-400 hover:bg-gray-100
                   dark:text-indigo-200 dark:border-indigo-600 dark:hover:bg-indigo-800 transition-all duration-300">
              清除
            </button>
            <button type="submit" class="flex-1 py-3 text-base font-medium text-white rounded-full
                   bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400
                   dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-300 transition-all duration-300">
              送出
            </button>
          </div>
        </form>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 購買方式 (Purchase Methods) -->
    <SectionDefStyle id="contact-purchaseMethods" class="my-10" main-title="購買方式" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <p class="text-gray-800 dark:text-indigo-200">
            1. 現場購買<br>
            2. 留言訂購<br>
            3. LINE訂購<br>
            4. 電話訂購
          </p>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 營業時間 (Business Hours) -->
    <SectionDefStyle id="contact-businessHours" class="my-10" main-title="營業時間" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <ul class="list-disc list-inside">
            <li>
              <span class="text-gray-800 dark:text-indigo-200">週一至週五：09:00 - 18:00</span>
            </li>
            <li>
              <span class="text-gray-800 dark:text-indigo-200">週六：10:00 - 14:00</span>
            </li>
            <li>
              <span class="text-gray-800 dark:text-indigo-200">週日及國定假日休息</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 客服專線 (Customer Service Hotline) -->
    <SectionDefStyle id="contact-customerService" class="my-10" main-title="客服專線" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <p class="text-gray-800 dark:text-indigo-200">
            服務時間：週一至週五 09:00 - 18:00
          </p>
          <p class="text-gray-800 dark:text-indigo-200">
            電話：
            <a href="tel:0800123456" class="text-gray-800 dark:text-indigo-200 hover:underline">0800-123-456</a>
          </p>
          <p class="text-gray-800 dark:text-indigo-200">
            Email：
            <a href="mailto:ypx@gmail.com" class="text-gray-800 dark:text-indigo-200 hover:underline">ypx@gmail.com</a>
          </p>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 社交平台 (Social Media) -->
    <SectionDefStyle id="contact-socialMedia" class="my-10" main-title="社交平台" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <div class="flex gap-5 px-5">
            <a :href="CompanyProfile.socialLinks.line" target="_blank"
              class="text-indigo-800 dark:text-indigo-300 hover:text-indigo-200 dark:hover:text-indigo-100 transition-colors">
              <i class="bi bi-line text-3xl"></i>
            </a>
            <a :href="CompanyProfile.socialLinks.youtube" target="_blank"
              class="text-indigo-800 dark:text-indigo-300 hover:text-indigo-200 dark:hover:text-indigo-100 transition-colors">
              <i class="bi bi-youtube text-3xl"></i>
            </a>
            <a :href="CompanyProfile.socialLinks.instagram" target="_blank"
              class="text-indigo-800 dark:text-indigo-300 hover:text-indigo-200 dark:hover:text-indigo-100 transition-colors">
              <i class="bi bi-instagram text-3xl"></i>
            </a>
            <a :href="CompanyProfile.socialLinks.facebook" target="_blank"
              class="text-indigo-800 dark:text-indigo-300 hover:text-indigo-200 dark:hover:text-indigo-100 transition-colors">
              <i class="bi bi-facebook text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 工廠位置 (Factory Location) -->
    <SectionDefStyle id="contact-factoryLocation" class="my-10" main-title="工廠位置" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1888041435728!2d120.50011059757573!3d23.782271280386805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb50050641069%3A0x1f5fa789756e36c4!2z5rqQ5ZOB6aaZ6LGG55qu5bel5bug!5e0!3m2!1szh-TW!2stw!4v1748075249215!5m2!1szh-TW!2stw"
            width="100%" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 招商合作 (Partnership Opportunities) -->
    <SectionDefStyle id="contact-partnershipPpportunities" class="my-10" main-title="招商合作" sub-title=""
      data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <p class="text-gray-800 dark:text-indigo-200">我們歡迎有意願的合作夥伴洽談合作機會，請透過上述留言表單或客服專線與我們聯繫。</p>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section:  -->
    <SectionDefStyle id="contact-others" class="my-10" main-title="" sub-title="" data-aos="fade-up">
      <div class="p-5">

      </div>
    </SectionDefStyle>

  </div>
</template>

<style scoped></style>
