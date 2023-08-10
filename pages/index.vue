<template>
    <div>
        <NuxtLayout name="default">
            <template #header>トップ</template>
        </NuxtLayout>
        <h1>Main Page</h1>
        <!-- <img src="/twitter.png" alt="twitter" /> -->
        <div class="flex space-x-4">
            <input type="text" v-model="name" class="input input-bordered w-full max-w-xs" placeholder="入力してください"/>
            <button class="btn btn btn-primary" @click="login">入力</button>
        </div>
        <div>
            <!-- <button @click="() => inc()">increase</button> -->
        </div>
        <div>{{ data }}</div>
    </div>
</template>
<script setup>
const name = ref("")
const router = useRouter();
const login = () => {
    user(name)
    router.push({path: "/room/roomList"})
}
const { data } = useFetch('/api/hello')

definePageMeta({
    layout: false,
})
</script>