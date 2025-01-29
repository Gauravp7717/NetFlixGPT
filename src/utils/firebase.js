// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_llI6KYGOBgUBIaZ1EOXZfI9BWTNseQ",
  authDomain: "netflixgpt-59d78.firebaseapp.com",
  projectId: "netflixgpt-59d78",
  storageBucket: "netflixgpt-59d78.firebasestorage.app",
  messagingSenderId: "516756316560",
  appId: "1:516756316560:web:d5c73741ef201e31da5315",
  measurementId: "G-27YZ83GHS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
