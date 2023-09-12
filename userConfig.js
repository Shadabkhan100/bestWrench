// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS-DJiU8R-NWAN3DZjiIV86KXsN8LrRHU",
  authDomain: "bestwrench-65a58.firebaseapp.com",
  projectId: "bestwrench-65a58",
  storageBucket: "bestwrench-65a58.appspot.com",
  messagingSenderId: "1093891555853",
  appId: "1:1093891555853:web:13c077acb4e66ae49f8b44",
  measurementId: "G-PRBRFY4EL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
