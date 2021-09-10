import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDgFAaPK8UGF3CTCzNAXJcSndKyxQ-Xt8A",
  authDomain: "monda-b7b06.firebaseapp.com",
  projectId: "monda-b7b06",
  storageBucket: "monda-b7b06.appspot.com",
  messagingSenderId: "377556129608",
  appId: "1:377556129608:web:cd092719468d427c1f857d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    auth: {}
  },
  store,
  render: h => h(App)
}).$mount('#app')
