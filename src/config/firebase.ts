// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvtTWw-h-I4gnQxkmwyxPX39mL028fLPI",
  authDomain: "project-1-jsx.firebaseapp.com",
  projectId: "project-1-jsx",
  storageBucket: "project-1-jsx.firebasestorage.app",
  messagingSenderId: "345811474760",
  appId: "1:345811474760:web:1822fdd554942eac72bb7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
