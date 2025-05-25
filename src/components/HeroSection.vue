<script setup lang="ts">

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({ duration: 800, once: false })
})

withDefaults(defineProps<{
    id?: string
    bgImg: string
    imgHeight?: string
    direction?: 'left' | 'right'
    mainTitle?: string
    subTitle?: string
    description?: string
    link?: string
    linkText?: string
}>(), {
    id: '',
    bgImg: 'https://fakeimg.pl/1920x1080/',
    imgHeight: '50svh',
    direction: 'left',
    mainTitle: '',
    subTitle: '',
    description: '',
    link: '',
    linkText: '',
})

</script>

<template>
    <section :id="id" class="my-10 overflow-hidden">

        <div class="w-full my-10 bg-fixed bg-center bg-cover" :style="{
            backgroundImage: `url(${bgImg})`,
            height: imgHeight || '80svh'
        }">

            <Transition :name="direction === 'left' ? 'slide-left' : 'slide-right'" appear>
                <div class="h-full flex items-center" :class="direction === 'left' ? 'justify-start' : 'justify-end'"
                    :data-aos="direction === 'left' ? 'fade-right' : 'fade-left'">
                    <div class="lg:w-[50%] w-full h-[50%] lg:p-10 p-5 flex items-center bg-black/75"
                        :class="direction === 'left' ? 'lg:rounded-r-full' : 'lg:rounded-l-full'">
                        <div :class="direction === 'left' ? 'lg:mr-20' : 'lg:ml-20'">
                            <h2 class="mb-2 text-2xl font-bold text-white text-start">
                                {{ mainTitle }}
                            </h2>
                            <h3 v-if="subTitle" class="mb-3 text-xl font-bold text-white text-start">
                                {{ subTitle }}
                            </h3>
                            <p v-html="description" class="mb-5 pl-5 text-lg font-medium text-white text-start"></p>
                            <a v-if="link" class="inline-block px-5 py-2 rounded-full border border-white text-white font-medium transition-all duration-500
                                hover:bg-white hover:text-black" :href="link">
                                {{ linkText }}
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>

        </div>

    </section>
</template>

<style scoped></style>