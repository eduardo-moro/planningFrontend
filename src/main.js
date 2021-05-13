import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "@/store/index";
import "@/assets/global.css"
import {auth} from '@/firebase';
import "./plugins/vuetify-money.js";
import Api from "@/api/api";

Vue.config.productionTip = false

const unsubscribe = auth
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
        Api,
        router,
        store,
        vuetify,
        render: h => h(App),
        created() {
            if (firebaseUser) {
                localStorage.setItem("authorization", firebaseUser.getIdToken())
                localStorage.setItem("userId",  firebaseUser.uid)
                store.dispatch('fetchUserData', firebaseUser);
            }
        }
    }).$mount('#app')
    unsubscribe();
  });
