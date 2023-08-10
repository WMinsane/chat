<template>
    <div class="flex justify-center">
        <form class="w-full max-w-xs">
            <label class="label">
                <span class="label-text">タイトル</span>
            </label>
            <input type="text" class="input input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">説明文</span>
            </label>
            <textarea type="text" class="textarea textarea-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">投稿者の名前を隠す</span>
            </label>
            <div class="flex justify-end">
                <button  class="btn btn btn-primary" @click="create">作成</button>
            </div>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "custom",
})  
</script>