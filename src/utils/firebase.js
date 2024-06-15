// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhRJUMhoZEhfg70fZPf_h5Jko1EkE971o",
  authDomain: "netflixgpt-973d3.firebaseapp.com",
  projectId: "netflixgpt-973d3",
  storageBucket: "netflixgpt-973d3.appspot.com",
  messagingSenderId: "830205269006",
  appId: "1:830205269006:web:a8f68c49a602f1b62f985f",
  measurementId: "G-D5WV7X4Z04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


