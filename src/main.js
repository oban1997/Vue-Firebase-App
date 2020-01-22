import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/databse'


Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyDQWicCMmJncpQ_CreCitQqQU2xoy035Uk",
  authDomain: "vue-d838d.firebaseapp.com",
  databaseURL: "https://vue-d838d.firebaseio.com",
  projectId: "vue-d838d",
  storageBucket: "vue-d838d.appspot.com",
  messagingSenderId: "53595789815",
  appId: "1:53595789815:web:948fda23495422502876f2"
})




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
