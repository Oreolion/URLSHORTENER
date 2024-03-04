// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC96CxDfTYJkMsc0NjCzmP1tYASEDpvXmI",
  authDomain: "urlshortnerapp-dacce.firebaseapp.com",
  projectId: "urlshortnerapp-dacce",
  storageBucket: "urlshortnerapp-dacce.appspot.com",
  messagingSenderId: "23876524906",
  appId: "1:23876524906:web:9d7dd5588c646ee5f6a313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

