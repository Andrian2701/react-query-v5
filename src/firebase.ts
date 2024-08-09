import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfNYunVJcFiigNdaa6Am4GKhxGN1BzWDs",
  authDomain: "react-query-v5.firebaseapp.com",
  projectId: "react-query-v5",
  storageBucket: "react-query-v5.appspot.com",
  messagingSenderId: "477520302596",
  appId: "1:477520302596:web:1fafa4720241bf46e25b51",
  measurementId: "G-ETE3J17PKG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
