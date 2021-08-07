<template>
  <div class="modal">
    <button
      class="uk-button uk-button-default confirm"
      type="button"
      uk-toggle="target: #progress-modal"
    >
      更新進度
    </button>
    <div id="progress-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">目前閱讀到哪裡了呢？</h2>
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">頁數</label>
            <div class="uk-form-controls">
              <input
                v-model="newPage"
                id="form-stacked-text"
                type="number"
                placeholder="第幾頁"
              />
            </div>
          </div>
        </form>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            取消
          </button>
          <button @click="update" class="uk-button uk-button-primary uk-modal-close confirm" type="button">
            更新進度！
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newPage: '',
        }
    },
    computed: {
        pages() {
            return this.$store.state.currentReading.pages;
        },
    },
    methods: {
        update() {
            if (this.newPage < this.pages) {
                this.$store.commit('currentReading/updateCurrentPage', this.newPage);
            } else if (this.newPage === this.pages) {
                this.$store.commit('currentReading/finish');
            }
        }
    },
    mounted() {
        this.newPage = this.$store.state.currentReading.current_page;
    }
};
</script>

<style lang="scss" scoped>
.modal {
  button {
    background-color: $midnight;
    color: white;
  }
  button:hover {
    border-color: $midnight;
    background-color: transparent;
    color: $midnight;
  }
  input.uk-input:focus {
      @include focus-input;
      border-color: red;
  }
}
</style>