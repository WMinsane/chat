<template>
  <div class="join py-4">
    <input class="input input-bordered join-item" placeholder="タイトルで検索" />
    <button class="btn join-item rounded-r-full">検索</button>
  </div>
  <div class="flex space-x-4">
    <div class="card w-32 bg-base-100 shadow-xl" v-for="item in data">
      <div class="card-body">
        <h2 class="card-title">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">開く</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = ref([{ title: "xx", description: "aaa" }, { title: "yy", description: "bbb" }])
// const { data: posts } = await useFetch(
//   'https://jsonplaceholder.typicode.com/posts/'
// );
definePageMeta({
  layout: "custom",
})
</script>