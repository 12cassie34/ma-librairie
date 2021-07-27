<template>
  <div class="home main-content">
    <div class="container">
      <h2>{{ trans_name }}</h2>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Home",
  computed: mapState({
    // arrow functions can make the code very succinct!
    name: state => state.currentReading.name,
    trans_name: state => state.currentReading.trans_name,
  }),
  created() {
    this.$store.dispatch('currentReading/getData');
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  h2 {
    @include up-down-margin;
  }
  p {
    margin-bottom: 0;
  }
}
</style>
