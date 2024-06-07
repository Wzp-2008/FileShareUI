<script setup lang="ts">
import {ref} from "vue";

const isOpened = ref<boolean>();
</script>

<template>
  <teleport to="body" v-if="isOpened">
    <div class="test"></div>
  </teleport>
  <slot @contextmenu="openContextMenu"></slot>
</template>

<style scoped>
.test {
  background-color: black;
  width: 100px;
  height: 100px;
}
</style>