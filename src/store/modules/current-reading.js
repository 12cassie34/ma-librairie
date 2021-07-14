import axios from "axios";

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        getData({state}) {
            axios.get('/static/currentReading.json').then((response) => {
                console.log(state, response);
            })
        }
    }
}