<script setup lang="ts">
defineProps<{
    question: string
    answer: string
}>()
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.group-open\:animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
}
</style>

<template>
    <div class="max-w-[80%] mx-auto my-3 p-5 bg-white dark:bg-indigo-800 rounded-xl shadow">
        <details class="group">
            <summary
                class="flex justify-between items-center font-medium cursor-pointer list-none border-b-2 border-indigo-800 dark:border-indigo-200 text-gray-800 dark:text-indigo-100">
                <span>{{ question }}</span>
                <span class="transition-transform duration-300 group-open:rotate-180 text-indigo-500">
                    <svg fill="none" height="24" width="24" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </summary>
            <p
                class="text-neutral-600 dark:text-indigo-200 mt-3 group-open:animate-fadeIn px-5 text-base leading-relaxed">
                {{ answer }}
            </p>
        </details>
    </div>
</template>