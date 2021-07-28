<template>
  <div class="home main-content">
    <div class="container">
      <div class="row">
        <div class="col-6 img">
          <img :src="require(`@/assets/${img}`)" :alt="trans_name">
        </div>
        <div class="col-6">
          <div class="text-container">
            <h2>{{ trans_name }}</h2>
            <p>{{ name }}</p>
            <p>{{ author }} / {{ translator }}</p>
          </div>
        </div>
      </div>
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
    img: state => state.currentReading.img,
    author: state => state.currentReading.author,
    translator: state => state.currentReading.translator,
    pages: state => state.currentReading.pages,
    current_page: state => state.currentReading.current_page,
  }),
  created() {
    this.$store.dispatch('currentReading/getData');
  },
};
</script>

<style lang="scss" scoped>
.container {
  .row {
    margin: 0 auto;
    margin-top: 25vh;
    width: 80%;
    height: 260px;
    background-color: $marron;
    .col-6.img {
        position: relative;
        img {
          position: absolute;
          top: 7%;
          right: 25%;
        }
    }
    .text-container {
        padding-right: 85px;
        padding-top: 30px;
        color: ghostwhite;
    }
  }
  h2 {
    @include up-down-margin;
    color: ghostwhite;
  }
  p {
    @include up-down-margin;
  }
  img {
    width: 200px;
  }
}
</style>
