// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAnhc_ZOfGLTPWAI7DWvSzvXAKkA9aIaXU",
    authDomain: "mncbistro.firebaseapp.com",
    databaseURL: "https://mncbistro.firebaseio.com",
    projectId: "mncbistro",
    storageBucket: "mncbistro.appspot.com",
    messagingSenderId: "626754212958",
    appId: "1:626754212958:web:86bca01482f73513ef90cf",
    measurementId: "G-1CBMSHS5ST"
  };
  // Initialize Firebase
export const fb =  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


firebase.analytics();

firebase.analytics().logEvent('notification_received');