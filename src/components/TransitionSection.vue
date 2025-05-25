<script setup lang="ts">

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({ duration: 800, once: false })
})

withDefaults(defineProps<{
    id?: string
    background: string
    imgHeight?: string
    leftTitle?: string
    rightTitle?: string
    des?: string
    link?: string
    linkText?: string
}>(), {
    id: '',
    imgHeight: '50svh',
    leftTitle: '',
    rightTitle: '',
    des: '',
    link: '',
    linkText: '',
})

</script>

<template>
    <section :id="id" class="overflow-hidden">
        <!-- 上白底區塊 -->
        <div class="h-10"></div>

        <!-- 背景圖 + 文字內容 -->
        <div class="w-full bg-fixed bg-center bg-cover" :style="{
            backgroundImage: `url(${background})`,
            height: imgHeight || '80svh'
        }">

            <Transition name="slide-left" appear>
                <div v-if="leftTitle" class="h-full flex items-center justify-start" data-aos="fade-right">
                    <div class="lg:w-[50%] w-full h-[50%] lg:p-10 p-5 flex items-center bg-black/75 lg:rounded-r-full">
                        <div class="lg:mr-20">
                            <h2 class="mb-3 text-start text-2xl font-bold text-white">
                                {{ leftTitle }}
                            </h2>
                            <p v-html="des" class="mb-5 pl-5 text-start text-lg font-medium text-white">
                            </p>
                            <a v-if="link" class="m-5 px-5 py-2 bg-indigo-200 rounded-full" :href="link">
                                {{ linkText }}
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>

            <Transition name="slide-right" appear>
                <div v-if="rightTitle" class="h-full flex items-center justify-end" data-aos="fade-left">
                    <div class="lg:w-[50%] w-full h-[50%] lg:p-10 p-5 flex items-center bg-black/75 lg:rounded-l-full">
                        <div class="lg:ml-20">
                            <h2 class="mb-3 text-start text-2xl font-bold text-white">
                                {{ rightTitle }}
                            </h2>
                            <p v-html="des" class="pl-5 pb-5 text-start text-lg font-medium text-white"></p>
                            <a v-if="link" class="m-5 px-5 py-2 bg-indigo-200 rounded-full" :href="link">
                                {{ linkText }}
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>

        </div>

        <!-- 下白底區塊 -->
        <div class="h-10"></div>
    </section>
</template>

<style scoped></style>