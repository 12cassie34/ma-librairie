<template>
  <div class="modal">
    <button
      class="uk-button uk-button-default finish"
      type="button"
      uk-toggle="target: #finish-modal"
    >
      我讀完了
    </button>
    <div id="finish-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">確定讀完了嗎？</h2>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            取消
          </button>
          <button @click="finish" class="uk-button uk-button-primary uk-modal-close confirm" type="button">
            確定
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        finish() {
            this.$store.commit('currentReading/finish');
        }
    }
}
</script>

<style lang="scss" scoped>
button.finish {
    background-color: $pink;
}
button:hover.finish {
    border-color: #f0828c;
    background-color: transparent;
    color: #f0828c;
}
</style>