<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

import { newsListData } from '@/data/NewsPage/NewsListData.ts';

const route = useRoute();
const router = useRouter();

const news = computed(() =>
    newsListData.find((p) => p.id === Number(route.params.id))
)

import SectionDefStyle from '@/components/SectionDefStyle.vue';

function goBack() {
    router.back();
}

function shareArticle() {
    const shareUrl = window.location.href;
    const shareTitle = news.value?.title || '最新消息';
    const shareText = `來看看這則消息：「${shareTitle}」`;

    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
        }).catch((err) => {
            console.warn('分享取消或失敗', err);
        });
    } else {
        // 降級：複製到剪貼簿
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('已複製分享連結到剪貼簿');
        }).catch(() => {
            alert('複製失敗，請手動複製網址');
        });
    }
}


</script>

<template>
    <div id="" class="max-w-[1024px] container mx-auto p-3">

        <SectionDefStyle id="" class="" main-title="消息詳情" sub-title="News Detail" data-aos="fade-up">
            <div class="p-5">
                <div class="p-5 bg-white dark:bg-indigo-900 rounded-xl shadow">
                    <div class="pb-2 grid grid-cols-3">
                        <div class="text-start">
                            <span @click="goBack"
                                class="p-2 text-indigo-800 dark:text-indigo-200 hover:underline cursor-pointer">
                                <i class="bi bi-chevron-left"></i> 返回
                            </span>
                        </div>
                        <div class="text-center">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-600 text-sm font-normal text-indigo-900 dark:text-indigo-100 rounded-full">
                                {{ news?.category }}
                            </span>
                        </div>
                        <div class="text-end">
                            <span @click="shareArticle"
                                class="p-2 text-indigo-800 dark:text-indigo-200 hover:underline cursor-pointer">
                                分享 <i class="bi bi-share-fill"></i>
                            </span>
                        </div>
                    </div>

                    <hr class="h-1 my-2">
                    <h3 class="mb-2 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                        {{ news?.title }}
                    </h3>
                    <time class="text-sm font-stretch-normal text-indigo-700 dark:text-indigo-300">
                        {{ news?.date }}
                    </time>
                    <p v-html="news?.summary" class="mt-2 text-lg font-normal text-indigo-800 dark:text-indigo-200">
                    </p>
                </div>
            </div>
        </SectionDefStyle>

    </div>

</template>

<style scoped></style>