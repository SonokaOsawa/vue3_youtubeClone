<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">ホーム</RouterLink>
      <RouterLink to="/myPage">マイページ</RouterLink>
      <RouterLink to="/upload">アップロード</RouterLink>
      <button class="right">ログアウト</button>
    </nav>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  background-color: #ff9900;
  padding: 10px 20px;
}

nav a {
  margin: 0 10px;
}

.right {
  display: flex;
  justify-content: end;
}

.wrapper {
  margin: 20px;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
}
 */
/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
}
 */
@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
