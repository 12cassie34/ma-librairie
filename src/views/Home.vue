<template>
  <div class="home main-content">
    <h1>Hello World</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch('currentReading/getData');
  }
};
</script>
