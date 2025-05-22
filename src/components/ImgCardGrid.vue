<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface ImageCardItem {
    imageUrl: string;
    imageAlt?: string;
    title: string;
    content: string;
    iconClass?: string;
}

const props = defineProps<{
    items: ImageCardItem[];
}>();

// 根據項目數量動態計算網格佈局的 Tailwind Class
const gridClasses = computed(() => {
    const count = props.items.length;
    if (count === 1) {
        return 'lg:grid-cols-1'; // 單個項目時單欄
    } else if (count === 2) {
        // 兩個項目時，在小螢幕上是單欄，大螢幕上是兩欄
        return 'grid-cols-1 lg:grid-cols-2';
    } else if (count >= 3) {
        // 三個或更多項目時，預設為兩欄，但可以根據需要調整
        return 'grid-cols-1 lg:grid-cols-2';
    }
    return ''; // 預設空字串
});
</script>

<template>
    <div class="grid select-none" :class="gridClasses">
        <div v-for="(item, index) in items" :key="index" class="relative overflow-hidden shadow">
            <img class="w-full h-[40svh] object-cover rounded-xl" :src="item.imageUrl"
                :alt="item.imageAlt || item.title" draggable="false" />
            <div
                class="absolute inset-0 flex flex-col justify-center p-5 bg-black/40 text-white dark:bg-black/40 rounded-xl">
                <h2 class=" text-2xl font-bold mb-2">
                    <i :class="[item.iconClass, 'text-indigo-400', 'dark:text-indigo-300', 'text-3xl']"></i>
                    <span class="ml-2">{{ item.title }}</span>
                </h2>
                <p class="text-lg font-medium">
                    {{ item.content }}
                </p>
            </div>
        </div>
    </div>
</template>



<style scoped></style>