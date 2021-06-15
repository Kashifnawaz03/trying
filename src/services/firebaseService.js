import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhPjFn0PVOEes4T3F7slTawLv2prZLSlg",
    authDomain: "trying-9a19b.firebaseapp.com",
    projectId: "trying-9a19b",
    storageBucket: "trying-9a19b.appspot.com",
    messagingSenderId: "509488587033",
    appId: "1:509488587033:web:cf013e5113e3d0f8e46588"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotificaton(){
    Notification.requestPermission().then((permission) => 
    {console.log(permission)
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("Tokken");
                    console.log("Tokken => " ,currentToken );
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}