<script setup lang="ts">
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="container">
    <aside>
      <Menu />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  width: 100vw;
  height: var(--header-height);
}
.container {
  width: 100vw;
  height: var(--container-width);
  display: flex;
}
aside {
  width: var(--aside-width);
  height: var(--container-width);
}
main {
  width: var(--main-width);
  height: var(--container-width);
}
</style>
