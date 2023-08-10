<template>
    <div>
        <h1>Chat page</h1>
        <template v-for="(item, index) in data">
            <div class="chat" :class="{ 'chat-start': userName === item.name, 'chat-end': userName !== item.name }">
                <div class="chat-bubble">{{ item.text }}</div>
                <div class="chat-header">
                    {{ item.name }}
                    <span class="text-xs opacity-50">{{ item.date }}</span>
                </div>
            </div>
        </template>
        <div class="flex space-x-4">
            <input type="text" class="input input-bordered w-full max-w-xs" />
            <button class="btn btn btn-primary">投稿</button>
        </div>
    </div>
</template>
<script setup>
const data = ref([{ text: "a", name: null, date: "8/8 16:00" }, { text: "b", name: "u1", date: "8/8 17:00" }])
definePageMeta({
    layout: "custom",
})  
</script>