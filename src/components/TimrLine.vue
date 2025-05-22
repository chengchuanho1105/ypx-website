<script setup lang="ts">
defineProps<{
    index: number | string
    mainTitle: string
    subTitle: string
    description: string
}>()
</script>

<template>
    <div class="flex relative py-10 sm:items-center lg:w-[80%] w-[90%] mx-auto">
        <!-- 時間線 -->
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-300 dark:bg-gray-300 pointer-events-none"></div>
        </div>
        <!-- 時間次序 -->
        <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-600 dark:bg-indigo-400 relative z-10">
            <span class="text-sm text-white">{{ index }}</span>
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <!-- Icon -->
            <div
                class="flex-shrink-0 w-24 h-24 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-100 rounded-full inline-flex items-center justify-center">
                <slot name="icon">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </slot>
            </div>
            <!-- Description -->
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">{{ mainTitle }}</h2>
                <span class="text-xl font-bold text-gray-800 dark:text-gray-300">{{ subTitle }}</span>
                <p class="text-lg font-medium mt-3 text-gray-700 dark:text-gray-400">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped></style>