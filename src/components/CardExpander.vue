<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    collapsedHeight?: number
  }>(),
  {
    collapsedHeight: 630,
  },
)

const expanded = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const maxHeight = ref('0px')

// 根據展開狀態計算高度
const updateHeight = () => {
  if (!wrapperRef.value) return
  const scrollHeight = wrapperRef.value.scrollHeight
  maxHeight.value = expanded.value ? `${scrollHeight}px` : `${props.collapsedHeight}px`
}

watch(expanded, async () => {
  await nextTick()
  updateHeight()
})

onMounted(() => {
  updateHeight()
  window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight)
})
</script>

<template>
  <div class="relative">

    <!-- 外層包覆區塊 -->
    <div ref="wrapperRef" class="relative overflow-hidden transition-[max-height] duration-700 ease-in-out"
      :style="{ maxHeight }">
      <slot />
      <!-- 未展開時顯示的柔邊遮罩 -->
      <div v-if="!expanded" class="absolute bottom-0 left-0 w-full h-10
               bg-gradient-to-t from-indigo-50 dark:from-indigo-950
               pointer-events-none" />
    </div>

    <!-- 控制按鈕 -->
    <div class="text-center m-5">
      <button class="inline-flex items-center gap-2 px-5 py-2 text-indigo-700 bg-indigo-100 rounded-md
               hover:bg-indigo-200 transition" @click="expanded = !expanded">
        <span>{{ expanded ? '收合內容' : '瀏覽全部' }}</span>
        <i :class="expanded ? 'bi bi-chevron-double-up' : 'bi bi-chevron-double-down'"></i>
      </button>
    </div>

  </div>
</template>
