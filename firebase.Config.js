// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxfcOpDuUh-IoFMgqWUNf91j5EfM9yFHY",
  authDomain: "paul-toupale.firebaseapp.com",
  projectId: "paul-toupale",
  storageBucket: "paul-toupale.appspot.com",
  messagingSenderId: "1009778441316",
  appId: "1:1009778441316:web:dfb566456539fa1812f371",
  measurementId: "G-S0GQXC1CRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);