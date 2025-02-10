// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFsT_7E2xrJKB7f211te5_Ai1FCLDuKf0",
  authDomain: "comment-asa.firebaseapp.com",
  projectId: "comment-asa",
  storageBucket: "comment-asa.firebasestorage.app",
  messagingSenderId: "212921434485",
  appId: "1:212921434485:web:0f3ca4e31eac488c42933c",
  measurementId: "G-RTWWLFJW5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
