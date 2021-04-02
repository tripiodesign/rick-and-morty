import Vue from "vue";
import Vuex from "vuex";
// import { database } from "../firebase/init"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carga: false,
    api: "",
    pjsApi: {
      api: "",
      infoApi: [],
      apiNext: "",
      apiPrev: "",
      page: 1,
      pages: 1,
      personajes: [],
      capitulos: [],
    },
    epiApi: {
      api: '',
      infoApi: [], 
      apiNext: '',
      apiPrev: '',
      page: 1,
      pages: '',
      episodios: [],
    },
    locatApi: {
      api: '',
      infoApi: [], 
      apiNext: '',
      apiPrev: '',
      page: 1,
      pages: 1,
      ubicaciones: [],
    },
    window: {
      width: 0,
      height: 0,
    },
    btnIco: {
      start: '<<',
      prev: '<',
      next: '>',
      end: '>>',
    },
    usuarios: [],
  },
  getters: {
    // dbCreate(state) {
    //   database.ref("database")
    // },
  },
  actions: {
    formatDate(date, tipo) {
      if (date && tipo == "int") {
        return (
          "" +
          date.getFullYear() +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) +
          (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
        );
      } else {
        return (
          "" +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          "-" +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          "-" +
          date.getFullYear() +
          " " +
          (date.getHours() > 9
            ? date.getHours()
            : "0" + date.getHours().toString()) +
          ":" +
          (date.getMinutes() > 9
            ? date.getMinutes()
            : "0" + date.getMinutes().toString())
        );
      }
    },
    descendente(a, b) {
      return b.fechaInt - a.fechaInt;
    },
  },
  mutations: {
    // setPjs(state, {personajes, data}){
    //   Vue.set(state.api, personajes, data)
    // }
  },
  modules: {},
});
