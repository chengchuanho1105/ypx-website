<script setup lang="ts">
import { defineProps } from 'vue';

interface ImageCardItem {
    imageUrl: string;
    imageAlt?: string;
    title: string;
    content: string;
    iconClass?: string;
}

defineProps<{
    items: ImageCardItem[];
}>();

</script>

<template>
    <div class="select-none">
        <div v-for="(item, index) in items" :key="index" class="relative overflow-hidden shadow">
            <img class="w-full lg:h-[40svh] h-[60svh] object-cover rounded-xl" :src="item.imageUrl"
                :alt="item.imageAlt || item.title" draggable="false" />
            <div
                class="absolute inset-0 flex flex-col justify-center p-5 bg-black/40 text-white dark:bg-black/40 rounded-xl">
                <h2 class=" text-2xl font-bold mb-2">
                    <i :class="[item.iconClass, 'text-indigo-400', 'dark:text-indigo-300', 'text-3xl']"></i>
                    <span class="ml-2">
                        {{ item.title }}
                    </span>
                </h2>
                <p class="text-lg font-medium">
                    {{ item.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>