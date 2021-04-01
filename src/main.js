import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'
import '@/assets/css/tailwind.css'


Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCbYglH9tupxtH_jd1FfXi1uZc2sg5J1pU",
  authDomain: "viefire-ejemplo.firebaseapp.com",
  projectId: "viefire-ejemplo",
  storageBucket: "viefire-ejemplo.appspot.com",
  messagingSenderId: "176043092797",
  appId: "1:176043092797:web:854232159976c525a37354"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
