<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
    {
        id: 'product-1',
        name: '黃金豆皮',
        description: '香氣濃郁，傳統工法製成，適合各式料理。',
        image: 'https://fakeimg.pl/600x400/8577cd/ffffff/?text=黃金豆皮',
    },
    {
        id: 'product-2',
        name: '薄片豆皮',
        description: '適合涼拌、包捲料理，滑順口感令人著迷。',
        image: 'https://fakeimg.pl/600x400/6c63ff/ffffff/?text=薄片豆皮',
    },
    {
        id: 'product-3',
        name: '濃香厚皮',
        description: '鍋物專用，Q 彈滑順，吸附湯汁美味升級。',
        image: 'https://fakeimg.pl/600x400/3f3f46/ffffff/?text=濃香厚皮',
    },
]

const currentIndex = ref(0)
const total = products.length

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % total
}

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + total) % total
}

const goToProduct = (id: string) => {
    router.push(`/product/${id}`)
}

</script>

<template>
    <div class="relative w-full overflow-hidden">
        <!-- Slides wrapper -->
        <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(product, i) in products" :key="i"
                class="w-full flex-shrink-0 px-9 py-5 rounded-xl shadow bg-white dark:bg-gray-800">
                <div class="flex flex-col md:flex-row gap-6 items-center">
                    <!-- Image -->
                    <img :src="product.image" :alt="product.name"
                        class="w-full md:w-1/2 lg:h-[40svh] h-[30svh] object-cover rounded-lg shadow" />

                    <!-- Text Content -->
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {{ product.name }}
                        </h3>
                        <p class="text-lg text-gray-700 dark:text-gray-300">
                            {{ product.description }}
                        </p>
                        <button @click="goToProduct(product.id)"
                            class="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                            查看介紹 →
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Prev / Next -->
        <button @click="prev"
            class="absolute top-[50%] left-2 -translate-y-1/2 bg-indigo-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-300 p-2 rounded-full shadow">
            ‹
        </button>
        <button @click="next"
            class="absolute top-[50%] right-2 -translate-y-1/2 bg-indigo-100 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-300 p-2 rounded-full shadow">
            ›
        </button>
    </div>
</template>

<style scoped></style>