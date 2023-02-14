<script setup lang="ts">
import { videos } from "@/data/video";
</script>

<template>
  <main>
    <input type="search" />
    <button>検索</button>

    <div v-for="video in videos" :key="video.id">
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
