// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "easyshop-387313.firebaseapp.com",
    projectId: "easyshop-387313",
    storageBucket: "easyshop-387313.appspot.com",
    messagingSenderId: "718079730774",
    appId: "1:718079730774:web:0b681b429e7c638cb447f7",
    measurementId: "G-X4JG5CLT1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);