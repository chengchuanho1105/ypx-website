<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { pathToTitleMap } from '@/router/pageMeta.ts'

const route = useRoute()

// 分解路徑（例如 /product/certifications => ["product", "certifications"]）
const pathSegments = computed(() => {
    return route.path.split('/').filter(Boolean)
})

// 組合成 breadcrumb
const breadcrumbItems = computed(() => {
    const segments = pathSegments.value
    const items: { title: string; to: string | null }[] = []

    items.push({ title: pathToTitleMap['/'] || '首頁', to: '/' })

    let accumulatedPath = ''
    for (let i = 0; i < segments.length; i++) {
        accumulatedPath += '/' + segments[i]
        const fullPath = accumulatedPath
        const title = pathToTitleMap[fullPath.replace(/^\//, '')] || segments[i]  // <--- 這裡
        items.push({
            title,
            to: i === segments.length - 1 ? null : fullPath,
        })
    }

    return items
})

</script>

<template>
    <nav class="select-none shadow">
        <ol class="flex overflow-hidden text-sm
               bg-white dark:bg-gray-800">
            <li>
                <RouterLink to="/" class="block h-10 px-5 leading-10 transition-colors
                   bg-gray-100 dark:bg-indigo-700
                   text-gray-500 dark:text-indigo-100 hover:text-indigo-600 dark:hover:text-indigo-50">
                    <i class="bi bi-house-door"></i>
                    首頁
                </RouterLink>
            </li>

            <template v-for="(item, idx) in breadcrumbItems.slice(1)" :key="idx">
                <li class="relative flex items-center">
                    <span class="absolute h-10 w-4 bg-gray-100 dark:bg-indigo-700
                        [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]">
                    </span>
                    <template v-if="item.to && $route.path !== item.to">
                        <RouterLink :to="item.to"
                            class="block h-10 pl-7 pr-5 leading-10 transition-colors
                                             text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-indigo-50">
                            {{ item.title }}
                        </RouterLink>
                    </template>
                    <template v-else>
                        <span class="block h-10 pl-7 pr-5 leading-10
                         text-gray-500 dark:text-indigo-400 font-semibold"> {{ item.title }}
                        </span>
                    </template>
                </li>
            </template>
        </ol>
    </nav>
</template>
