<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
    <div v-if="show" class="fixed bottom-[80px] left-[50%] translate-x-[-50%] z-50">
        <div
            class="flex items-center p-3 text-indigo-800 rounded-lg bg-red-200 dark:bg-red-900 dark:text-indigo-100 shadow-lg">
            <i class="bi bi-exclamation-triangle-fill text-lg text-end"></i>
            <div class="flex-1 px-5">
                <p class="text-lg text-center">
                    源品香官方網站目前正在建置中。<br>
                    請待稍後再瀏覽，獲得正確資訊。
                </p>
            </div>
            <button @click="show = false" class="text-lg text-gray-500 hover:text-black dark:hover:text-white">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
</template>

<style scoped></style>
