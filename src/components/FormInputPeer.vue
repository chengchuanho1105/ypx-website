<script setup lang="ts">


defineProps<{
    element: string;  // 'input' or 'textarea'
    type?: string;
    idName: string;
    label: string;
    required?: boolean;
    rows?: string;
}>();

</script>

<template>
    <div class="my-3 flex-1 relative">

        <input v-if="element === 'input'" :type="type" :id="idName" :name="idName" :required="required" class="w-full py-2 block peer
            font-medium text-indigo-900 dark:text-indigo-100
            border-b-2 border-gray-300 dark:border-indigo-700 dark:focus:border-indigo-400
            focus:outline-none focus:ring-0 focus:border-indigo-600 bg-transparent transition-colors duration-300"
            placeholder="">

        <textarea v-if="element === 'textarea'" :id="idName" :name="idName" :rows="rows" required placeholder="" class="peer block w-full py-2 text-lg text-gray-900 border-b-2 border-gray-300 resize-none appearance-none
            dark:text-indigo-100 dark:border-indigo-700 dark:focus:border-indigo-400 bg-transparent
            focus:outline-none focus:ring-0 focus:border-indigo-600 transition-colors duration-300"></textarea>

        <label :for="idName"
            class="absolute
                text-lg font-medium text-indigo-500 dark:text-indigo-100
                duration-300 transform -translate-y-9 scale-75 top-3 origin-[0]
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-9 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-300">
            {{ label }} <span v-if="required" class="text-red-500"> *</span>
        </label>
    </div>
</template>