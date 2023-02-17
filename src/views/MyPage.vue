<script setup lang="ts">
import { videos } from "@/data/video";
import router from "@/router";
import { ref } from "vue";

const movies = ref(videos);

function videoEdit(id: number) {
  router.push({ name: "videoEdit", params: { videoId: id } });
}
</script>

<template>
  <div class="about">
    <h1>マイページ</h1>
    <table>
      <thead>
        <tr>
          <th colspan="2">動画</th>
          <th>公開設定</th>
          <th>日付</th>
          <th>視聴回数</th>
          <th>コメント</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="video in movies" :key="video.id">
          <td><img :src="video.thumnails.url" /></td>
          <td>{{ video.title }}</td>
          <td>{{ video.status }}</td>
          <td>{{ video.date }}</td>
          <td>{{ video.views }}</td>
          <td>{{ video.comments.length }}</td>
          <td><button @click="videoEdit(video.id)">編集</button></td>
          <td><button>削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
img {
  width: 300px;
  height: 168.75px;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
