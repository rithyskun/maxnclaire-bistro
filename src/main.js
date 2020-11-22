import Vue from "vue";
// import Vue from 'vue/dist/vue.js'
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import {fb} from "./firebase";

import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);


import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

import Swal from 'sweetalert2'
window.Swal = Swal;

import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px",
});

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;

import moment from "moment";
Vue.filter("myDate", function () {
  return moment().format("YYYYMMDD HH:mm:ss");
});

// Assign jQuery with $
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'popper.js';
import './assets/app.scss';


Vue.config.productionTip = false;

Vue.component('Hero', require('./components/Hero.vue').default);
Vue.component('Login', require('./components/Login.vue').default);
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);


let app='';
fb.auth().onAuthStateChanged((user)=>{
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});



