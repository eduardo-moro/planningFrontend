import Vue from 'vue'
import Vuex from 'vuex'
import walletsApi from "@/models/walletsApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallets: walletsApi.listWallets().then(data => {
      return data.data.data;
    })
  },
  getters: {
    wallets: state => {
      return state.wallets
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
})
