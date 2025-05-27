<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

import SectionDefStyle from '@/components/SectionDefStyle.vue';
import ProductCarousel from '@/components/ProductCarousel.vue'

import { products } from '@/data/ProductPage/productData'

const selectedCategory = ref(products[0].category)
const categories = [...new Set(products.map(p => p.category))]
const filteredProducts = computed(() =>
  products.filter(p => p.category === selectedCategory.value)
)

</script>

<template>

  <SectionDefStyle id="product-bestSellingProduct" class="my-10" main-title="熱銷產品" sub-title="Best Selling Product">
    <div class="p-5">
      <ProductCarousel />
    </div>
  </SectionDefStyle>

  <SectionDefStyle id="product-productList" class="my-10" main-title="產品列表" sub-title="Product List">
    <div class="lg:flex p-5">
      <!-- 左側：分類清單 -->
      <ul class="min-w-[6.75rem] lg:me-5 lg:mb-0 mb-5 space-y-3 flex flex-col">
        <li v-for="category in categories" :key="category">
          <button class="w-full p-3 inline-flex items-center text-lg rounded-lg transition-all" :class="{
            'bg-indigo-700 dark:bg-indigo-600 font-bold text-gray-100': selectedCategory === category,
            'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100':
              selectedCategory !== category
          }" @click="selectedCategory = category">
            {{ category }}
          </button>
        </li>
      </ul>

      <!-- 右側：產品列表 -->
      <div class="w-full grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div v-for="product in filteredProducts" :key="product.id"
          class="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          @click="router.push(`/product/productList/${product.id}`)">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-t-xl" />
          <div class="p-2">
            <h2 class="text-xl font-semibold">{{ product.name }}</h2>
            <p class="text-gray-700 mb-3">{{ product.description }}</p>
            <p class="text-indigo-600 font-bold text-end">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

  </SectionDefStyle>

</template>

<style scoped></style>