import Vue from "vue";
import Vuex from "vuex";
import menus from "@/db/menus";
import products from "@/db/products";
import slider from "@/db/slider";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [],
    headerproducts: [],
    productById: {},
    cart_products: [],
    slider_item: [],
  },
  getters: {
    getMenus: (state) => {
      return state.menus;
    },
    getHeaderCart: (state) => {
      return state.headerproducts;
    },
    getProductByID: (state) => {
      return state.productById;
    },
    getCartProduct: (state) => {
      return state.cart_products;
    },
    getSliderItem: (state) => {
      return state.slider_item;
    },
  },
  mutations: {
    setAllMenus(state, payload) {
      state.menus = payload;
    },
    setHeaderProducts(state, payload) {
      state.headerproducts = payload;
    },
    setProductByID(state, payload) {
      state.productById = payload[0];
    },
    setCartProduct(state, payload) {
      state.cart_products = payload;
    },
    setSliderItem(state, payload) {
      state.slider_item = payload;
    },
  },
  actions: {
    getAllMenus(context) {
      context.commit("setAllMenus", menus);
    },
    getHeaderProducts(context) {
      context.commit("setHeaderProducts", products.splice(0, 4));
    },
    getProductByID(context, payload) {
      context.commit(
        "setProductByID",
        products.filter((x) => x.id === payload.id)
      );
    },
    getCartProduct(context) {
      let cart_products = JSON.parse(window.localStorage.getItem("cart"));
      context.commit("setCartProduct", cart_products);
    },
    deleteCartProducts(context, payload) {
      window.localStorage.setItem("cart", JSON.stringify(payload));
    },
    getSliderItem(context) {
      context.commit("setSliderItem", slider);
    },
  },
  modules: {},
});
