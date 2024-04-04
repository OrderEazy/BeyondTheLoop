// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0MiO3Wqn8YHjZiL3OzAEaEK6jsoS-PI0",
  authDomain: "ordereazy-b3695.firebaseapp.com",
  projectId: "ordereazy-b3695",
  storageBucket: "ordereazy-b3695.appspot.com",
  messagingSenderId: "465020020406",
  appId: "1:465020020406:web:f1b368b4e2e81ebd94e817",
  measurementId: "G-DHRCK7L8VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
