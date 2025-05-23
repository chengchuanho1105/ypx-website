<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    mainTitle: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    buttonText: {
        type: String,
        default: '了解更多',
    },
    imageWidthProp: {
        type: String,
        default: '50%',
    },
    imagePosition: {
        type: String,
        default: 'left', // 預設圖片在左邊
        validator: (value) => ['left', 'right'].includes(value),
    },
});

const imageWidth = computed(() => props.imageWidthProp);
</script>

<template>
    <div class="flex bg-white p-3 rounded-xl shadow-xl h-[40svh]">
        <div v-if="imagePosition === 'left'" :style="{ width: imageWidth }" class="overflow-hidden">
            <img :src="img"
                class="object-cover h-full w-full transform origin-center transition-transform duration-300 hover:scale-105 rounded-lg"
                draggable="false" />
        </div>

        <div class="flex-1 flex flex-col justify-center p-5">
            <div>
                <h2 class="text-2xl font-bold mb-2">{{ mainTitle }}</h2>
                <h3 class="text-lg text-gray-600 mb-4">{{ subTitle }}</h3>
                <p class="text-gray-700 mb-6">{{ description }}</p>
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-auto">
                {{ buttonText }}
            </button>
        </div>

        <div v-if="imagePosition === 'right'" :style="{ width: imageWidth }" class="overflow-hidden">
            <img :src="img"
                class="object-cover h-full w-full transform origin-center transition-transform duration-300 hover:scale-105 rounded-lg"
                draggable="false" />
        </div>
    </div>
</template>

<style scoped></style>