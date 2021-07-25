// import axios from "axios";
import currentReading from "@/json/currentReading.js";

export default {
    namespaced: true,
    state: {
        name: "",
        trans_name: "",
        author: "",
        translator: "",
        publish_house: "",
        tw_publish_date: "",
        pages: "",
        current_page: ""
    },
    getters: {},
    mutations: {},
    actions: {
        getData({state}) {
            state.name = currentReading.name;
            state.trans_name = currentReading.trans_name;
            state.author = currentReading.author;
            state.translator = currentReading.translator;
            state.publish_house = currentReading.publish_house;
            state.tw_publish_date = currentReading.tw_publish_date;
            state.pages = currentReading.pages;
            state.current_page = currentReading.current_page;
        }
    }
}