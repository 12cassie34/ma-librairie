// import axios from "axios";
import currentReading from "@/json/currentReading.js";

export default {
    namespaced: true,
    state: {
        name: "",
        trans_name: "",
        img: "",
        author: "",
        translator: "",
        publish_house: "",
        tw_publish_date: "",
        pages: "",
        current_page: "",
        finishReading: false
    },
    getters: {},
    mutations: {
        updateCurrentPage(state, currentPage) {
            state.current_page = currentPage;
        },
        changeName(state, newName) {
            state.name = newName;
        },
        finish(state) {
            state.finishReading = true;
            state.name = '';
            state.trans_name = '';
            state.img = '';
            state.author = '';
            state.translator = '';
            state.publish_house = '';
            state.tw_publish_date = '';
            state.pages = '';
            state.current_page = '';
        },
        newReading(state, newBook) {
            state.name = newBook.name;
            state.trans_name = newBook.trans_name;
            state.img = newBook.img;
            state.author = newBook.author;
            state.translator = newBook.translator;
            state.publish_house = newBook.publish_house;
            state.tw_publish_date = newBook.tw_publish_date;
            state.pages = newBook.pages;
            state.finishReading = false;
        }
    },
    actions: {
        getData({state}) {
            state.name = currentReading.name;
            state.trans_name = currentReading.trans_name;
            state.img = currentReading.img;
            state.author = currentReading.author;
            state.translator = currentReading.translator;
            state.publish_house = currentReading.publish_house;
            state.tw_publish_date = currentReading.tw_publish_date;
            state.pages = currentReading.pages;
            state.current_page = currentReading.current_page;
        }
    }
}