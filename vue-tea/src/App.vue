<template>
  <div id="app">
    <Tabbar />
    <router-view />
  </div>
</template>

<script>
import Tabbar from "./common/Tabbar/Tabbar.vue";
export default {
  components: {
    Tabbar,
  },
};
</script>

<style></style>
