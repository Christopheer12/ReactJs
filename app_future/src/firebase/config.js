// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn4SlYjWJ0EaVFkXo0cD6VPQAbQH_j9u8",
    authDomain: "app-future-9b2dc.firebaseapp.com",
    projectId: "app-future-9b2dc",
    storageBucket: "app-future-9b2dc.appspot.com",
    messagingSenderId: "765068875889",
    appId: "1:765068875889:web:b29a8b0f643652daf923d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}