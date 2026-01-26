// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2yER91PKEtHGQklxG64yjLIoQA_qL1C8",
  authDomain: "clone-3f958.firebaseapp.com",
  projectId: "clone-3f958",
  storageBucket: "clone-3f958.firebasestorage.app",
  messagingSenderId: "301969148487",
  appId: "1:301969148487:web:d8505c15a0cb14617b3f62",
  measurementId: "G-QYBV9S525Q"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
