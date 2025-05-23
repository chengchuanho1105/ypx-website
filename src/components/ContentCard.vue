<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    category: {
        type: String,
        default: '' // 預設為空字串，若不傳入則不顯示
    },
    title: {
        type: String,
        default: '' // 預設為空字串，若不傳入則不顯示
    },
    subtitle: {
        type: String,
        default: '' // 預設為空字串，若不傳入則不顯示
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        default: '圖片'
    }
});

</script>

<template>
    <div class="bg-white dark:bg-indigo-900 rounded-xl shadow">
        <div class="flex lg:flex-row flex-col items-center">
            <div class="lg:w-[70%] w-full p-5">
                <div v-if="category" class="w-20 mb-2 p-1 text-center
                                     bg-indigo-500 dark:bg-indigo-600 rounded-full">
                    <span class="text-sm font-medium text-white dark:text-indigo-100">
                        {{ category }}
                    </span>
                </div>
                <div v-if="title" class="w-full my-2">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-indigo-100">
                        {{ title }}
                    </h2>
                </div>
                <div v-if="subtitle" class="w-full">
                    <span class="text-xl font-bold text-gray-800 dark:text-indigo-300">
                        {{ subtitle }}
                    </span>
                </div>
                <div class="flex-1 w-full my-5 pl-5 overflow-y-auto">
                    <p class="text-lg font-medium text-gray-700 dark:text-indigo-200" v-html="content">
                    </p>
                </div>
            </div>
            <div class="lg:w-[30%] w-full lg:h-[40svh] h-full overflow-hidden shrink-0">
                <img class="w-full h-full object-cover lg:rounded-r-xl lg:rounded-l-none rounded-b-xl" :src="imageUrl"
                    :alt="imageAlt">
            </div>
        </div>
    </div>
</template>

<style scoped></style>