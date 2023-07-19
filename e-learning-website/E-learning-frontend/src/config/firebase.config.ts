// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "e-learning-app-e1477.firebaseapp.com",
    projectId: "e-learning-app-e1477",
    storageBucket: "e-learning-app-e1477.appspot.com",
    messagingSenderId: "330956980812",
    appId: "1:330956980812:web:6c0516608656f1daad6ae9",
    measurementId: "G-MF3VDLFQXJ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


const messaging = getMessaging(app);


export default messaging;
