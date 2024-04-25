// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4GMeyGYiW3-3DySci2zA8sh4bAcDK4Tk",
  authDomain: "coffee-store-9f22b.firebaseapp.com",
  projectId: "coffee-store-9f22b",
  storageBucket: "coffee-store-9f22b.appspot.com",
  messagingSenderId: "691063929640",
  appId: "1:691063929640:web:8e093a0894bb445f582e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;