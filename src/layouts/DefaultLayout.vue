<script setup lang="ts">
import Navbar from '../components/DefaultNavbar.vue';
import UpdatingAlert from '@/components/UpdatingAlert.vue';
import Banner from '../components/DefaultBanner.vue';
import Breadcrumb from '../components/DefaultBreadcrumb.vue';
import Footer from '../components/DefaultFooter.vue';

import { useHead } from '@vueuse/head'
import { DefaultSEO } from '@/config/seoConfig'

// SEO
useHead({
    title: DefaultSEO.title,
    meta: [
        { name: 'description', content: DefaultSEO.description },
        { name: 'author', content: DefaultSEO.author },
        { name: 'robots', content: DefaultSEO.robots },
        { name: 'googlebot', content: DefaultSEO.googlebot },

        // Facebook...等
        { property: 'fb:app_id', content: "APP ID" },
        { property: 'og:title', content: DefaultSEO.og.title },
        { property: 'og:description', content: DefaultSEO.og.description },
        { property: 'og:image', content: DefaultSEO.og.image },
        { property: 'og:url', content: DefaultSEO.og.url },
        { property: 'og:type', content: DefaultSEO.og.type },
        { property: 'og:site_name', content: DefaultSEO.og.siteName },
        { property: 'og:locale', content: DefaultSEO.og.locale },

        // Google
        /*
        { itemprop: 'name', content: DefaultSEO.og.title },
        { itemprop: 'description', content: DefaultSEO.og.description },
        { itemprop: 'image', content: DefaultSEO.og.image },
         */

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: DefaultSEO.og.title },
        { name: 'twitter:description', content: DefaultSEO.og.description },
        { name: 'twitter:image', content: DefaultSEO.og.image },
    ],
})
</script>

<template>
    <div id="defaultLayoutView" class="bg-gray-100 dark:bg-gray-900">
        <header>
            <Navbar />
            <UpdatingAlert />
            <Banner />
            <Breadcrumb />
        </header>
        <main class="container mx-auto p-3">
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>