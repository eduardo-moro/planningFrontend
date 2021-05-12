import Vue from 'vue'
import Vuex from 'vuex'
import walletsApi from "@/models/walletsApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallets: walletsApi.listWallets().then(data => {
      return data.data.data;
    }),
    user: {
      data: null
    },
    loggedIn: false,
  },
  getters: {
    wallets: state => {
      return state.wallets
    },
    user: state => {
      return state.user
    },
    loggedIn: state => {
      return state.loggedIn
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value
    },
    SET_USER(state, value) {
      state.user.data = value
    }
  },
  actions: {
    fetchUserData({commit}, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        console.log(user)
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {
  },
})
