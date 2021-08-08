<template>
  <div class="home main-content">
    <transition name="fade">
      <div v-if="hasBook === true" id="current-reading" class="container">
        <div class="progress">
          <div class="bars">
            <div :style="progressWidth" class="progress-bar"></div>
            <div class="bar"></div>
          </div>
          <div class="number">{{ current_page }} / {{ pages }}</div>
        </div>
        <div class="row">
          <div class="col-6 img">
            <img :src="require(`@/assets/${img}`)" :alt="trans_name" />
          </div>
          <div class="col-6">
            <div class="text-container">
              <h2>{{ trans_name }}</h2>
              <p>{{ name }}</p>
              <p>{{ author }} / {{ translator }}</p>
            </div>
          </div>
        </div>
        <div class="btns">
          <finish-reading />
          <update-progress />
        </div>
      </div>
      <start-reading v-if="hasBook === false" />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import updateProgress from "../components/UpdateProgress.vue";
import finishReading from "../components/FinishReading.vue";
import startReading from "../components/StartReading.vue";

export default {
  name: "Home",
  components: {
    updateProgress,
    finishReading,
    startReading,
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    name: (state) => state.currentReading.name,
    trans_name: (state) => state.currentReading.trans_name,
    img: (state) => state.currentReading.img,
    author: (state) => state.currentReading.author,
    translator: (state) => state.currentReading.translator,
    pages: (state) => state.currentReading.pages,
    current_page: (state) => state.currentReading.current_page,
    hasBook: (state) => state.hasBook.hasBook,
    progressWidth() {
      const percentage = (this.current_page * 100) / this.pages;
      return {
        width: `${percentage}%`,
      };
    },
  }),
  watch: {
    current_page() {
      if (this.current_page === this.pages) {
        this.$store.commit("hasBook/finishReading");
      }
    },
  },
  created() {
    this.$store.dispatch("currentReading/getData");
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 25vh;
  opacity: 1;
  .progress {
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bars {
      width: 90%;
      position: relative;
      .progress-bar {
        height: 5px;
        background-color: $pink;
        position: absolute;
      }
      .bar {
        width: 100%;
        height: 5px;
        background-color: $midnight;
      }
    }
  }
  .row {
    margin: 0 auto;
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
  .btns {
    display: flex;
    justify-content: flex-end;
    width: 90%;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
