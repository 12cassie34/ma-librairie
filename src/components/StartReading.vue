<template>
  <div>
    <div class="container">
      <h1>開啟新的閱讀旅程</h1>
      <div class="modal">
        <button
          class="uk-button uk-button-default confirm"
          type="button"
          uk-toggle="target: #new-book-modal"
        >
          不讀會死
        </button>
        <div id="new-book-modal" uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <h2 class="uk-modal-title">Reading Is My Life</h2>
            <form class="uk-form-stacked">
              <div class="uk-margin">
                <label class="uk-form-label" for="book-name">書名</label>
                <div class="uk-form-controls">
                  <input
                    v-model="name"
                    id="book-name"
                    type="text"
                    placeholder="書名"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="book-trans-name"
                  >中文書名</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="trans_name"
                    id="book-trans-name"
                    type="text"
                    placeholder="中文書名"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="author"
                  >作者</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="author"
                    id="author"
                    type="text"
                    placeholder="作者"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="translator"
                  >譯者</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="translator"
                    id="translator"
                    type="text"
                    placeholder="譯者"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="publish-house"
                  >出版社</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="publish_house"
                    id="publish-house"
                    type="text"
                    placeholder="出版社"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="tw-publish-date"
                  >出版日期</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="tw_publish_date"
                    id="tw-publish-date"
                    type="date"
                    placeholder="出版日期"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="pages"
                  >頁數</label
                >
                <div class="uk-form-controls">
                  <input
                    v-model="pages"
                    id="pages"
                    type="number"
                    placeholder="頁數"
                  />
                </div>
              </div>
              <div class="uk-margin" uk-margin>
                <div uk-form-custom="target: true">
                  <input
                    class="uk-input uk-form-width-medium"
                    type="file"
                    placeholder="上傳書封"
                    disabled
                  />
                </div>
                <button class="uk-button uk-button-default">上傳書封</button>
              </div>
            </form>
            <p class="uk-text-right">
              <button
                class="uk-button uk-button-default uk-modal-close"
                type="button"
              >
                算了
              </button>
              <button
                @click="newReading"
                class="uk-button uk-button-primary uk-modal-close confirm"
                type="button"
              >
                讀書啦
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      trans_name: "",
      img: "",
      author: "",
      translator: "",
      publish_house: "",
      tw_publish_date: "",
      pages: "",
    };
  },
  methods: {
    newReading() {
      this.$store.commit('currentReading/newReading', {
        name: this.name,
        trans_name: this.trans_name, 
        img: this.img, 
        author: this.author, 
        translator: this.translator,
        publish_house: this.publish_house, 
        tw_publish_date: this.tw_publish_date, 
        pages: this.pages
      });
      this.$store.commit('hasBook/newBook');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 25vh;
}
</style>