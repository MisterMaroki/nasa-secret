// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmk49oRZOfUA7wfXTe2B4pAwaLT2QfBaE",
  authDomain: "nasa-secret.firebaseapp.com",
  projectId: "nasa-secret",
  storageBucket: "nasa-secret.appspot.com",
  messagingSenderId: "254730984741",
  appId: "1:254730984741:web:4f402535cc61cbd7be4ecc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
