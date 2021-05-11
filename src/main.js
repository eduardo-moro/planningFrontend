import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase";
import store from "@/store/index";
import "@/assets/global.css"

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDhx2rsCCWp1z3K0XkgAuKtBBmXowS8jAk",
  authDomain: "uplanner-challenge.firebaseapp.com",
  projectId: "uplanner-challenge",
  storageBucket: "uplanner-challenge.appspot.com",
  messagingSenderId: "585190817759",
  appId: "1:585190817759:web:1de34732634960d0e58e6a",
  measurementId: "G-74HB1X8T9Y"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUserData", user);
});



new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
