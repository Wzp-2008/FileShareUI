<script setup lang="ts">
import {useRouter} from "vue-router";
import {isRouterAccessible} from "../router";

const router = useRouter();
const accessibleRouters = router.getRoutes().filter((e) => {
  return isRouterAccessible(e.meta);
})
</script>

<template>
  <div class="links">
    <div v-for="route of accessibleRouters">
      <component :is="route.meta.menu.icon" v-if="route.meta.menu.icon" class="link-icon" />{{ route.meta.menu.name }}
    </div>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
}
.links > div {
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  margin: 0 5px;
  height: 30px;
}
.links > div:hover {
  cursor: pointer;
  background-color: rgba(168, 165, 165, 0.6);
}
.link-icon {
  width: 30px;
  height: 30px;
}
</style>