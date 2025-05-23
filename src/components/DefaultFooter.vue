<script setup lang="ts">
import { NavigationBarMenuLinks } from '@/router/pageMeta.ts'
import { CompanyProfile } from '@/config/companyProfile.ts'
</script>

<template>
    <footer class="bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-50 mt-10 pt-12 pb-5">
        <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-5">

            <!-- 公司資訊 -->
            <div>
                <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                    {{ CompanyProfile.name }}<br>
                    <small class="text-sm opacity-80">
                        {{ CompanyProfile.enName }}
                    </small>
                </h3>
                <div class="h-1 bg-gray-100 rounded overflow-hidden mt-1 mb-5">
                    <div class="w-35 h-full bg-indigo-500 dark:bg-indigo-600"></div>
                </div>
                <p class="mt-4 text-sm px-5">
                    地址：<a :href="CompanyProfile.googleMap">{{ CompanyProfile.address }}</a>
                </p>
                <p class="mb-4 text-sm px-5">
                    電話：<a :href="'tel:' + CompanyProfile.telepohone_Main">{{ CompanyProfile.telepohone_Main }}</a>
                </p>
            </div>

            <!-- 社群平台 -->
            <div class="">
                <h4 class="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-1">追蹤我們</h4>
                <div class="h-1 bg-gray-100 rounded overflow-hidden mt-1 mb-5">
                    <div class="w-35 h-full bg-indigo-500 dark:bg-indigo-600"></div>
                </div>
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

            <!-- 網站地圖 -->
            <div>
                <h4 class="text-lg font-bold text-indigo-700 dark:text-indigo-300 mr-10 mb-1">網站地圖</h4>
                <div class="h-1 bg-gray-100 rounded overflow-hidden mt-1 mb-5">
                    <div class="w-35 h-full bg-indigo-500 dark:bg-indigo-600"></div>
                </div>
                <div class="grid grid-cols-3 px-5">
                    <div v-for="link in NavigationBarMenuLinks" :key="link.path" class="my-1">
                        <router-link :to="link.path"
                            class="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
            </div>

        </div>

        <div
            class="m-5 border-t border-indigo-300 dark:border-indigo-700 text-center text-sm pt-6 text-gray-600 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} <a href="https://chuan.life" target="_blank">chuan.life.</a> 保留所有權利。
        </div>
    </footer>
</template>

<style scoped></style>