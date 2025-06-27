import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsR9M48E-5ySuhOPb4hJzPByR7Dg8wqIc",
  authDomain: "prepview-5eb99.firebaseapp.com",
  projectId: "prepview-5eb99",
  storageBucket: "prepview-5eb99.firebasestorage.app",
  messagingSenderId: "603942063784",
  appId: "1:603942063784:web:9aee956ba26a4278e1fc9d",
  measurementId: "G-X5XW35T3MK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);