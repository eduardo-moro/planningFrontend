import Vue from 'vue'
import Vuex from 'vuex'
import walletsApi from "@/models/walletsApi";
import transactionsApi from "@/models/transactionsApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallets: walletsApi.listWallets().then(data => {
      return data.data.data;
    }),
    transactions: transactionsApi.listTransactions().then(data => {
      return data.data.data;
    }),
    user: {
      data: null
    },
    loggedIn: false,
  },
  getters: {
    wallets: state => state.wallets,
    transactions: state => state.transactions,
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    wallet: (state, id) => state.wallets[id]
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value
    },
    SET_USER(state, value) {
      state.user.data = value
    },
    UPDATE_WALLETS(state, value) {
      state.wallets = value
    }
  },
  actions: {
    fetchUserData({commit}, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified
        });
      } else {
        commit("SET_USER", null);
      }
    },
    updateWallets({commit}, wallets) {
      walletsApi.listWallets().then(data => {
        commit("UPDATE_WALLETS", data.data.data)
      })
    }
  },
  modules: {
  },
})
