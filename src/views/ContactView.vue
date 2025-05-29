<script setup lang="ts">
import { onMounted } from 'vue'

import { CompanyProfile } from '@/config/companyProfile.ts'

import SectionDefStyle from '@/components/SectionDefStyle.vue'

onMounted(() => {
  const lineIDCheckbox = document.getElementById('contactLineID') as HTMLInputElement | null;
  const lineNumberCheckbox = document.getElementById('contactLineNumber') as HTMLInputElement | null;
  const phoneCheckbox = document.getElementById('contactPhone') as HTMLInputElement | null;
  const emailCheckbox = document.getElementById('contactEmail') as HTMLInputElement | null;

  const lineIDInput = document.getElementById('lineIDInput');
  const lineNumberInput = document.getElementById('lineNumberInput');
  const phoneInput = document.getElementById('phoneInput');
  const emailInput = document.getElementById('emailInput');

  if (lineIDCheckbox && lineIDInput) {
    lineIDCheckbox.addEventListener('change', () => {
      lineIDInput.classList.toggle('hidden', !lineIDCheckbox.checked);
    });
  }

  if (lineNumberCheckbox && lineNumberInput) {
    lineNumberCheckbox.addEventListener('change', () => {
      lineNumberInput.classList.toggle('hidden', !lineNumberCheckbox.checked);
    });
  }

  if (phoneCheckbox && phoneInput) {
    phoneCheckbox.addEventListener('change', () => {
      phoneInput.classList.toggle('hidden', !phoneCheckbox.checked);
    });
  }

  if (emailCheckbox && emailInput) {
    emailCheckbox.addEventListener('change', () => {
      emailInput.classList.toggle('hidden', !emailCheckbox.checked);
    });
  }
});


</script>

<template>
  <div class="max-w-[1024px] container mx-auto p-3">

    <!-- Page: 聯絡我們 (Contact)；Section: 留言表單 (Contact Form) -->
    <SectionDefStyle id="contact-form" class="my-10" main-title="留言表單(停用中)" sub-title="Contact Form" slogan="期待您寶貴的聲音！"
      data-aos="fade-up">
      <div class="p-5">

        <form action="" class="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">

          <!-- 姓名 & 性別 -->
          <div class="mb-10">
            <p class="mb-3 text-gray-700 dark:text-gray-300 font-semibold">
              姓名 & 性別
            </p>
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1 relative z-0">
                <input id="name" type="text" name="name" required
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                  placeholder=" " aria-required="true" />
                <label for="name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  姓名（稱呼）<span class="text-red-500">*</span>
                </label>
              </div>
              <div class="flex-1 relative z-0">
                <select id="gender" name="gender" required
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                  aria-required="true" aria-label="性別">
                  <option value="" disabled selected hidden>選擇性別<span class="text-red-500"> * </span></option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 回覆方式 -->
          <div class="mb-10">
            <p class="mb-3 text-gray-700 dark:text-gray-300 font-semibold">回覆方式
              <span class="text-red-500"> * </span>
              <span class="text-gray-500 text-sm"> 為避免連絡不到，建議多選</span>
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4" role="group" aria-labelledby="reply-method-label">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="contactLineID" name="contactMethod" value="lineID" class="accent-blue-600" />
                LINE(ID)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="contactLineNumber" name="contactMethod" value="lineNumber"
                  class="accent-blue-600" />
                LINE(手機號碼)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="contactPhone" name="contactMethod" value="phone" class="accent-blue-600" />
                電話/手機
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="contactEmail" name="contactMethod" value="email" class="accent-blue-600" />
                Email
              </label>
            </div>

            <!-- 動態顯示輸入欄位 -->
            <div id="contactInputs">
              <div id="lineIDInput" class="hidden relative z-0 mb-4">
                <input type="text" name="lineID" id="lineID" placeholder=" "
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" />
                <label for="lineID"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  LINE(ID)
                </label>
              </div>
              <div id="lineNumberInput" class="hidden relative z-0 mb-4">
                <input type="tel" name="lineNumber" id="lineNumber" placeholder=" "
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" />
                <label for="lineNumber"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  LINE(手機號碼)
                </label>
              </div>
              <div id="phoneInput" class="hidden relative z-0 mb-4">
                <input type="tel" name="phone" id="phone" placeholder=" "
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" />
                <label for="phone"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  聯絡電話/手機
                </label>
              </div>
              <div id="emailInput" class="hidden relative z-0">
                <input type="email" name="email" id="email" placeholder=" "
                  class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" />
                <label for="email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  電子信箱
                </label>
              </div>
            </div>
          </div>

          <!-- 希望回覆時段 -->
          <div class="mb-10" role="group" aria-labelledby="reply-time-label">
            <p id="reply-time-label" class="mb-3 text-gray-700 dark:text-gray-300 font-semibold">希望回覆時段 <span
                class="text-red-500">*</span></p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="replyTime" value="am" class="accent-blue-600" required />
                上午（約 09:00 - 12:00）
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="replyTime" value="pm" class="accent-blue-600" />
                下午（約 13:00 - 18:00）
              </label>
            </div>
          </div>

          <!-- 留言主旨 -->
          <div class="relative z-0 mb-5">
            <input type="text" name="subject" id="subject" required placeholder=" "
              class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              aria-required="true" />
            <label for="subject"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              留言主旨 <span class="text-red-500">*</span>
            </label>
          </div>

          <!-- 留言內容 -->
          <div class="relative z-0 mb-10">
            <textarea name="message" id="message" rows="5" required placeholder=" "
              class="peer block w-full py-2 text-lg text-gray-900 border-0 border-b-2 border-gray-300 resize-none appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              aria-required="true"></textarea>
            <label for="message"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              留言內容 <span class="text-red-500">*</span>
            </label>
          </div>

          <!-- 按鈕區 -->
          <div class="flex">
            <button type="reset"
              class="flex-1 py-3 text-base font-medium text-gray-700 border border-gray-400 rounded-l-full hover:bg-gray-100 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-700 transition">
              清除
            </button>
            <button type="submit"
              class="flex-1 py-3 text-base font-medium text-white bg-blue-600 rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-300 transition">
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
          1. 現場購買<br>
          2. 留言訂購<br>
          3. LINE訂購<br>
          4. 電話訂購
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 營業時間 (Business Hours) -->
    <SectionDefStyle id="contact-businessHours" class="my-10" main-title="營業時間" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <ul class="list-disc list-inside">
            <li>週一至週五：09:00 - 18:00</li>
            <li>週六：10:00 - 14:00</li>
            <li>週日及國定假日休息</li>
          </ul>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 客服專線 (Customer Service Hotline) -->
    <SectionDefStyle id="contact-customerService" class="my-10" main-title="客服專線" sub-title="" data-aos="fade-up">
      <div class="p-5">
        <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
          <p>服務時間：週一至週五 09:00 - 18:00</p>
          <p>電話：<a href="tel:0800123456" class="text-indigo-600 hover:underline">0800-123-456</a></p>
          <p>Email：<a href="mailto:ypx@gmail.com" class="text-indigo-600 hover:underline">ypx@gmail.com</a></p>
        </div>
      </div>
    </SectionDefStyle>

    <!-- Page: 聯絡我們 (Contact)；Section: 社交平台 (Social Media) -->
    <SectionDefStyle id="contact-socialMedia" class="my-10" main-title="社交平台" sub-title="" data-aos="fade-up">
      <div class="p-5">
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
          <p>我們歡迎有意願的合作夥伴洽談合作機會，請透過上述留言表單或客服專線與我們聯繫。</p>
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

<style scoped>
/* 如果你想用 fontawesome 的圖示，要先安裝並引入 fontawesome */
/* 以下是範例，若沒有使用 fontawesome 可改成 svg 或純文字 */
.fab {
  margin-right: 0.5rem;
}
</style>
