<script setup lang="ts">
import { videos } from "@/data/video";
import router from "@/router";
import { ref } from "vue";

const movies = ref(videos);

function videoDetail(id: number) {
  router.push({ name: "videoDetail", params: { videoId: id } });
}
</script>

<template>
  <main>
    <input type="search" />
    <button>検索</button>

    <div v-for="video in movies" :key="video.id" @click="videoDetail(video.id)">
      <img :src="video.thumnails.url" />
      <div>{{ video.title }}</div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 300px;
  height: 168.75px;
}
</style>
