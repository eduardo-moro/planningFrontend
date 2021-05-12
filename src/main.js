import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "@/store/index";
import "@/assets/global.css"
import {auth} from '@/firebase';
import "./plugins/vuetify-money.js";

Vue.config.productionTip = false

const unsubscribe = auth
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created() {
        if (firebaseUser) {
            console.log(firebaseUser.emailVerified)
            store.dispatch('fetchUserData', firebaseUser);
        }
      }
    }).$mount('#app')
    unsubscribe();
  });
