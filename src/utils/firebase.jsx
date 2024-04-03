// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJskQYiwPHZOXyW-liQGDLFVhxC_Ins6A",
  authDomain: "netflixgpt-b7f9e.firebaseapp.com",
  projectId: "netflixgpt-b7f9e",
  storageBucket: "netflixgpt-b7f9e.appspot.com",
  messagingSenderId: "128956275032",
  appId: "1:128956275032:web:81b2f7e5346c3e31e7ed2d",
  measurementId: "G-9WLMRZVHQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
