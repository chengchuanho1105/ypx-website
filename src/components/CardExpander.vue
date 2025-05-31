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
    <div
      ref="wrapperRef"
      class="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      :style="{ maxHeight }"
    >
      <slot />
    </div>

    <!-- 控制按鈕 -->
    <div class="text-center mt-5">
      <button
        class="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
        @click="expanded = !expanded"
      >
        {{ expanded ? '收合內容' : '瀏覽全部' }}
      </button>
    </div>
  </div>
</template>
