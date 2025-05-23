<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    mainTitle: {
        type: String,
        required: true,
        default: '預設標題'
    },
    subTitle: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-wrap sm:flex-row flex-col">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-indigo-100">
                {{ mainTitle }}
                <small class="text-xl font-bold text-gray-700 dark:text-indigo-300 ml-2">
                    {{ subTitle }}
                </small>
            </h1>
        </div>
        <div class="h-1 bg-gray-300 rounded overflow-hidden mt-1 mb-5">
            <div class="w-50 h-full bg-indigo-500 dark:bg-indigo-600"></div>
        </div>
    </div>
</template>

<style scoped></style>