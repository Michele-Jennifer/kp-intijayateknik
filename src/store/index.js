import Vue from "vue";
import Vuex from "vuex";
import produk from "../mock/produk.json";
import Cart from "../components/Cart.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produk: [],
    Cart
  },

  getters: {
    produk: state => state.produk,
    Cart: state => state.Cart
  },

  actions: {
      getProducts({ commit }) {
       commit("getProductData")
    }
  },
  mutations: {
    getProductData(state) {
        state.produk = produk;
    }
  }
});
