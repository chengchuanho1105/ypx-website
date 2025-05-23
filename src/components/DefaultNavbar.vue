<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import { NavigationBarMenuLinks } from '@/router/pageMeta.ts'
import { CompanyProfile } from '@/config/companyProfile.ts'

const isScrolled = ref(false)
const NavigationBarMenuOpen = ref(false)
const lastScrollTop = ref(0)
const isNavbarVisible = ref(true)

const toggleMenu = () => {
    NavigationBarMenuOpen.value = !NavigationBarMenuOpen.value
}

const onScroll = () => {
    const currentScrollTop = window.scrollY
    if (currentScrollTop > 5) {
        isScrolled.value = true
    } else {
        isScrolled.value = false
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollTop > lastScrollTop.value && currentScrollTop > 50) {
        isNavbarVisible.value = false
    } else {
        isNavbarVisible.value = true
    }
    lastScrollTop.value = currentScrollTop
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div id="defaultNavbar" :class="{
        'fixed top-0 left-0 w-full z-50 transition-all duration-300': true,
        'bg-indigo-200/70 dark:bg-indigo-800/70 shadow backdrop-blur': isScrolled,
        'bg-indigo-200/30 dark:bg-indigo-800/30': !isScrolled,
        '-translate-y-full': !isNavbarVisible, // Hide the navbar
        'translate-y-0': isNavbarVisible,     // Show the navbar
    }">
        <nav class="flex items-center mx-auto justify-between py-2 px-5">
            <div class="flex items-center space-x-2">
                <img :src="CompanyProfile.favicon" alt="" class="h-[40px] w-[40px]" />
                <a :href="'/' + CompanyProfile.githubRepo">
                    <span class="text-lg font-bold text-indigo-950 dark:text-indigo-50">
                        {{ CompanyProfile.shortName }}
                    </span>
                </a>
            </div>
            <ul class="hidden lg:flex items-center space-x-8">
                <li v-for="link in NavigationBarMenuLinks" :key="link.path" class="relative group">
                    <router-link :to="link.path" :class="[
                        'inline-block transition duration-300 transform',
                        $route.path === link.path
                            ? 'text-indigo-800 dark:text-indigo-200 border-b-2 border-indigo-700 dark:border-indigo-300 pointer-events-none'
                            : 'text-gray-800 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-indigo-200 hover:scale-105',
                    ]">
                        {{ link.name }}
                    </router-link>

                    <!-- 有子選單才顯示下拉 -->
                    <ul v-if="link.children && link.children.length"
                        class="absolute top-full left-0 w-48 bg-gray-200 dark:bg-gray-800 shadow-xl rounded-xl invisible group-hover:visible z-50">
                        <li v-for="child in link.children" :key="child.path"
                            class="px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-800 rounded-xl">
                            <router-link :to="child.path"
                                class="block text-gray-800 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-indigo-200"
                                :class="$route.path === child.path
                                    ? 'text-indigo-800 dark:text-indigo-200 border-b-2 border-indigo-700 dark:border-indigo-300 pointer-events-none'
                                    : 'text-gray-800 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-indigo-200 hover:scale-105'">
                                {{ child.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="hidden lg:block">
                <a href="/contact" class="bg-indigo-600 hover:bg-indigo-700 text-lg text-white px-4 py-2 rounded-full">
                    聯絡購買
                </a>
            </div>
            <button class="lg:hidden" @click="toggleMenu">
                <span v-if="!NavigationBarMenuOpen"
                    class="text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 p-1 border-2 rounded-lg">☰</span>
                <span v-else
                    class="text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 p-1 border-2 rounded-lg">✕</span>
            </button>
        </nav>
        <transition name="fade">
            <div v-if="NavigationBarMenuOpen"
                class="lg:hidden py-5 px-15 bg-indigo-50 dark:bg-indigo-950 space-y-3 text-base text-end">

                <router-link v-for="link in NavigationBarMenuLinks" :key="link.path" :to="link.path" class="block py-3 text-gray-800 dark:text-gray-50
                    hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300 transform">
                    {{ link.name }}
                </router-link>

                <a href=""
                    class="block py-3 text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-300 transform">
                    聯絡購買
                </a>
            </div>
        </transition>

    </div>

    <div class="fixed bottom-5 right-3 z-50">
        <a v-show="isScrolled" href="#banner"
            class="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700">
            <span class="text-lg font-bold text-white">Top</span>
        </a>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>