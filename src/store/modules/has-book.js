export default {
    namespaced: true,
    state: {
        hasBook: true,
    },
    getters: {},
    mutations: {
        finishReading(state) {
            state.hasBook = false;
        }
    },
    actions: {
    }
}