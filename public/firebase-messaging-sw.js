importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBhPjFn0PVOEes4T3F7slTawLv2prZLSlg",
    authDomain: "trying-9a19b.firebaseapp.com",
    projectId: "trying-9a19b",
    storageBucket: "trying-9a19b.appspot.com",
    messagingSenderId: "509488587033",
    appId: "1:509488587033:web:cf013e5113e3d0f8e46588"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();