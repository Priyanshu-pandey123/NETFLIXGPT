
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWhcLcUFXeVmwyATrPFciuDVi1CYFtn44",
  authDomain: "final-netflix-95d4f.firebaseapp.com",
  projectId: "final-netflix-95d4f",
  storageBucket: "final-netflix-95d4f.appspot.com",
  messagingSenderId: "78771047868",
  appId: "1:78771047868:web:bcd899494d366025a8afb9",
  measurementId: "G-T1BM6XG4TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);