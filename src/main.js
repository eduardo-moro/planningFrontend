import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from "firebase";
import "@/assets/global.css"

const config = {
  apiKey: "<youKeyHere>",
  authDomain: "<youKeyHere>",
  databaseURL: "<youKeyHere>",
  projectId: "<youKeyHere>",
  storageBucket: "<youKeyHere>",
  messagingSenderId: "<youKeyHere>"};firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

