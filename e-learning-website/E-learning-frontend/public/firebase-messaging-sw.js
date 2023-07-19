
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDJ93-IIFtXwf5kKSYADJjJ5FMyKYeswBE",
    authDomain: "e-learning-app-e1477.firebaseapp.com",
    projectId: "e-learning-app-e1477",
    storageBucket: "e-learning-app-e1477.appspot.com",
    messagingSenderId: "330956980812",
    appId: "1:330956980812:web:6c0516608656f1daad6ae9",
    measurementId: "G-MF3VDLFQXJ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});