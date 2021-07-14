<template>
  <div id="app" class="clearfix">
    <sidebar></sidebar>
    <router-view />
  </div>
</template>

<script>

import sidebar from "@/components/Sidebar.vue";

export default {
  components: { sidebar },
};
</script>

<style lang="scss">
@import "../node_modules/uikit/src/scss/variables-theme.scss";
@import "../node_modules/uikit/src/scss/mixins-theme.scss";
@import "../node_modules/uikit/src/scss/uikit.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

.main-content {
  width: 80%;
  float: right;
}
</style>
