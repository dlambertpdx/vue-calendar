import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBzd6vaGC65nBmhMawiRzM4h8jcb6k0mic",
  authDomain: "vue-calendar-2b287.firebaseapp.com",
  databaseURL: "https://vue-calendar-2b287.firebaseio.com",
  projectId: "vue-calendar-2b287",
  storageBucket: "vue-calendar-2b287.appspot.com",
  messagingSenderId: "1037727546352",
  appId: "1:1037727546352:web:cd982d3f1caae9a9cbbb35"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
